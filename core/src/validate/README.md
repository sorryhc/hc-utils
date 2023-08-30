## 正则效验

```jsx
isValidate(type: IsValidateType, value: string | number);
```

### isValidate

```js
// 判断是否是手机号
const isvalidate = isValidate('phone', '18888888888');

// 判断是否是电话号码
const isvalidate = isValidate('tel', '58888888');

// 效验手机号或者电话号码
const isvalidate = isValidate('phoneOrTel', '18888888888');
```


### props IsValidateType

```js
/**
 * @phone 效验手机号
 * @tel 效验电话号码
 * @phoneOrTel 效验手机号或者电话号码
 * @card 效验身份证号
 * @email 效验邮箱
 * @url 效验url是否合法
 * @ip 效验ip是否合法
*/
export type IsValidateType = 'phone' | 'tel' ｜ 'phoneOrTel' | 'card' | 'email' | 'url' | 'ip';
```