import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverStatus: string
    
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }
    
    serverId: number = 10

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}