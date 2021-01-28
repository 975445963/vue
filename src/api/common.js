import request from './http.js'
/**
 * 获取当前用户信息
 * */
export function getUserInfo() {
  return request({
    method: 'get',
    url: '/user-service/api/user/info'
  })
}
/**
 * 获取协议
 * */
export function getApplyAgreement(contractCode) {
  return request({
    method: 'get',
    url:
      '/loan-service/contract/preview?contractCode=' + contractCode + '&bizId'
  })
}
export function uploadImgBase64(imgbase64) {
  return request({
    url: '/pub-service/api/file/uploadBase64',
    method: 'post',
    header: {
      'Biz-Type': 'UPLOAD',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      base64Content: imgbase64,
      filename: 'simple.jpeg'
    }
  })
}
export function idCardOcrFront(imgPath) {
  return request({
    method: 'get',
    url: '/user-service/api/ocr/idcard/front',
    params: {
      path: imgPath,
      isNeedRecognizeAll: 1
    }
  })
}

export function idCardOcrBack(imgPath) {
  return request({
    method: 'get',
    url: '/user-service/api/ocr/idcard/back',
    params: {
      path: imgPath,
      isNeedRecognizeAll: 1
    }
  })
}
export function getBankcardBin(bankcardNo) {
  return request({
    method: 'get',
    url: '/user-service/api/bankcard/card-bin',
    params: {
      bankcardNo: bankcardNo
    }
  })
}
export function getBankcardBinNew(bankcardNo, orgCode) {
  return request({
    method: 'get',
    url: '/cashier-service/api/bankcard/binding/check',
    params: {
      bankcardNo: bankcardNo,
      orgCode: orgCode,
      isQcy: true
    }
  })
}
/**
 * 绑定银行卡列表
 * */
export function bindBankcard(data) {
  return request({
    method: 'get',
    url: '/user-service/api/bankcard',
    params: data
  })
}
export function verifyCode(mobileNo) {
  return request({
    method: 'get',
    url: '/user-service/api/bankcard/verify-code?',
    params: {
      mobile: mobileNo
    }
  })
}
export function getDictOfDictType(type) {
  return request({
    method: 'get',
    url: '/pub-service/dictionaries/' + type
  })
}
export function getArea(parentId) {
  return request({
    method: 'post',
    url: '/pub-service/areacode/list',
    data: { parent: parentId }
  })
    .then(data => {
      console.log(data)
      return [
        {
          options: data
            .filter(m => !m.disabled)
            .map(n => {
              return {
                text: n.name,
                value: n.id
              }
            })
        }
      ]
    })
    .catch(err => {
      console.log(err)
    })
}
