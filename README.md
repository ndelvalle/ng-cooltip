# ng-cooltip

An angular module with a small collection of various hover tooltip. This module is an angular wrapper of [Tooltip Styles Inspiration](https://github.com/codrops/TooltipStylesInspiration).

## Usage:

1. Install ng-cooltip from _bower_ or import script manually
  ```
    $ bower install ng-cooltip --save
  ```
  You can also install with _npm_
  ```
    $ npm install ng-cooltip --save
  ```
2. Include the supplied JS file
  _Squip to 3 if you use Commonjs modules_

    ```html
    <!-- Bower -->
    <script type='text/javascript' src='bower_components/ng-cooltip/dist/ng-cooltip.min.js'></script>
    <!-- npm -->
    <script type='text/javascript' src='node_modules/ng-cooltip/dist/ng-cooltip.min.js'></script>
    ```
    
3. Include the supplied CSS file (or create your own CSS to override defaults)

    ```html
    <link rel='stylesheet' href='bower_components/ng-cooltip/dist/ng-cooltip.min.css' type='text/css' />
    <!-- npm -->
    <link rel='stylesheet' href='node_modules/ng-cooltip/dist/ng-cooltip.min.css' type='text/css' />
    ```
    
4. Add ng-cooltip dependency to your app

    ```js
    angular.module('myApp', ['ng-cooltip'])
    ```
  If you use Commonjs modules:
    ```js
    var ngCooltip = require('ng-cooltip');
    
    
    angular.module('myApp', [ngCooltip])
    ```

#### Params
| option          | Description                                    | Values                   |
| -------------   |:----------------------------------------------:| ---------------------:   |
| cooltip-type    | cooltip type and style                         | 'classic', 'box', 'round'|
| cooltip-item    | word / sentence that fires the tooltip         | String                   |
| cooltip-content | content on tooltip, it could be an html element| String / html element    |
| cooltip-effect  | firing tooltip effect                          | [1-5]                    |

#### Usage example
```html
<p>Lorem ipsum dolor sit amet, et perfecto deserunt <cooltip cooltip-type="classic" cooltip-item="intellegam" cooltip-content="Vel ut solum erant dicit, eum te aperiam efficiendi, et eos alia eruditi persecuti. Ius ex omnis voluptatum" cooltip-effect="1"></cooltip>nam, quem doming platonem vim no.</p>
```
