import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fpnew',
  templateUrl: './fpnew.component.html',
  styleUrls: ['./fpnew.component.scss']
})
export class FpnewComponent implements OnInit {

  flightPlanForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.flightPlanForm = this.formBuilder.group({
    'flightNumber' : [null, Validators.required],
    'aircraftType' : [null, [Validators.required, Validators.minLength(4)]],
    'aircraftPrefix' : [null, [Validators.required, Validators.minLength(6)]],
    'fromAirport' : [null, [Validators.required, Validators.minLength(3)]],
    'toAirport' : [null, [Validators.required, Validators.minLength(3)]],
    'flightDateTime' : [null, Validators.required]
    });
  }

  addFlightPlan(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addFlightPlan(form)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/fpdetail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
