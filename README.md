# simple_tabs
Simple jQuery tabs</br>
Installation
```html
<head>
     <script src="jquery.js"></script>
     <script src="simpletabs.js"></script>   
</head>
```
Layout
```html
<div class="tabsblock">
     <div class="headertabs">
          <div class="nametab actheadtab">Tab 1</div>
          <div class="nametab">Tab 2</div>
          <div class="nametab">Tab 3</div>
     </div>
     <div class="tabswr">
          <div class="contenttab activetab">
               Content of the first tab
          </div>
          <div class="contenttab">
               Content of the second tab
          </div>
          <div class="contenttab">
               The contents of the third tab
          </div>
     </div>
</div>
```
Initialization
```js
$(document).ready(function(){

   $('.tabsblock').simpleTabs();
     
});
```
Required styles
```css
.contenttab{
     display: none; /* hide contents of the tabs*/
}
.contenttab.activetab{
     display: block; /*display contents of the active tab*/
}
```
Initialization with options
```js
$(document).ready(function(){

   $('.tabsblock').simpleTabs({

     'title' : '.othernametab', // tab title selector
     'content': '.othercontenttab', // tab content selector
     'cb': callbackFunctionName // callback function

   });
     
});
```
Detailed
http://greencomet.net/javascript/tabs-jquery-plugin
