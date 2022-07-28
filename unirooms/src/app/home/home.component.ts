import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newIcon: string = "../assets/images/newIcon.svg";
  joinIcon: string = "../assets/images/joinIcon.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
