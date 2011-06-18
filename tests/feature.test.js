var mapnik = require('mapnik');
var assert = require('assert');
var fs = require('fs');
var path = require('path');

exports['test features'] = function() {
    var options = {
        type: 'shape',
        file: './examples/data/world_merc.shp'
    };

    var ds = new mapnik.Datasource(options);
    // get one feature
    var featureset = ds.featureset();
    var feature = featureset.next();
    assert.deepEqual(feature.attributes(), {
        AREA: 44,
        FIPS: 'AC',
        ISO2: 'AG',
        ISO3: 'ATG',
        LAT: 17.078,
        LON: -61.783,
        NAME: 'Antigua and Barbuda',
        POP2005: 83039,
        REGION: 19,
        SUBREGION: 29,
        UN: 28,
    });

    // loop over all of them to ensure the proper feature count
    var count = 1;
    while (feature = featureset.next()) {
        count++;
    }
    assert.equal(count, 245);
};
