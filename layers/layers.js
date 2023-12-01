var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_slope_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "slope",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/slope_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13383212.569349, -996693.705450, 13419581.788687, -920405.777363]
                            })
                        });
var lyr_manggarai2_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "manggarai 2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/manggarai2_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13383212.569349, -996693.705450, 13419581.788687, -920405.777363]
                            })
                        });
var format_countur_3 = new ol.format.GeoJSON();
var features_countur_3 = format_countur_3.readFeatures(json_countur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_countur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_countur_3.addFeatures(features_countur_3);
var lyr_countur_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_countur_3, 
                style: style_countur_3,
                interactive: true,
    title: 'countur<br />\
    <img src="styles/legend/countur_3_0.png" /> 232<br />\
    <img src="styles/legend/countur_3_1.png" /> 464<br />\
    <img src="styles/legend/countur_3_2.png" /> 696<br />\
    <img src="styles/legend/countur_3_3.png" /> 928<br />\
    <img src="styles/legend/countur_3_4.png" /> 1160<br />\
    <img src="styles/legend/countur_3_5.png" /> 1392<br />\
    <img src="styles/legend/countur_3_6.png" /> 1624<br />\
    <img src="styles/legend/countur_3_7.png" /> 1856<br />\
    <img src="styles/legend/countur_3_8.png" /> 2088<br />\
    <img src="styles/legend/countur_3_9.png" /> 2320<br />\
    <img src="styles/legend/countur_3_10.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_slope_1.setVisible(true);lyr_manggarai2_2.setVisible(true);lyr_countur_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_slope_1,lyr_manggarai2_2,lyr_countur_3];
lyr_countur_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_countur_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_countur_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_countur_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});