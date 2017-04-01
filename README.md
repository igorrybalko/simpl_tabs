# simple_tabs
Simple tabs jQuery</br>
jQuery плагин табов
<h4>Подключение</h4>
```html
<head>
     <script src="jquery.js"></script>
     <script src="simpletabs.js"></script>   
</head>
```
<h4>Разметка</h4>
```html
<div class="tabsblock">
     <div class="headertabs">
          <div class="nametab actheadtab">Таб 1</div>
          <div class="nametab">Таб 2</div>
          <div class="nametab">Таб 3</div>
     </div>
     <div class="tabswr">
          <div class="contenttab activetab">
               Содержимое первого таба
          </div>
          <div class="contenttab">
               Содержимое второго таба
          </div>
          <div class="contenttab">
               Содержимое третьего таба
          </div>
     </div>
</div>
```
<h4>Инициализация</h4>
```js
$(document).ready(function(){

   $('tabsblock').simpleTabs();
     
});
```
<h4>Обязательные стили</h4>
```css
.contenttab{
     display: none; /*скрываем содержимое табов*/
}
.contenttab.activetab{
     display: block; /*отобразим содержимое активного таба*/
```
<h4>Инициализация с параметрами</h4>
```js
$(document).ready(function(){

   $('tabsblock').simpleTabs({

     'title' : '.othernametab', //заголовок таба
     'content': '.othercontenttab', //содержимое таба
     'cb': callbackFunctioinName //имя функции колбека

   });
     
});
```
<h4>Подробнее о табах</h4>
http://wolfweb.com.ua/js/prostye-jquery-taby/
