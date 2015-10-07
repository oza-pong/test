var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('http://oza-pong.github.io/test/cesium-starter-app-master/Source/doc.kml'));
