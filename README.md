# ng-cooltip

An angular module with a small collection of various hover tooltip. This module is an angular wrapper of [Tooltip Styles Inspiration](https://github.com/codrops/TooltipStylesInspiration).

## Usage:

1. Install ng-cooltip from bower or import script manually
  ```
    $ bower install ng-cooltip --save
  ```
  
2. Include the supplied JS file

    ```html
    <script type='text/javascript' src='dist/ng-cooltip.min.js'></script>
    ```
    
3. Include the supplied CSS file (or create your own CSS to override defaults)

    ```html
    <link rel='stylesheet' href='dist/ng-cooltip.min.css' type='text/css' />
    ```
    
4. Add ng-cooltip dependency to your app

    ```js
    angular.module('myApp', ['ng-cooltip'])
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
