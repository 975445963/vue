export function isEmpty(params) {
  console.log(params)
  const flag = true
  for (var key in params) {
    if (params[key] !== '0' && !params[key]) {
      return false // 终止程序
    }
  }
  return flag
}
export function isEmptyNew(params, rule) {
  var data = {
    status: true
  }
  for (const key in rule) {
    if (!params[key] || key === '0') {
      data.status = false
      data.msg = rule[key].msg
      break
    }
  }
  return data
}
export function dataFormat(timestamp) {
  if (!timestamp) {
    return ''
  }
  const date = new Date(timestamp)
  const Y = date.getFullYear() + '-'
  const M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

  const dateString = Y + M + D
  console.log('dateString', dateString) // > dateString 2020-01-10 18:52
  return dateString
}
export function strDateTime(str) {
  const arr = str.split('-')
  if (arr.length === 3) {
    if (arr[0].length === 4) {
      if (arr[1].length === 2) {
        if (arr[2].length === 2) {
          return true
        }
      }
    }
  }
  return false
}
export function checkPhone(phone) {
  if (
    !/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(
      phone
    )
  ) {
    return false
  } else {
    return true
  }
}
export function checkStore(bizLicence) {
  if (
    !/(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/.test(
      bizLicence
    )
  ) {
    return false
  } else {
    return true
  }
}
export function reasonFormat(reason) {
  if (!reason) {
    return false
  }
  const reasonList = reason.split('|')

  const list = []
  console.log(reasonList)
  for (let i = 0; i < reasonList.length; i++) {
    const info = reasonList[i].split(';')
    console.log(info)
    if (info[0]) {
      const data = {}
      data.title = info[0]
      data.value = info[1]
      list.push(data)
    }
  }
  console.log(list)
  return list
}

