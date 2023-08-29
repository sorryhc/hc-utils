const validateType = {
  'phone': /^1[3|4|5|6|7|8][0-9]{9}$/,
  'tel': /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,
  'card': /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  'email': /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  'URL': /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
  'IP': /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/, 
}

/**
 * 判断是否是手机号
 * @val
*/
export const isPhone = (val: string | number) => {
  return validateType['phone'].test(val.toString());
}

/**
 * 判断是否是电话号码
 * @val
*/
export const isTel = (val: string | number) => {
  return validateType['tel'].test(val.toString());
}

/**
 * 判断是否是手机号或者电话号码
 * @val
*/
export const isPhoneOrTel = (val: string | number) => {
  const str = val.toString();
  return isPhone(str) || isTel(str);
}