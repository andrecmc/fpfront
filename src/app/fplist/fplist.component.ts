import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FlightPlan } from 'src/model/FlightPlan';

@Component({
  selector: 'app-fplist',
  templateUrl: './fplist.component.html',
  styleUrls: ['./fplist.component.scss'],
})
export class FplistComponent implements OnInit {
  isLoadingResults = false;
  displayedColumns: string[] = [ 'flightNumber', 'aircraftType', 'aircraftPrefix', 'fromAirport', 'toAirport', 'flightDateTime', 'acao'];
  dataSource: FlightPlan[];

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getFlightPlanList()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
