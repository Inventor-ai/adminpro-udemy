import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  constructor( public sidebar: SidebarService ) { }
/*
  constructor( public sidebar: SidebarService,
               private router: Router ) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
           window.scrollTo(0, 0);
        }
      });
    }

  }
*/

  ngOnInit(): void {
    console.log(this.sidebar.menu);
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log('sidebar - ngOnDestroy');
    // Lifecycle interface OnDestroy should be implemented for method ngOnDestroy.
    // (https://angular.io/styleguide#style-09-01) (use-lifecycle-interface)
  }

}
