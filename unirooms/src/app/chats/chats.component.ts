import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  pfpPaperino: string = "../assets/images/paperinopfp.jpg";
  pfpPippo: string = "../assets/images/pippopfp.jpg";
  callIcon: string = "../assets/images/callingIcon.svg";
  camIcon: string = "../assets/images/camIcon.svg";
  optionIcon: string = "../assets/images/optionIcon.svg";
  smile: string = "../assets/images/smile.svg";
  sendIcon: string = "../assets/images/sendIcon.svg";
  allegati: string = "../assets/images/allegati.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
