import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';

// Rutas
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenofoundComponent,
    RegisterComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent
  ],
  imports: [  // Aquí van todos los módulos
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
