export function toUpperCase(str) {
  if (typeof str !== 'string') {
    return '';
  }

  let newStr = '';
  str.split('').forEach(ch => {
    if (ch >= 'A' && ch <= 'Z') {
      newStr += String.fromCharCode(ch.charCodeAt(0) + 32);
    } else {
      newStr += ch;
    }
  });

  return newStr;
}
