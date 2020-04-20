import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fpedit',
  templateUrl: './fpedit.component.html',
  styleUrls: ['./fpedit.component.scss']
})
export class FpeditComponent implements OnInit {

  id: Number = 0;
  flightPlanForm: FormGroup;
  flightNumber: String = '';
  aircraftType: String = '';
  aircraftPrefix: String = '';
  fromAirport: String = '';
  toAirport: String = '';
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getFlightPlan(this.route.snapshot.params['id']);
    this.flightPlanForm = this.formBuilder.group({
    'flightNumber' : [null, Validators.required],
    'aircraftType' : [null, [Validators.required, Validators.minLength(4)]],
    'aircraftPrefix' : [null, [Validators.required, Validators.minLength(6)]],
    'fromAirport' : [null, [Validators.required, Validators.minLength(3)]],
    'toAirport' : [null, [Validators.required, Validators.minLength(3)]],
    'flightDateTime' : [null, Validators.required]
  });
 }

 getFlightPlan(id) {
  this.api.getFlightPlan(id).subscribe(data => {
    this.id = data.id;
    this.flightPlanForm.setValue({
      flightNumber: data.flightNumber,
      aircraftType: data.aircraftType,
      aircraftPrefix: data.aircraftPrefix,
      fromAirport: data.fromAirport,
      toAirport: data.toAirport,
      flightDateTime: data.flightDateTime
    });
  });
 }

  updateFlightPlan(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateFlightPlan(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/fpdetail/' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
