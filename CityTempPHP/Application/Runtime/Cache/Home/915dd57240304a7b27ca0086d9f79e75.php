<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width" />
<title>未来三天城市温度</title>
<link rel="stylesheet" href="/citytempphp/Public/bootstrap-3.3.5-dist/css/bootstrap.css" />
<style>
#china {
	height: 500px;
	padding: 10px;
	-webkit-tap-highlight-color: transparent;
	-webkit-user-select: none;
	cursor: default;
	background-color: rgba(0, 0, 0, 0);
}
</style>
</head>
<body>
	<div>
		<h1>城市未来三天气温</h1>

		<div class="container-fluid row">
			<div id="ChinaMap" class="col-md-4" style="height: 500px;"></div>
			<div id="ProvinceMap" class="col-md-4" style="height: 500px;"></div>
			<div id="CountyMap" class="col-md-4" style="height: 500px;"></div>
		</div>

		<div id="ECharts" style="position: relative; text-align: center;">
			<div id="line" style="position: absolute; height: 400px; width: 100%;"></div>
			<img id="loading" src='/citytempphp/Public/source/progressbar_long.gif' style='padding-top: 190px; display: none; width: 10%;' />
		</div>
	</div>
	<script type="text/javascript">
    var temp = new Array();
    var time = new Array();
    var cityName;
    console.log("/citytempphp/Public");
  </script>
	<script type="text/javascript" src="/citytempphp/Public/script/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="/citytempphp/Public/script/getData.js"></script>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.2"></script>
	<script type="text/javascript" src="/citytempphp/Public/echarts/echarts.js"></script>
	<script type="text/javascript" src="/citytempphp/Public/script/echartBarLine.js"></script>
	<script type="text/javascript" src="/citytempphp/Public/script/echartsChina.js"></script>
</body>
</html>