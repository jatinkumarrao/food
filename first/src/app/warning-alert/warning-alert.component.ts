import {Component} from '@angular/core'
@Component({
    selector:'app-warning',
    templateUrl:'./warning-alert.component.html',
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
export class WarningalertComponent{
servername="hello my server name";
serverCreated=false;
help="";
getStatus="offline";
servers=['aman','jatin']
constructor() {  
    this.getStatus= Math.random()>0.5 ? 'online':'offline';
}
getColor(){
    
   return this.getStatus==='offline' ? 'red':'green';
}
getServerStaus(){
return this.getStatus;
}
clickme(){
this.serverCreated=true;
this.servers.push(this.servername);
this.servername= this.servername + this.help
}
}