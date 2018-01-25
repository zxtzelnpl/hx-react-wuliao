<!DOCTYPE html>
<html lang="en" xmlns:gs="http://www.gensee.com/ec">
<head>
    <meta charset="UTF-8">
    <title>君银投顾物料平台</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <meta name="renderer" content="webkit">
    <meta name="force-rendering" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <script>
      function compatibility (fun) {
        var str = navigator.userAgent
            , reg = {
          edge: /Edge\/([0-9.]*)/gi,
          firefox: /Firefox\/([0-9.]*)/gi,
          safari: /Safari\/([0-9.]*)/gi,
          version: /Version\/([0-9.]*)/gi,
          chrome: /Chrome\/([0-9.]*)/gi
        }
            , result = {}
            , num;
        result.edge = reg.edge.exec(str);
        if (result.edge) {  //Edge 所有的版本
          return true
        }
        result.firefox = reg.firefox.exec(str);
        if (result.firefox) {
          num = parseInt(result.firefox[1].split('.')[0]);
          if (num >= 57) {  //FireFox 大于57的版本
            return true
          }
        }

        result.safari = reg.safari.exec(str);
        result.version = reg.version.exec(str);
        if (result.safari && result.version) {  //Safari 大于7的版本
          num = parseInt(result.version[1].split('.')[0]);
          if (num >= 7) {
            return true
          }

        }

        result.chrome = reg.chrome.exec(str);
        if (result.chrome) {  //Chrome 大于49的版本
          num = parseInt(result.chrome[1].split('.')[0]);
          if (num >= 49) {
            return true
          }
        }

        console.warn('不兼容');
        fun()
      }
      compatibility(function(){alert('浏览器版本过低')})
    </script>
    <script type="text/javascript" src="http://static.gensee.com/webcast/static/sdk/js/gssdk.js"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>