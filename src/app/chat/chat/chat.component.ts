import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public messages: Array<Message>;

  constructor(private chatService:ChatService) { 
    this.messages = new Array<Message>();
  }

  public gererNouveauMessage(message: Message): void { 
    this.messages = this.chatService.addMessage(message); 
  }
  public ngOnInit():void {
    this.chatService.getMessages().subscribe( 
      (messages) => this.messages = messages, 
      (error) => console.log(error) 
      ); 
    }
}
