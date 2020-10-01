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
}