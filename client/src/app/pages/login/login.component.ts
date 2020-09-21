import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  serverErrorMessages: string;

  constructor(private route: Router, public userDetails: UserdetailsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.userDetails.login(form.value).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl('/home');
    },
      err => {
        this.serverErrorMessages = err.error.serverErrorMessages;
      }
    );
  }

  register() {
    this.route.navigateByUrl('/register');
  }

}
