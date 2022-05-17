import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localesEs from '@angular/common/locales/es-PE';
import localesFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'

registerLocaleData( localesEs );
registerLocaleData( localesFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [ 
    {
      provide: LOCALE_ID, useValue:'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
