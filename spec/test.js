define([
    'dojo/dom-construct',
    'esri/map',
    'esri-utils/imageServiceUtils'
  ], function(
    domConstruct,
    Map,
    imageServiceUtils
  ) {

 describe('map tests', function() {
    var map;
    var frag;

    // create the map
    beforeEach(function() {
      frag = document.createDocumentFragment();
      var div = domConstruct.create('div', {style: 'width:300px;height:200px'});
      domConstruct.place(div, frag);
      map = new Map(div, {
        basemap: "dark-gray-vector",
        center: [-85.050200, 33.125524],
        zoom: 6
  
      });
      console.log('created map');
    });

    // destroy the map
    afterEach(function() {
      map.destroy();
      map = null;
      frag = null;
    });
});
    });