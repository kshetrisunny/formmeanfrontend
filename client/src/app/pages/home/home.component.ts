import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { UserDetails } from 'src/app/services/userDetails.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData: UserDetails[] = [];
  constructor(public userDetails: UserdetailsService) {

  }

  ngOnInit(): void {
    this.userDetails.get().subscribe((user) => {
      this.userData = user['data'];
      console.log(this.userData);
    })
  }


}
