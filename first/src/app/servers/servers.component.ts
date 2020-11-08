import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles:[`
    .online{
        color:white;
    }
    h3{
        color: red;
        border:1px solid red;
        padding:20px;
        text-align: center;
    }
    `]
})
export class ServersComponent implements OnInit {
  servers=['aman','jatin']
  servername="hello my server name";
serverCreated=false;
help="";
  showSecret=false;
  log=[];
  constructor() { }

  ngOnInit(): void {
  }
  getColor(){
    return  'red';
  }
  clickme(){
    this.serverCreated=true;
    this.servers.push(this.servername);
    this.servername= this.servername + this.help
    }
    onToggleDetails(){
  this.showSecret=!this.showSecret;
  //this.log.push(this.log.length +1)
  this.log.push(new Date())
    }
}
