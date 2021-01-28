/**
 * 金额格式化
 * @param {number} val 原始金额
 * @param {number} fixed 要保留的小数点位数
 * @return {number} 格式化后的金额
 */
export default (val, fixed) => {
  if (val) {
    if (fixed) {
      return Number(val)
        .toFixed(fixed)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    } else {
      return String(val).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    }
  }

  return 0
}
