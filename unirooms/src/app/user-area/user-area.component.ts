import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {

  userBack: string = "../assets/images/user-back.jpeg";
  userPfp: string = "../assets/images/user-image.jpg";
  mailIcon: string = "../assets/images/mailIcon.svg";
  passwIcon: string = "../assets/images/passwIcon.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
