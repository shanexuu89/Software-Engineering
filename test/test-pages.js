const chai = require('chai');
const chaiHttp = require('chai-http');
//const server = require('/');
const should = chai.should();

chai.use(chaiHttp);


describe('Routing functinons', function() {


    it('testing mainpage', (done) => {
        chai.request('/')
            .get('/index')
            .end((err, res) => {
                res.should.have.status(200);
                //should.exist(res.body);
//res.body.should.be.a('array');
                done();
             });
    }); 

    it('testing a non existing page', (done) => {
        chai.request('/')
            .get('/admin')
            .end((err, res) => {
                res.should.have.status(404);
                done();
             });
    }); 
  
});

describe('Contents', function() {


    it('testing mainpage content', (done) => {
        chai.request('/')
            .get('/index')
            .end((err, res) => {
                should.exist(res.body);
                res.body.should.eql({});
                done();
             });
    }); 
});