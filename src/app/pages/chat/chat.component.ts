import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import {
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  user: any = null;
  newMessage: string = '';
  messageList: any = [];
  sendIcon = faPaperPlane;

  constructor(
    private router: Router,
    private authService: AuthService,
    private chatService: ChatService,
    private notifyService: NotificationService
  ) {
    this.chatService.getMessages().subscribe((messages) => {
      if (messages !== null) {
        this.messageList = messages;
      }
    });
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.user = user;        
      } else {
        this.router.navigate(['/login']);
      }
    });
  } // end of ngOnInit

  sendMessage() {
    if (this.newMessage.trim() == '') {
      this.notifyService.showWarning("Debes escribir un mensaje", "Chat");
      return;
    }
    const date = moment(new Date()).format('DD-MM-YYYY HH:mm:ss');
    const message = {
      user: this.user,
      text: this.newMessage,
      date: date,
    };
    this.chatService.createMessage(message);
    this.newMessage = "";
  } // end of sendMessage
}
