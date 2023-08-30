const validateType = {
  'phone': /^1[3|4|5|6|7|8][0-9]{9}$/,
  'tel': /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,
  'card': /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  'email': /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  'url': /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
  'ip': /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/, 
}


/**
 * @phone 效验手机号
 * @tel 效验电话号码
 * @phoneOrTel 效验手机号或者电话号码
 * @card 效验身份证号
 * @email 效验邮箱
 * @url 效验url是否合法
 * @ip 效验ip是否合法
*/
export type IsValidateType = 'phone' | 'tel' | 'phoneOrTel' | 'card' | 'email' | 'url' | 'ip';

export const isValidate = (type: IsValidateType, value: string | number) => {
  const val = value.toString();
  if (type === 'phoneOrTel') {
    return validateType['phone'].test(val) || validateType['tel'].test(val);
  }
  return validateType[type].test(val);
}