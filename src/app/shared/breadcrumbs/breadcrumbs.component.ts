import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor( private router: Router,
               private title: Title,
               private meta: Meta ) {
    this.getDataRoute()
        .subscribe ( ruta => {
          console.log('ruta:', ruta);
          this.titulo = ruta.titulo;
          this.title.setTitle (this.titulo);
          // Own success try
          // this.meta.addTag ( { name: 'page', content: this.titulo } );
          const metaTag: MetaDefinition = { name: 'description', content: ruta.descripcion };
          this.meta.addTag ( metaTag );
        });
    console.log( this.title.getTitle() );
    console.log('this.titulo', this.titulo);
  }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.router.events
        .pipe (
          filter ( evento => evento instanceof ActivationEnd ),
          filter ( ( evento: ActivationEnd ) => evento.snapshot.firstChild === null ),
          map    ( ( opcion: ActivationEnd ) => opcion.snapshot.data )
        );
  }

}
