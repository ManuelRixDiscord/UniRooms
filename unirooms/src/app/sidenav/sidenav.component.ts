import { Component, OnInit } from '@angular/core';
import $, { event } from "jquery";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  homeIcon: string = "../assets/images/homeIcon.svg";
  chatIcon: string = "../assets/images/chatIcon.svg";
  settingsIcon: string = "../assets/images/settingsIcon.svg";
  groupsIcon: string = "../assets/images/groupsIcon.svg";
  logoIcon: string = "../assets/images/logo.svg";
  userIcon: string = "../assets/images/user-image.jpg";
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
    $(document).ready(function (){
      $(".user-img").click(function() {
        $(".user").addClass("active");
      });
    });
    $(document).ready(function (){
      $(document).click(function(event){
        if(!$(event.target).hasClass("user") && !$(event.target).hasClass("user-img"))
          $(".user").removeClass("active");
      })
    });
    }
}
