import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/employee';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { ProjectDetails } from 'src/app/domain/project';
import { GetLoginDetailsService } from 'src/app/services/get-login-details.service';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-get-approved-jobs',
  templateUrl: './get-approved-jobs.component.html',
  styleUrls: ['./get-approved-jobs.component.css']
})
export class GetApprovedJobsComponent implements OnInit {
  jobDescription:JobDescriptionDetails=new JobDescriptionDetails;
    employee:EmployeeDetails=new EmployeeDetails();
    projectDetails : ProjectDetails =new ProjectDetails();
  allJobDescriptionHR: JobDescriptionDetails[] = [];
  result:boolean=false;
  constructor(private jobDescriptionService: JobDescriptionService,
    private getLoginDetails: GetLoginDetailsService,
    private router: Router ) { }

  ngOnInit(): void {
    // this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    // console.log("loading employeedetails");
    // this.getLoginDetails.getEmployeeDetails(this.login.loginId).subscribe(data => {
    //   this.employee = data;
    //   console.log(this.employee);
    //   console.log("after printing employee");
      
      this.jobDescriptionService.getApprovedJobDescription().subscribe(
        data => {
          console.log("DATA IS LOADING");
          this.allJobDescriptionHR = data;    
          console.log(this.allJobDescriptionHR);
        }
      );
    }


    publish(jobDescription: JobDescriptionDetails){
      console.log("in publish()");
      console.log(jobDescription);
      jobDescription.jobStatus='Publish';
      this.jobDescriptionService.updateJobStatus(jobDescription).subscribe(
        data=>{
          this.result=data;
          console.log(this.result);
          console.log("in publish()");
          
          
          
        }
      );
      
      
    }

  }


