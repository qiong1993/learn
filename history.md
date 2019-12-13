HTML (HyperText Markup Language)
CGI (Common Gateway Interface)
ASP、JSP和PHP (微软、SUN和开源社区)
1995年年底，JavaScript被引入到浏览器
第一阶段，直接用JavaScript操作DOM节点，使用浏览器提供的原生API：
var dom = document.getElementById('name');
dom.innerHTML = 'Homer';
dom.style.color = 'red';
第二阶段，由于原生API不好用，还要考虑浏览器兼容性，jQuery横空出世，以简洁的API迅速俘获了前端开发者的芳心：
$('#name').text('Homer').css('color', 'red');
第三阶段，MVC模式，需要服务器端配合，JavaScript可以在前端修改服务器渲染后的数据。

MVVM最早由微软提出来
把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离。
把Model和View关联起来的就是ViewModel。ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model。