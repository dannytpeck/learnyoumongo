var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var doc = {
    firstName: process.argv[2],
    lastName: process.argv[3]
};

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('docs');
    collection.insert(doc, function(err, data) {
        if (err) throw err;
        console.log(JSON.stringify(doc));
        db.close();
    });
});