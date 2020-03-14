import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './login/register.component';
// import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
// import { PagesComponent } from './pages/pages.component';

// Rutas
import { APP_ROUTES } from './app.routes';

// Módulos
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    // IncrementadorComponent   // Temp added for develop only. Move from here
    // LoginComponent,
    // RegisterComponent,
    // PagenofoundComponent,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    // PagesComponent
  ],
  imports: [  // Aquí van todos los módulos
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule  // Temporal added for Incrementador. Delete it anfter move Incrementador
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
