import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/domain/applicant';
import { ApplicantService } from 'src/app/services/applicant.service';

@Component({
  selector: 'app-new-applicants',
  templateUrl: './new-applicants.component.html',
  styleUrls: ['./new-applicants.component.css']
})
export class NewApplicantsComponent implements OnInit {
  applicantDetails:Applicant=new Applicant();
  constructor(private applicantService: ApplicantService,private router :Router) { }

  ngOnInit(): void {
    
  }

  apply(){
    // console.log("in addJobDescription()");
    // this.applicantDetails.employeeDetails=this.employee;
    // this.applicantDetails.projectDetails=this.employee.projectDetails;
    // console.log(this.jobdescription);
    // this.jobdescription.jobStatus='Pending';
    // this.jobdescription.EmployeeId=this.emp
    this.applicantService.apply(this.applicantDetails).subscribe(
      data => {
        this.applicantDetails = data;
        console.log(this.applicantDetails);


      })

  }
  backtohome() {
    console.log("backtohome()");
    this.router.navigate(['']);


  }
}
