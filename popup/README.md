###Обработка и вызов
Для упрощения вызовов и обработки popup'ов, я использовал `jQuery 1.11.1`.
На нативном `javascript` необходимо было бы для `IE8` и ниже эмулировать метод `getElementsByClassName`:
```js
if(document.getElementsByClassName == undefined) { 
   document.getElementsByClassName = function(cl) { 
      var retnode = []; 
      var myclass = new RegExp('\\b'+cl+'\\b'); 
      var elem = this.getElementsByTagName('*'); 
      for (var i = 0; i < elem.length; i++) { 
         var classes = elem[i].className; 
         if (myclass.test(classes)) { 
            retnode.push(elem[i]); 
         } 
      } 
      return retnode; 
   } 
}; 
```

а также использовать проверку на наличие `addEventListener`, и в случае отсутствия использовать `attachEvent`:

```js
if (window.addEventListener) {
  window.addEventListener('load', myFunc, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', myFunc);
}
```

###Подложка
Во всех примерах с popup'ами я использовал подложку с затемнением. Её целью является ограничение действий пользователя и акцентирование внимания на контенте popup'a.
В некоторых случаях, подложка может быть не нужна(если необходимо дать пользователю возможность выполнять действия на странице, когда popup открыт).

###Ограничение скрола
В некоторых случаях(и это считается правильным) нужно огранивать скролл под подложкой. Это делается с помощью добавления свойста `overflow: hidden` для `body` тега (в случае IE - для `html` тега), при открытии popup'a. 

###Основные варианты закрытия popup'a:
- нажатие вне области popup'a
- нажатие кнопки ESC
- нажатие на специаную кнопку `close`, `закрыть`, `x` и т.д.

###Не вошедшие примеры:
 - использование Javascript'a для выравнивания popup'a по центру (Не разумное решение, т.к. придется прослушивать `resize`, и пересчитывать каждый раз местоположение для popup'a)
