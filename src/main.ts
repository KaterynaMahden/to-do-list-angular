import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // TODO LIST
  // fix routing --
  // click outside
  // fix fonts --
  // fix lint --
  // fix folder and file names --
  // move router outlet higher --
  // router observable event ?
  // integrate service ?