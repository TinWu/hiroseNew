var map;

function init() {

    var mapOptions = {
        // 地圖放大比例-數字愈大愈詳細
        zoom: 15,
        // 不要卷軸功能
        scrollwheel: false,
        // 地圖中心的緯、經度，必設
        center: new google.maps.LatLng(24.900809, 121.197000),
        // 顏色樣式
        styles: [{"featureType":"landscape","stylers":[{"hue":"#FFA800"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#53FF00"},{"saturation":-73},{"lightness":40},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FBFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#00FFFD"},{"saturation":0},{"lightness":30},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00BFFF"},{"saturation":6},{"lightness":8},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#679714"},{"saturation":33.4},{"lightness":-25.4},{"gamma":1}]}]
    };

    // html tag
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(24.900809, 121.204542),
        map: map,
        title: 'HIROSE 宏瀨科技'
    });

}

// 當網站loading完成後再建立此地圖
google.maps.event.addDomListener(window, 'load', init);