import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { FlightPlan } from 'src/model/FlightPlan';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://localhost:5001/api/FlightPlan';
//const apiUrl = 'https://fpandre.azurewebsites.net/api/FlightPlan';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFlightPlanList (): Observable<FlightPlan[]> {
    return this.http.get<FlightPlan[]>(apiUrl)
      .pipe(
        tap(flightPlanList => console.log('Leu os planos de voo')),
        catchError(this.handleError('getFlightPlanList', []))
      );
  }

  getFlightPlan(id: number): Observable<FlightPlan> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<FlightPlan>(url).pipe(
      tap(_ => console.log(`leu o flight plan id=${id}`)),
      catchError(this.handleError<FlightPlan>(`getFlightPlan id=${id}`))
    );
  }

  addFlightPlan(flightPlan): Observable<FlightPlan> {
    return this.http.post<FlightPlan>(apiUrl, flightPlan, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((flightPlan: FlightPlan) => console.log(`adicionou o plano de voo com id=${flightPlan.id}`)),
      catchError(this.handleError<FlightPlan>('addFlightPlan'))
    );
  }

  updateFlightPlan(id, flightPlan): Observable<any> {
    const url = `${apiUrl}/${id}`;
    flightPlan.id = Number(`${id}`);
    return this.http.put(url, flightPlan, httpOptions).pipe(
      tap(_ => console.log(`atualiza o plano de voo com id=${id}`)),
      catchError(this.handleError<any>('updateFlightPlan'))
    );
  }

  deleteFlightPlan (id): Observable<FlightPlan> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<FlightPlan>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o plano de voo com id=${id}`)),
      catchError(this.handleError<FlightPlan>('deleteFlightPlan'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
