# ngx-jscontainerbridge

  

ngx-jscontainerbridge facilitates loading angularjs and js pages as angular components.

  

## Installation

  

npm install ngx-jscontainerbridge --save

  

## Usage

### 1. 
copy js assets into an assets subdirectory (for example demo/src/assests/js)
### 2. 
import NgxJsContainerBridgeModule into app.module 
import { NgxJsContainerBridgeModule } from './ngx-jscontainerbridge/ngx-jscontainerbridge.module';
### 3. 
include NgxJsContainerBridgeModule in the app.module imports array
    NgxJsContainerBridgeModule.forRoot({path: 'assets/js'})
### 4. 
add routes for all js components. Once this is done the js/:term path will route to a ContentContainerComponent which contains the javascript loaded from assets/:term.  

```javascript
import { ContentContainerComponent } from 'ngx-jscontainerbridge';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { path: 'js/:term', component: ContentContainerComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

```
In the demo app, there is an example angularjs page located at demo/src/assets/identity/identity.html. The angular app will load that page when the route 'js/identity' is triggered. 

### 5.
Communcation between the angular app and js pages is set up by creating a global variable (i.e. APP) in the angular app in a service (see demo app/services/global-window.service). The angular app accesses the global APP via the typesafe AppGlobal class. The same global APP variable is refered to by the js page by including the script below in the js html page -  

      <script>
          if (!window['']) {
              window['APP'] = parent.APP;
          }

          function change(name) {
              APP.applicationManager.setName(name);
          }
      </script>  

When a method is called on APP it now is routed to the angular code which can run in the angular zone. 


## Source code

https://github.com/dhiles/ngx-jscontainerbridge

  

## run demo

git clone https://github.com/dhiles/ngx-jscontainerbridge

cd ngx-jscontainerbridge

npm install

npm run demo

  

## release info

### 1.1.3

- added gestures for mobile sensitive devices. Touch gesture triggers a pan which allows for repositioning of grid items. Press followed by a pan gesture allows resizing of grid items.

### 1.1.4

- fix README.md

### 1.1.5

- fix README.md

### 1.1.6

- resize on media query breakpoint changes

### 1.1.9

- custom icons in panel header

### 1.1.10

- add panel minimize/maximize
- itemUpdateEmitter lanePosition paramter for add 

### 1.1.11

- fix icon header alignment
- set non-maximized panels to hidden on maximize  
- emit resize events when resizing 

### 1.1.12

- fix npm security violation in tar node pkg version by setting node-gyp version 4.0.0 
- fix bug with not passing toolbaritem to ifFunction
- add mutexMinMaxIcons option to remove or disable minimize icon when panel is not maximized and remove or disable maximize icon when panel is maximized
- add description field to panel item to display description tooltip on title

### 1.1.13

- when make sure all panels are visible by decrementing lane count when a panel is covered (rather than scrolling) and triggering a responsive lane count update when a full row or column is visible  

### 1.1.14

- throttle mouse events
- fix npm security violation by setting querystringify to version 2.1.1
- add responsiveBreakpoints and gridContainer width and height options

### 1.1.14
- upgrade to angular 8


## Author

  

*  **Douglas Hiles**

  
  

## License

  

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

  

## Acknowledgments

  

* the gridList layout engine is based on the hootsuite GridList