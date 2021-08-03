'use strict';

class visualizar {

    verAdapter(req, res) {
        res.render('index', {
            title: 'Adapter',
            fragmentos: "patrones/Adapter"

        });

    }
    verBridge(req, res) {
        res.render('index', {
            title: 'Bridge',
            fragmentos: "patrones/Bridge"

        });

    }
    verFlyweight(req, res) {
        res.render('index', {
            title: 'Flyweight',
            fragmentos: "patrones/Flyweight"

        });

    }
}
module.exports = visualizar;
