'use strict'

/**用户登录**/
export const user_login = '/user/login'
export const user_logout = '/user/logout'
export const get_code = '/outerapi/get_captcha'
export const pre_code = '/captcha/'
export const upload_img = '/upload/img'

/**视频直播**/
export const get_message = '/outerapi/get_chat_list' //末尾写\/后写数字不写默认20   返回的数据中的gid代表等级 等级决定头像
export const get_redis = '/chat/get_msg_data' //轮训接口
export const send_message = '/chat/send_msg'  //用户发送接口

export const get_more_stock_chu_sh = '/outerapi/get_more_stock_chu_sh'
export const get_more_stock_jing_sh = '/outerapi/get_more_stock_chu_sh'

