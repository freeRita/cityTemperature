//$(document).ready(function (e) { alert('This is a test!'); });
$(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showCity);
  }
  else {
    console.log("该浏览器不支持获取地理位置。");
    cityName = "北京";
    //$("#city").append('<option value="' + cityName + '" selected>' + cityName + '</option>');
    showChina(cityName);
    //getCitySelect();
    sendAndGet(cityName);
  }
});

function showCity(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(lon, lat);
  var gc = new BMap.Geocoder();
  gc.getLocation(point, function (rs) {
    var addComp = rs.addressComponents;
    //console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
    cityName = addComp.province;
    cityName = cityName.substring(0, 2);
    //$("#city").append('<option value="' + cityName + '" selected>' + cityName + '</option>');
    showChina(cityName);
    //getCitySelect();
    sendAndGet(cityName);
  });
}

function sendAndGet(cityName)
{
  $.ajax(
  {
    type: "GET",
    url: '/CityTemp/cityTemp?CityName=' + cityName,
    data: 'json',
    content: "application/json",
    cache: false,
    success: function (result) {
      if (isNaN(result))
      {
        $.each(result, function (index, value) {
          temp[index] = value.Temperature;
          time[index] = value.Time;
        });
      }
      else
      {
        temp = [];
        time = [];
      }
      $("#loading").hide();
      showEChart(cityName);
    },
    error: function (xhr) {
      alert(xhr.responseText);
      console.log(xhr.responseText);
    },
    beforeSend: function () {
      $("#loading").show();
    }
  });
}

//function getCitySelect() {
//  $.ajax(
//  {
//    type: "GET",
//    url: '/CityTemp/cityAndStation?CityName=' + cityName,
//    data: 'json',
//    content: "application/json",
//    cache: false,
//    success: function (result) {
//      $.each(result, function (index, value) {
//        var city = value.City;
//        $("#city").append('<option value="' + city + '" >' + city + '</option>');
//      });
//    },
//    error: function (xhr) {
//      alert(xhr.responseText);
//      console.log(xhr.responseText);
//    },
//  });
//}