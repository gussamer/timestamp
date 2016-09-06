var express = require('express');
var app = express();
var lp = process.env.PORT || 8080;
app.get('/', function (req, res) {
    res.send('<h1>QRFDEV Timestamp Microservice</h1>');
});

app.get(/\/(.*)/, function (req, res) {
    var date;
    var retobj = {};
    var monthNames = [ "January", "February", "March","April", "May", "June", "July"
                        ,"August", "September", "October","November", "December"
    ];
    try{
        console.log(req.params);
        date = Date.parse('2016 10 31');
        retobj.unix = date.getTime();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        console.log(monthNames[monthIndex], day, year);
        retobj.natural = monthNames[monthIndex]+' '+day+', '+year;
    }catch(err){
        
    }
    res.send(JSON.stringify(retobj));
});

app.listen(lp, function () {
    console.log('Example app listening on port '+lp+'!');
});