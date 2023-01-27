module.exports = function check(str, bracketsConfig) {
  let mask = str.split('');
  let length2 = Math.round(str.length / 2);

  if (str.length % 2 === 0) {
    for (let y = 0; y < length2; y++) {
      bracketsConfig.forEach(value => {
      for (let i = 0; i < mask.length;) {
        if ((mask[i] === value[0])&&(mask[i+1] === value[1])) {
          mask.splice(i, 2);
      i--;
    } else {
      i++;
    }
  }
  });
  }
    if (mask.length !== 0) {
      return false;
    } else {
      return true;
    }
  } else {
      return false;
  }
}
