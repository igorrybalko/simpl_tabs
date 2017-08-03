# simple_tabs
Simple tabs jQuery</br>
jQuery плагин табов</br>
Подключение
```html
<head>
     <script src="jquery.js"></script>
     <script src="simpletabs.js"></script>   
</head>
```
Разметка
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
Инициализация
```js
$(document).ready(function(){

   $('.tabsblock').simpleTabs();
     
});
```
Обязательные стили
```css
.contenttab{
     display: none; /*скрываем содержимое табов*/
}
.contenttab.activetab{
     display: block; /*отобразим содержимое активного таба*/
}
```
Инициализация с параметрами
```js
$(document).ready(function(){

   $('.tabsblock').simpleTabs({

     'title' : '.othernametab', //заголовок таба
     'content': '.othercontenttab', //содержимое таба
     'cb': callbackFunctioinName //имя функции колбека

   });
     
});
```
Подробнее о табах
http://wolfweb.com.ua/js/prostye-jquery-taby/
