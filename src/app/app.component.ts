import { Component } from '@angular/core';

declare var $:any
declare var d3:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  menuItem:any = [{
    link: '',
    name: 'Incio'
  },{
    link: '',
    name: 'Productos'
  },{
    link: '',
    name: 'Trabajos'
  },{
    link: '',
    name: 'Contactenos'
  }]

  angleToPi(angle:number){
    return (angle * Math.PI)/ 180
  }

  setPosY(data){
    return Math.cos(data.PI) * data.h
  }

  setPosX(data){
    return Math.sin(data.PI) * data.h
  }

  menu(){
    let angle = 180 / (this.menuItem.length + 1)
  }

  menuShow(){
    $('.menu').addClass('menu-show')
  }

  menuhidden(){
    $('.menu').removeClass('menu-show')
  }

  ngOnInit(){
    this.menuShow()
    this.menu()
  }

}
