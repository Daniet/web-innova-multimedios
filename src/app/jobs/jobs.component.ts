import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  products:any = [{
    name: 'Producto 1',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 2',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 3',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 4',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 5',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 6',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 7',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 8',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 9',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 10',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 11',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 12',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 13',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 14',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 15',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 16',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 17',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 18',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 19',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 20',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  },{
    name: 'Producto 21',
    description: 'pidha hasdio hasodihouasdh asdb iasdui asb asbi asdb asb asb oasd oasd o'
  }]

  hoverProduct:any = {
    title: '',
    text: ''
  }

  preview(item){
    this.hoverProduct = item
  }

  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      $('#description-products').removeClass('description-products-hidden')
      $('#description-products').addClass('description-products-show')

      $('#list-products').removeClass('list-products-hidden')
      $('#list-products').addClass('list-products-show')
    }, 1000)
  }

}
