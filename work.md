1. 直播聊天拉取数据接口和轮训接口 --- CHECK




1. 聊天防止XXS

1. 地区上海是1，深圳我这边是写的2拿的数据
2. 研究素材目前只有上海的数据
3. 策略素材目前只有上海的数据
4. 体验素材的股票周报和股票年报目前只有上海的数据
5. 客服服务 持仓分析,服务视频数据接口报错
    ```
    A Database Error Occurred
    Error Number: 1054
    
    Unknown column 'qishu' in 'order clause'
    
    select * from zhibo_kefusucai where tag = 1 and region = 1 order by qishu desc limit 0,12
    
    Filename: controllers/Outerapi.php
    
    Line Number: 953
    ```