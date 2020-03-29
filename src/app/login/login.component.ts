import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router, RouterEvent } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }
  constructor( public router: Router) { }

  ngOnInit(): void {
    init_plugins();
    console.log('login - ngOnInit');
    console.log('login - ngOnInit', this.router.url);

    // this.router.navigate ( ['/dashboard'] );
    // this.router.events.pipe(
    //   (( event: RouterEvent ))
    // );
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.navigate ([ this.router.url]);
  }

  ingresar() {
    console.log('Login - Ingresando...');
    this.router.navigate(['/dashboard']);
    // alert ('ingresar');
  }
}
