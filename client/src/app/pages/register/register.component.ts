import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private route: Router, public userDetails: UserdetailsService) { }

  selectedWing = [
    { wingno: 1 },
    { wingno: 2 },
    { wingno: 3 },
    { wingno: 4 },
    { wingno: 5 }
  ];

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.userDetails.post(form.value).subscribe(res => {
      this.showSucessMessage = true;
      this.route.navigateByUrl('/home');
      console.log("form submited...");
      setTimeout(() => {
        this.showSucessMessage = false
      }, 2000);
      this.resetForm(form);
    },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin'
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.userDetails.selectedUser = {
      selectedWing: '',
      roomNo: '',
      name: '',
      adharNo: '',
      mobile: '',
      doj: '',
      deposit: '',
      rent: '',
      subPersonName: '',
      subPersonMobile: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
