import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  buttonclick=false;
  serverName="Jatin";
  textfieldname="";
  whenbuttonclick=true;
  servercreationserver="when the button is not click";
  constructor() { 
   setTimeout(()=>{
    this.buttonclick=true;
   },2000)
    
  }
  ngOnInit(): void {
    if(this.textfieldname===''){
      this.whenbuttonclick=false
      }
      else{
        this.whenbuttonclick=true
      }
  }
  clickbutton(){
    
  }
  onUpdateServerName($event:any){
  this.serverName=(<HTMLInputElement>event.target).value;
  }
  clickme(){
    this.servercreationserver='button click ' + this.serverName
  }
}
