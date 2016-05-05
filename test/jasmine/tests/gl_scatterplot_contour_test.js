'use strict';

var Plotly = require('@lib/index');

// contourgl is not part of the dist plotly.js bundle initially
Plotly.register(
    require('@lib/contourgl')
);

var withSetupTeardown = require('../assets/with_setup_teardown');

var plotData = {
    "data": [
        {
            "type": "contourgl",
            "z": [
                [
                    10,
                    10.625,
                    12.5,
                    15.625,
                    20
                ],
                [
                    5.625,
                    6.25,
                    8.125,
                    11.25,
                    15.625
                ],
                [
                    2.5,
                    3.125,
                    5,
                    8.125,
                    12.5
                ],
                [
                    0.625,
                    1.25,
                    3.125,
                    6.25,
                    10.625
                ],
                [
                    0,
                    0.625,
                    2.5,
                    5.625,
                    10
                ]
            ],
            "colorscale": "Jet",
            "contours": {
                "start": 2,
                "end": 10,
                "size": 1
            },
            "uid": "ad5624",
            "zmin": 0,
            "zmax": 20
        }
    ],
    "layout": {
        "xaxis": {
            "range": [
                0,
                4
            ],
            "autorange": true
        },
        "yaxis": {
            "range": [
                0,
                4
            ],
            "autorange": true
        },
        "height": 450,
        "width": 1000,
        "autosize": true
    }
};

function makePlot(gd, mock) {
    return Plotly.plot(gd, mock.data, mock.layout);
}

fdescribe('contourgl plots', function() {

    it('render without raising an error', function(done) {
        withSetupTeardown(done, function(gd) {
            return makePlot(gd, plotData)
                .then(function(gd) {
                    //debugger;
                })
        });
    });

});
