import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../domain/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  applicantDetails:Applicant=new Applicant();
  private baseURL: string = "http://localhost:8080/jobdescriptionapi";
  constructor(private httpClient: HttpClient) { }

  apply(applicantDetails:Applicant): Observable<Applicant> {
    console.log("in add new job");
    console.log(applicantDetails);
    return this.httpClient.post<Applicant>(this.baseURL + "/addJob", applicantDetails);
}
}
