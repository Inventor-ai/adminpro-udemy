// import { Component, OnInit, Inject, ElementRef } from '@angular/core';
// import { Component, OnInit, ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import { SettingsService } from '../../services/settings.service';
// import { SettingsService } from '../../services/settings/settings.service';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // constructor( @Inject (DOCUMENT) private doc,
  //  public currentTheme: SettingsService ) { }
  constructor( public currentTheme: SettingsService ) { }

  ngOnInit(): void {
    this.currentTheme.readSettings();
    // this.setMarcaNew ( this.currentTheme.ajustes.tema );
    this.colocarMarca();
    // console.log(this.currentTheme.ajustes);
  }

  cambiaColor( tema: string, link: any ) {
  // cambiaColor( tema: string, link: ElementRef ) {
/*
    // let url = `assets/css/colors/${tema}.css`;
    const url = `assets/css/colors/${tema}.css`;
    const lastTheme = this.doc.getElementById('tema').getAttribute('href');
    console.log( {tema} );
    console.log( {link} );      // Ponerle la marca
    this.currentTheme.ajustes.tema = tema;
    this.currentTheme.ajustes.temaURL = url;
    this.currentTheme.saveSettings();
    this.doc.getElementById('tema').setAttribute('href', url);
*/
    this.currentTheme.aplicarTema ( tema );
    this.setMarca ( link );
    // const temaColor = document.getElementById('tema');
    // console.log( {temaColor} );
    // console.log('Link:', temaColor.sheet.ownerNode.href);
    // console.log(`assets/css/colors/${tema}.css`);
  }

  // Funciona pero el editor marca un error
  //    Property 'classList' does not exist on type 'ElementRef<any>'.
  // setMarca( htmlElem: ElementRef ) {
  setMarca( htmlElem: any ) {
    // console.log({htmlElem});
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
         //  console.log({ref});
         ref.classList.remove('working');
    }
    htmlElem.classList.add('working');
  }

  setMarcaNew( tema: any ) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
         //  console.log({ref});
         //  console.log('ref.dataset.theme', ref.dataset.theme);
         if (ref.dataset.theme === tema) {
             ref.classList.add('working');
         } else {
             ref.classList.remove('working');
         }
    }
  }

  colocarMarca() {
    const tema = this.currentTheme.ajustes.tema;
    const temas: any = document.getElementsByClassName('selector');
    for (const ref of temas) {
         if (ref.getAttribute('data-theme') === tema) {
             ref.classList.add('working');
             break;
         }
    }
  }

}
