import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-pagina21',
  templateUrl: './pagina21.component.html',
  styleUrls: ['./pagina21.component.css']
})
export class Pagina21Component implements OnInit {

  constructor(private rutaActiva:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    //Parametros Ruta actual
    this.rutaActiva.params.subscribe(
      params=>{

        console.log("Parametros en pagina 21: ",params);
  })

    //Parametro Ruta Papa
    this.rutaActiva.parent.params.subscribe(
      params=>{

        console.log("Parametros de mi papa: ",params);
      })
  }

  navegarAInicio(){

    this.router.navigate(["pagina2",22,"pagina22",22])


  }






}



