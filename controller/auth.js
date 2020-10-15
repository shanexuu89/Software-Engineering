var mysql = require ("mysql");
const bcrypt = require('bcryptjs');
var db = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bc04aa6c090060',
    password: '2097f7d0',
    database: 'heroku_563076973ffff09'
    });
var moment = require('moment');
let pool = mysql.createPool(db);
    pool.on('connection', function (_conn) {
        if (_conn) {
            logger.info('Connected the database via threadId %d!!', _conn.threadId);
            _conn.query('SET SESSION auto_increment_increment=1');
        }
 });

exports.login = async (rew, res) => {
   try {
       const { email, password} = req.body;


   } catch (error){
       console.log(error);
   }
};
exports.signup = (req,res) => {
    console.log(req.body);
    const { username, fullname, email, password, affiliation, age, gender } = req.body;
    /*
    db.query('SELECT username FROM user WHERE username = ?', [username], (error, results) => {
        if(error){
            console.log(error);
        }
        if( result.length > 0){
            return res.render('signup', {
                message: 'That username is already in use'
            });
        }
     
    });
    */ 
   
    db.query('INSERT INTO user SET ?', {username: username, fullname: fullname, email: email, password: password, affiliation: affiliation, age: age, gender: gender});
    res.send ("Form submitted");
};
exports.submit = (req,res) => {
    console.log(req.body);
    const { author, title, journal, volume, number, pages, year, month, rating, submitter, status } = req.body;

    db.query('INSERT INTO article SET ?', {author: author, title: title, journal: journal, volume: volume, number: number, pages: pages, year: year, month: month, rating: rating, submitter: submitter, status: status});
    res.send ("Form submitted");
};

exports.index = (req,res) => {
    console.log(req.body);
    const { title, datestart, dateend} = req.body;
    var sdate = new Date(datestart);
    var edate = new Date(dateend);

    var syear = moment(sdate).format('YYYY');
    var eyear = moment(edate).format('YYYY');
    
    db.query(`select * from article where author like '%` +title + `%' or  title like '%` + title + `%' or journal like '%` + title + `%' AND year BETWEEN ? AND ?`,[syear, eyear], (error, result, field) => {
        if(error){
            console.log(error);
            return;
        }
    
      var table =''; //to store html table
      
      //create html table with data from res.
      for(var i=0; i<result.length; i++){
        table +='<tr><td>'+ result[i].author +'</td><td>'+ result[i].title +'</td><td>'+ result[i].journal +'</td><td>'+ result[i].volume +'</td><td>'+ result[i].number +'</td><td>'+ result[i].pages +'</td><td>'+ result[i].year +'</td><td>'+ result[i].month +'</td><td>'+ result[i].ratting +'</td><td>'+ result[i].submitter + '</td><td>'+ result[i].status + '</td></tr>';
      }
      table ='<table border="1"><tr><th>Author</th><th>Title</th><th>Journal</th><th>Volume</th><th>Number</th><th>Pages</th><th>Year</th><th>Month</th><th>Ratting</th><th>Submitter</th><th>Status</th></tr>'+ table +'</table>';
      res.send("<h1 style='text-align:left; font-family: Copperplate; color:green;font-size: 20pt;'>SEER</h1>"+table);
    });
    
};