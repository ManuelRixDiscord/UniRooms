import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  homeIcon: string = "../assets/images/homeIcon.svg";
  chatIcon: string = "../assets/images/chatIcon.svg";
  settingsIcon: string = "../assets/images/settingsIcon.svg";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $(".nav-items").click(function () {
        $(".opened").removeClass("opened");
        $(this).addClass("opened");
        $(this).parent().parent().addClass("opened");
      });
    });
  }

}
