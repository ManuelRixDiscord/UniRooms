import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  closePath: string = "../assets/images/close.svg";
  miniMaxiPath: string = "../assets/images/minimize.svg";
  minimizePath: string = "../assets/images/lineMini.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
