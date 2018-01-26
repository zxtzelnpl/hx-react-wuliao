'use strict'

/**用户登录**/
export const user_login = '/user/login'
export const user_logout = '/user/logout'
export const get_code = '/outerapi/get_captcha'
export const pre_code = '/captcha/'
export const upload_img = '/upload/img'

/**视频直播-聊天**/
export const get_message = '/outerapi/get_chat_list'  //末尾写\/后写数字不写默认20   返回的数据中的gid代表等级 等级决定头像
export const get_redis = '/chat/get_msg_data'  //轮训接口
export const send_message = '/chat/send_msg'  //用户发送接口
/**视频直播-banner**/
export const video_banners = '/outerapi/get_banner_list'  //视屏直播底部banners

/**研究素材**/
export const api_research_period = '/outerapi/get_yjsc_qishu'  //期数接口
export const api_research = '/outerapi/get_yjsc'  //研究素材接口

/**策略素材**/
export const api_strategy = '/outerapi/get_clsc'
export const api_strategy_count = '/outerapi/get_clsc_count'

/**营销素材**/
export const api_marketing = ''
export const api_marketing_couunt = '/outerapi/get_yxsc_count'

/**体验素材**/
export const api_experience = '/outerapi/get_tysc'
export const api_experience_count = '/outerapi/get_tysc_count'

/**客服素材**/
export const api_customer_service = '/outerapi/get_kfsc'
export const api_customer_service_count = '/outerapi/get_kfsc_count'

/**回播**/
export const play_back='/outerapi/get_huibo'
export const play_back_count='/outerapi/get_huibo_count'