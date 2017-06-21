import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  parentRouteId:number;
  private sub:any;

  constructor(private router:Router, private rutaActiva:ActivatedRoute) { }

  ngOnInit() {

       this.rutaActiva.params.subscribe(
      params=> {

        console.log(params)
      }


    )


  }

}
