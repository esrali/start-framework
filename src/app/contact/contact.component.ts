import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
name:string="";
age:string="";
email:string="";
pass:string="";

show():void{
  document.querySelector('#lab1')?.setAttribute("class","visible")
  if(this.name.length==0)
  {
    document.querySelector('#lab1')?.setAttribute("class","invisible")
  }
}
show1():void{
  document.querySelector('#lab2')?.setAttribute("class","visible")
  if(this.age.length==0)
  {
    document.querySelector('#lab2')?.setAttribute("class","invisible")
  }
}
show2():void{
  document.querySelector('#lab3')?.setAttribute("class","visible")
  if(this.email.length==0)
  {
    document.querySelector('#lab3')?.setAttribute("class","invisible")
  }
}
show3():void{
  document.querySelector('#lab4')?.setAttribute("class","visible")
  if(this.pass.length==0)
  {
    document.querySelector('#lab4')?.setAttribute("class","invisible")
  }
}

}
