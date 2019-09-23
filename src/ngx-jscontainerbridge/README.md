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

```javascript

      <script>
          if (!window['']) {
              window['APP'] = parent.APP;
          }

          function change(name) {
              APP.applicationManager.setName(name);
          }
      </script>  
```

When a method is called on APP it now is routed to the angular code which can run in the angular zone. 

## Documentation

### routing

container component routes,  i.e. [routerLink]="'/jscontainer/identity'" are matched to a route definition 
export const routes: Routes = [
    { path: 'jscontainer/:term', component ContentContainerComponent }
]

:term and the module paramaters are used to build the full path to the html file that is loaded into the component iframe.

The default full path is path/:term/index.html. If 'nameFromTerm' is true then the full path is path/:term/:term.html. If ext is defined, then the html file initially loaded must match that extension. 

### module parameters
    path: string  - directory path to javascript resources.   
        file: {
            nameFromTerm: boolean (optional) - get the file name from route term (default filename is index.html)
            ext: string (optional) file extension  (default is 'html')
        }
    }


```javascript
    NgxJsContainerBridgeModule.forRoot(
      {
        path: 'assets/js', 
        file: {
          nameFromTerm: true, 
          ext: 'js'
        }
      }
    )
```


## Source code

https://github.com/dhiles/ngx-jscontainerbridge

  

## run demo

git clone https://github.com/dhiles/ngx-jscontainerbridge

cd ngx-jscontainerbridge

npm install

npm run demo

## release info

### 1.0.3

- create WindowGlobal interface to fix circular dependencies   
- fix readme 

### 1.0.4
 
- fix readme 

## Author

  

*  **Douglas Hiles**

  
  

## License

  

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

  

