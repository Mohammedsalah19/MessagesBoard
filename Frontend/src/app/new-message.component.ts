import { Component, Output, EventEmitter } from '@angular/core'

import{WebService} from './Web.Services'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    selector: 'new-messages',
    template: `
    <mat-card class="card">
        <mat-card-content> 
                <mat-input-container>
                name <input [(ngModel)]="Message.owner"  matInput palceholder="name">
                </mat-input-container>
            <br>
                <mat-input-container>
                Message  <textarea  [(ngModel)]="Message.text" matInput palceholder="Message"></textarea>
                </mat-input-container>

                 <mat-card-actions>
                <button (click)="post()" mat-button color="priamry">Post</button>
                </mat-card-actions>
        </mat-card-content> 

     
    
    </mat-card>
    
    
    `
})
export class NewMessagesComponent {
@Output() onPosted = new EventEmitter();

constructor(private _webService : WebService) {}

Message ={

    owner:"",
    text:""
}

    post(){
this._webService.postMessages(this.Message);
this.onPosted.emit(this.Message);
    }
    
}