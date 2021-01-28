import dayjs from 'dayjs'

/**
 * 日期格式化
 * @param {string} val 原始日期
 * @param {string} fmt 日期格式
 * @returns {string} 格式化后的日期
 */
export default (val, fmt) => {
  if (val) {
    return dayjs(val).format(fmt)
  }

  return '-'
}
