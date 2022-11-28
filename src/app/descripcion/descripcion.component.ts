import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getdatos()
  }
  buscar:string="te preparamos para trabajar";
  id:any=this.route.snapshot.paramMap.get('id');
  getdatos(){
    const id= this.route.snapshot.paramMap.get('id');
    console.log("el id es :"+ id)
  }
  datos=[
    {
      id:0,
      nombre:"Xiaomi Audífonos",
      precio:"2800",
      imgurl1:"https://depor.com/resizer/SO9QK04f5yRIr_VfXwGNx_86dlc=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WZN5B22KZZAHZMQUZVDVSWMW2E.jpg",
      imgurl2:"http://arueda.bike/wp-content/uploads/2020/04/arueda-ciclismo-auriculares-xiaomi-conjunto-principal.jpg",
      imgurl3:"https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/37L6PLNM2ZFVDD63COZB6JKLA4.jpg",
      imgurl4:"https://http2.mlstatic.com/D_NQ_NP_641200-MLV50729524673_072022-O.jpg",
      color:"negro",
      envio:"envio gratis"
    },
    {
      id:1,
      nombre:"Alexa",
      precio:"900",
      imgurl1:"https://www.irishnews.com/picturesarchive/irishnews/irishnews/2018/12/05/160105423-f1b4fe21-08fd-4092-90ec-210aa34987b9.jpg",
      imgurl2:"https://images.unsplash.com/photo-1568910748155-01ca989dbdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWxleGF8ZW58MHx8MHx8&w=1000&q=80",
      imgurl3:"https://images.unsplash.com/photo-1615834593791-aa31b118afe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWxleGF8ZW58MHx8MHx8&w=1000&q=80",
      imgurl4:"https://www.kindpng.com/picc/m/172-1723372_amazon-alexa-site-amazon-fr-echo-dot-hd.png",
      color:"blanco",
      envio:"envio pago"
    },
    {
      id:2,
      nombre:"iphone",
      precio:"1000",
      imgurl1:"https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      imgurl2:"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      imgurl3:"https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      imgurl4:"https://images.unsplash.com/photo-1636388446054-b8fced977df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXBob25lJTIwMTF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      color:"negro",
      envio:"envio gratis"
    },
    {
      id:3,
      nombre:"toyota",
      precio:"700",
      imgurl1:"https://multimarca.com.ve/wp-content/uploads/2020/03/20190914-TOYOTA-4RUNNER-2020-01-750x460-1.jpg",
      imgurl2:"https://multimarca.com.ve/wp-content/uploads/2020/03/shutterstock_712744384.jpg",
      imgurl3:"https://multimarca.com.ve/wp-content/uploads/2020/03/20190914-TOYOTA-4RUNNER-2020-02.jpg",
      imgurl4:"https://multimarca.com.ve/wp-content/uploads/2020/03/20190914-TOYOTA-4RUNNER-2020-06.jpg",
      color:"rojo",
      envio:"envio pago"
    },
    {
      id:4,
      nombre:"lapto",
      precio:"9000",
      imgurl1:"https://www.pngitem.com/pimgs/m/247-2474699_laptop-apple-macbook-pro-hd-png-download.png",
      imgurl2:"https://p4.wallpaperbetter.com/wallpaper/204/445/76/apple-macbook-on-desk-wallpaper-preview.jpg",
      imgurl3:"https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png",
      imgurl4:"https://p4.wallpaperbetter.com/wallpaper/568/196/857/macbook-apple-inc-iphone-mac-book-wallpaper-preview.jpg",
      color:"negro",
      envio:"envio pago"
    }
  ];
}


