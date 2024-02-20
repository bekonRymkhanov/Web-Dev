import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {Catalog} from './app/app.component';

bootstrapApplication(Catalog, appConfig)
  .catch((err) => console.error(err));
