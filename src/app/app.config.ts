import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withRouterConfig } from '@angular/router'; // Add withInMemoryScrolling
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes, 
      withHashLocation(),
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled', // This enables the #ID scrolling
        scrollPositionRestoration: 'enabled' 
      }),
      withRouterConfig({
        onSameUrlNavigation: 'reload' // Ensures it works if you click the link twice
      })
    )
  ]
};