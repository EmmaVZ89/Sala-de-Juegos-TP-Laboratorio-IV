import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
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
        for (let i = 0; i < this.messageList.length; i++) {
          const chat = this.messageList[i];
          chat.date = this.convertDateToUnix(chat);
          console.log(chat.date);
        }
        this.messageList.sort((a: any, b: any) => a.date - b.date);
        for (let i = 0; i < this.messageList.length; i++) {
          const chat = this.messageList[i];
          chat.date = moment(new Date(chat.date)).format('DD-MM-YYYY HH:mm:ss');
        }
        setTimeout(() => {
          this.scrollToTheLastElementByClassName();
        }, 100);
      }
    });
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.user = user;
        if (user.rolUsuario == 'admin') {
          this.authService.isAdmin = true;
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
  } // end of ngOnInit

  sendMessage() {
    if (this.newMessage.trim() == '') {
      this.notifyService.showWarning('Debes escribir un mensaje', 'Chat');
      return;
    }
    const date = moment(new Date()).format('DD-MM-YYYY HH:mm:ss');
    const message = {
      user: this.user,
      text: this.newMessage,
      date: date,
    };
    this.chatService.createMessage(message);
    this.newMessage = '';
    this.scrollToTheLastElementByClassName();
  } // end of sendMessage

  scrollToTheLastElementByClassName() {
    const elements = document.getElementsByClassName('mensajes');
    const lastElement: any = elements[elements.length - 1];
    const toppos = lastElement.offsetTop;
    //@ts-ignore
    document.getElementById('contenedor-mensajes').scrollTop = toppos;
  } // end of scrollToTheLastElementByClassName

  convertDateToUnix(chat: any) {
    const initialDate = chat.date;
    const splitDate = initialDate.split(' ');
    const date = splitDate[0].split('-');
    const time = splitDate[1].split(':');
    const dd = date[0];
    const mm = date[1] - 1;
    const yyyy = date[2];
    const hh = time[0];
    const min = time[1];
    const ss = time[2];
    const dateDate = new Date(yyyy, mm, dd, hh, min, ss);

    return dateDate.getTime();
  } // end of convertDateToUnix
}
