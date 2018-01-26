#### 拉取聊天记录接口：



#### 聊天信息轮询接口：
http://pxzbs.jyzqsz.com/chat/get_msg_data?score=100000000000000 
score参数是取microtime(true)的前14位  若没数据则返回 nochat  否则返回类似array(2)的数据
```
{ ["{"rid":"040","ip":"101.229.250.32","gid":1,"time":"2018-01-25 11:04:16","content":"111","name":"\u7559\u5b66\u751fOr0X3e","passerid":"17"}"]=> string(14) "15168494564044" ["{"rid":"040","ip":"101.229.250.32","gid":1,"time":"2018-01-25 11:04:16","content":"123","name":"\u7559\u5b66\u751fOr0X3e","passerid":"17"}"]=> string(14) "15168494569638" }
```

聊天发送接口：http://pxzbs.jyzqsz.com/chat/send_msg?name=test&gid=1&content=12345  用post方法

底部banner图片接口：http://pxzbs.jyzqsz.com/outerapi/get_banner_list

客户上传图片接口：http://pxzbs.jyzqsz.com/upload/img  方法post  

http://pxzbs.jyzqsz.com/outerapi/get_chat_list/303609/303613 取id从303609到303613的聊天记录


# 研究素材
1. 初选股票池数据接口
2. 精选股票池数据接口

http://pxzbs.jyzqsz.com/outerapi/get_yjsc_qishu/1/0 获取所有地区值为1（上海） tag值为0（初选）的期数
http://pxzbs.jyzqsz.com/outerapi/get_yjsc/1/60/1 第一个1代表地区（上海） 60代表期数 第二个1代表精选/初选（1是精选0是初选）

# 策略素材
1. 股票早评数据接口*
http://pxzbs.jyzqsz.com/outerapi/get_clsc/1/1/0/20 第一个1代表上海地区 第二个1代表股票早评 0和20分别代表start和limit 默认分别喂0和10
2. 盘中解读数据接口*
http://pxzbs.jyzqsz.com/outerapi/get_clsc/1/2 
3. 股票收评数据接口*
http://pxzbs.jyzqsz.com/outerapi/get_clsc/1/3

# 营销素材
1. 案例回顾数据接口*
2. 推广物料数据接口*
3. 视频节目数据接口*


# 体验素材
1. 股票周报数据接口*
http://pxzbs.jyzqsz.com/outerapi/get_tysc/1/1/0/20
2. 股票年报数据接口*
http://pxzbs.jyzqsz.com/outerapi/get_tysc/1/2/0/20
3. 媒体视频数据接口*
http://pxzbs.jyzqsz.com/outerapi/get_tysc/1/3/0/20


# 客服素材
1. 持仓分析数据接口*
http://pxzbs.jyzqsz.com/outerapi/get_kfsc/1/1/0/20
2. 服务视频数据接口*
http://pxzbs.jyzqsz.com/outerapi/get_kfsc/1/2/0/20


# 回播
1. 视频回播数据接口*
http://pxzbs.jyzqsz.com/outerapi/get_huibo/1/0/20