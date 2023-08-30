# url

操作url相关方法

### getUrlParam

获取url上指定key对应的参数

```js
const name = getUrlParam('name');
```

### getUrlAllParams

获取全部url参数, 并转换成json对象

```js
const parmas = getUrlAllParams('https://www.baidu.com?a=1&b=2'); // { a: 1, b: 2 }
```