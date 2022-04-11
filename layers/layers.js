var wms_layers = [];


        var lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0 = new ol.layer.Tile({
            'title': 'Cambodia, Laos, Thailand, Vietnam, Malaysia, Myanmar bilingual',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.osm-tools.org">© osm-tools.org & OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://d.tile.osm-tools.org/osm/{z}/{x}/{y}.png'
            })
        });
var lyr_savi1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "savi (1)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/savi1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11618700.000000, 1598248.195636, 11759460.000000, 1816104.519041]
                            })
                        });

lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0.setVisible(true);lyr_savi1_1.setVisible(true);
var layersList = [lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0,lyr_savi1_1];
