import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EmptyComponent } from './pages/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
    const elem = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('micro-app-contato', elem);
  }

  ngDoBootstrap() { }
}
