import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularAppComponent } from './app/angular.component';
import { environment } from './app/environment';

declare var Prism: any;

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularAppComponent).then(() => {
  Prism.highlightAll();
});
