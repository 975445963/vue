/**
 * 卡号隐藏中间8位
 * @param {string} val 银行卡号
 * @returns {string} 格式化后的卡号
 */
export default val => {
  if (val) {
    if (val.length < 8) {
      return val
    }

    return String(val).replace(
      /^(\S{4})\S*(\S{4})$/,
      `$1${'*'.repeat(val.length - 8)}$2`
    )
  }

  return ''
}
