var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var age = Number(process.argv[2]);

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var parrots = db.collection('parrots');
    
    parrots.find( { 
        age: { 
            $gt: age
        }
    }, {
        name: 1,
        age: 1,
        _id: 0
    } ).toArray(function(err, docs) {
        if (err) throw err;
        console.log(docs);
        db.close();
    });
})