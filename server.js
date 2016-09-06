var express = require('express');
var app = express();
var lp = process.env.PORT || 8080;
app.get('/', function (req, res) {
    res.send('<h1>QRFDEV Timestamp Microservice</h1>');
});

app.get('/:date', function (req, res) {
    var date;
    var retobj;
    var monthNames = [ "January", "February", "March","April", "May", "June", "July"
                        ,"August", "September", "October","November", "December"
    ];
    console.log(req.params.date);
    try{
        if(/[^\d]/.test(req.params.date)) date = new Date(req.params.date);
        else date = new Date(parseInt(req.params.date)*1000);
        console.log(date);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        console.log(monthNames[monthIndex], day, year);
        retobj = {
            "unix":date.getTime()/1000
            ,"natural":monthNames[monthIndex]+' '+day+', '+year
        };
    }catch(err){
        console.log(err);
        retobj = {
            "unix": null
            ,"natural":null
        };
    }
    console.log(retobj);
    res.json(retobj);
});

app.listen(lp, function () {
    console.log('Example app listening on port '+lp+'!');
});