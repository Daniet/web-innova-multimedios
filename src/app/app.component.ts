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

  menuShow(){
    $('.menu').css({
      width: '100%'
    })
  }
}
