<?php
return array(
  /* 路由  */
  'URL_MODEL'             => 0,       // URL访问模式,可选参数0、1、2、3,代表以下四种模式：
    // 0 (普通模式); 1 (PATHINFO 模式); 2 (REWRITE  模式); 3 (兼容模式)  默认为PATHINFO 模式
  /* 默认设定 */
  'DEFAULT_CONTROLLER'    =>  'CityTemp',
  'DEFAULT_ACTION'        =>  'cityTempAction', // 默认操作名称
  'TMPL_TEMPLATE_SUFFIX'  =>  '.php',
  'URL_HTML_SUFFIX'       =>  '', //限制伪静态的后缀
  
  /* 数据库设置 */
  'DB_TYPE'               =>  'mysql',     // 数据库类型
  'DB_HOST'               =>  '172.16.220.113', // 服务器地址
  'DB_NAME'               =>  'citytemperature_db',          // 数据库名
  'DB_USER'               =>  'quelj',      // 用户名
  'DB_PWD'                =>  'qlj19890625',          // 密码
  'DB_PORT'               =>  '3306',        // 端口
  'DB_CHARSET'            =>  'utf8',      // 数据库编码默认采用utf8
);