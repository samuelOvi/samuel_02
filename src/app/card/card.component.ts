import { Component, OnInit } from '@angular/core';
import {ActivatedRoute  } from "@angular/router";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor( private route:ActivatedRoute) { }
  getdatos(){
    const id= this.route.snapshot.paramMap.get('id');
    console.log("el id es :"+ id);
  }
  ngOnInit(): void {
    this.getdatos()
  }
  buscar:string="100 PTS";
  verde:string="verde";
  datos=[
    {
      id:"0",
      nombre:"Xiaomi",
      precio:"2800",
      imgurl1:"https://http2.mlstatic.com/D_NQ_NP_792692-MLV50437875990_062022-O.webp",
      imgurl2:"https://http2.mlstatic.com/D_Q_NP_913094-MLV50438152017_062022-R.webp",
      imgurl3:"https://http2.mlstatic.com/D_Q_NP_753880-MLV50438002488_062022-R.webp",
      imgurl4:"https://http2.mlstatic.com/D_Q_NP_792692-MLV50437875990_062022-R.webp",
      color:"negro",
      envio:"envio gratis"
    },
    {
      id:"1",
      nombre:"Alexa",
      precio:"900",
      imgurl1:"https://http2.mlstatic.com/D_Q_NP_840233-MLV50322712435_062022-R.webp",
      imgurl2:"https://http2.mlstatic.com/D_Q_NP_988667-MLV50322767155_062022-R.webp",
      imgurl3:"https://http2.mlstatic.com/D_Q_NP_897108-MLV50322638702_062022-R.webp",
      imgurl4:"https://http2.mlstatic.com/D_Q_NP_813804-MLV50322716409_062022-R.webp",
      color:"blanco",
      envio:"envio pago"
    },
    {
      id:"2",
      nombre:"iphone",
      precio:"1000",
      imgurl1:"https://http2.mlstatic.com/D_Q_NP_623503-MLV52434074896_112022-R.webp",
      imgurl2:"https://http2.mlstatic.com/D_Q_NP_747635-MLV52434146306_112022-R.webp",
      imgurl3:"https://http2.mlstatic.com/D_Q_NP_761592-MLV52434193096_112022-R.webp",
      imgurl4:"https://http2.mlstatic.com/D_Q_NP_623503-MLV52434074896_112022-R.webp",
      color:"negro",
      envio:"envio gratis"
    },
    {
      id:"3",
      nombre:"toyota",
      precio:"700",
      imgurl1:"https://http2.mlstatic.com/D_Q_NP_677995-MLV52445886992_112022-R.webp",
      imgurl2:"https://http2.mlstatic.com/D_Q_NP_770717-MLV52445979440_112022-R.webp",
      imgurl3:"https://http2.mlstatic.com/D_Q_NP_808287-MLV52445916821_112022-R.webp",
      imgurl4:"https://http2.mlstatic.com/D_Q_NP_917341-MLV52446078092_112022-R.webp",
      color:"rojo",
      envio:"envio pago"
    },
    {
      id:"4",
      nombre:"lapto",
      precio:"9000",
      imgurl1:"https://http2.mlstatic.com/D_Q_NP_600972-MLV49404357035_032022-R.webp",
      imgurl2:"https://http2.mlstatic.com/D_Q_NP_982526-MLV49404296354_032022-R.webp",
      imgurl3:"https://http2.mlstatic.com/D_Q_NP_734580-MLV49404161645_032022-R.webp",
      imgurl4:"https://http2.mlstatic.com/D_Q_NP_673880-MLV49404251521_032022-R.webp",
      color:"negro",
      envio:"envio pago"
    }
  ];
}
