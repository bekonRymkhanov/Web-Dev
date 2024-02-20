import { bootstrapApplication } from '@angular/platform-browser';
import { Catalog } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(Catalog, config);

export default bootstrap;
