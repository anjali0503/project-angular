import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/domain/login';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-tl-home',
  templateUrl: './tl-home.component.html',
  styleUrls: ['./tl-home.component.css']
})
export class TlHomeComponent implements OnInit {
login : Login = new Login();
  constructor(private router : Router,private jobDescriptionService: JobDescriptionService) { }

  ngOnInit(): void {
    this.login=JSON.parse(sessionStorage.getItem('login')||'{}');
  }


}
