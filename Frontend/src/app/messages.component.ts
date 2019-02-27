import { Component } from '@angular/core'

import{WebService} from './Web.Services'

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of Messages">
    
    <mat-card>
    <mat-card-title> {{message.owner}}  </mat-card-title> 
    <mat-card-content> {{message.text}} </mat-card-content>
   </mat-card>
    </div>
    `
})
export class MessagesComponent {

constructor(private _webService : WebService) {}

async ngOnInit(){
     var response = await this._webService.getMessages();
     this.Messages= response.json();
}
    Messages = [{text:"First Message",owner:" Salah"},{text:"Second Message",owner:"Mohammed"}];
}