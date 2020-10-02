var mysql = require ("mysql");
const bcrypt = require('bcryptjs');
var db = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bc04aa6c090060',
    password: '2097f7d0',
    database: 'heroku_563076973ffff09'
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
    const { title } = req.body;
    db.query(`select * from article where author like '%` +title + `%' or  title like '%` + title + `%' or journal like '%` + title + `%'`, (error, result, field) => {
        if(error){
            console.log(error);
        }
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            res.send("Author: "+row.author + "<br>Title: " + row.title + "<br>Journal: "+ row.journal+"<br>Volume: "+ row.volume+"<br>Number: "+ row.number+"<br>Pages: "+ row.pages+"<br>Year: "+ row.year+"<br>Month: "+ row.month+"<br>Ratting: "+ row.ratting+"<br>Submitter: "+ row.submitter + "<br>Status: "+ row.status);
           
            
        });
    });

};