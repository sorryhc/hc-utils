/**
 * 获取url上指定key对应的参数
 * @name url key
*/
export const getUrlParam = (key: string): string | null => {
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return r[2]; return null;
}

/**
 * 获取全部url参数, 并转换成json对象
 * @uri url
*/
export const getUrlAllParams = (uri?: string) => {
  const url = uri ? uri : window.location.href;
  const _pa = url.substring(url.indexOf('?') + 1),
    _arrS = _pa.split('&'),
    _rs = {};
  for (let i = 0, _len = _arrS.length; i < _len; i++) {
    const pos = _arrS[i].indexOf('=');
    if (pos == -1) {
      continue;
    }
    const name = _arrS[i].substring(0, pos);
    const value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
    _rs[name] = value;
  }
  return _rs;
}