import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FlightPlan } from 'src/model/FlightPlan';

@Component({
  selector: 'app-fpdetail',
  templateUrl: './fpdetail.component.html',
  styleUrls: ['./fpdetail.component.scss']
})
export class FpdetailComponent implements OnInit {

  flightPlan: FlightPlan = { id: 0, flightNumber: '', aircraftType: '', aircraftPrefix: '', fromAirport: '', toAirport: '', flightDateTime: null };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getFlightPlan(this.route.snapshot.params['id']);
  }

  getFlightPlan(id) {
    this.api.getFlightPlan(id)
      .subscribe(data => {
        this.flightPlan = data;
        console.log(this.flightPlan);
        this.isLoadingResults = false;
      });
  }

  deleteFlightPlan(id) {
    this.isLoadingResults = true;
    this.api.deleteFlightPlan(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/fplist']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
