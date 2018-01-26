#### 拉取聊天记录接口：



#### 聊天信息轮询接口：
http://pxzbs.jyzqsz.com/chat/get_msg_data?score=100000000000000 
score参数是取microtime(true)的前14位  若没数据则返回 nochat  否则返回类似array(2)的数据
```
{ ["{"rid":"040","ip":"101.229.250.32","gid":1,"time":"2018-01-25 11:04:16","content":"111","name":"\u7559\u5b66\u751fOr0X3e","passerid":"17"}"]=> string(14) "15168494564044" ["{"rid":"040","ip":"101.229.250.32","gid":1,"time":"2018-01-25 11:04:16","content":"123","name":"\u7559\u5b66\u751fOr0X3e","passerid":"17"}"]=> string(14) "15168494569638" }
```


#### 研究素材接口：
http://pxzbs.jyzqsz.com/outerapi/get_yjsc/1/60/1  
第一个1代表地区 60代表期数 第二个1代表精选/初选（1是精选0是初选）