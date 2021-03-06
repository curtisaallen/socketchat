import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [ChatService]
})
export class AppComponent { }