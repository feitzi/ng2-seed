import {AppModule} from './app/app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

require("font-awesome/css/font-awesome.css")

platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
  