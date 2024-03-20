import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverName = 'test'
  serverCreated = false
  servers = ["test 1", "test 2"]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName
    this.serverCreated = true
    this.servers.push(this.serverName)
  }

  onUpdateServer(event: InputEvent) {
    this.serverName = (<HTMLInputElement>event.target).value
    
  }
}
