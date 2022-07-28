import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  pfpPaperino: string = "../assets/images/paperinopfp.jpg";
  pfpPippo: string = "../assets/images/pippopfp.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
