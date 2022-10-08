import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private angularFirestore: AngularFirestore) {}

  getMessages() {
    const collection = this.angularFirestore.collection<any>('chats', (ref) =>
      ref.orderBy('date', 'asc').limit(100)
    );
    return collection.valueChanges();
  }

  createMessage(message: any) {
    this.angularFirestore.collection<any>('chats').add(message);
  }
}
