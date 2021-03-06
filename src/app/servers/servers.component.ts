import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  paragraphStatus = false;
  clicks = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `${this.serverName} was created!`;
  }

  onButtonClick() {
    this.clicks.push(this.clicks.length);
    this.paragraphStatus = !this.paragraphStatus ? true : false;
    console.log(this.paragraphStatus, this.clicks);
  }

}
