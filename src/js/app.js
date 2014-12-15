var AmpersandRestCollection = require('ampersand-rest-collection');

var f1Stat = AmpersandRestCollection.extend({
    url: 'http://ergast.com/api/f1/2014/driverStandings.json'
});

var driverStandings = new f1Stat();
driverStandings.fetch();

console.log(driverStandings);
