process.env.NODE_ENV = 'test';
const db = require('../../db/index');
const app=require('../../app');
const request = require('supertest')(app);

describe.only('POST /users/register',()=>{
    const _user = {
        "fullusername": "Ali HELALI",
        "email": "ali@gmail.com",
        "password": "toto",
        "phone": "+216 22 45 79 16"
    }

    beforeAll(async () => await db.connect());
    afterEach( async () => { await db.clearDatabase();});

    
    test.only('Ok POST /users ',async ()=>{
        //Arrange
        let response = await request.post('/users/register').send(_user);
        const body = response.body;
        //Expect or Assert
        expect(response.status).toEqual(200);
        expect(body.status).toEqual('success');
        expect(body.message).toEqual('user saved successfully');
    })
})