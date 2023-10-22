import request from '../utils/http'

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const getUserById = (data) => {
  return request({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

export const getAllUser = () => {
  return request(
   { method: 'GET',
    url: '/selectAll',
	data:{}}
  )
}

