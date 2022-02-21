process.env.NODE_ENV = 'test';
const ObjectId = require('mongoose').Types.ObjectId;
const db = require('../../db/index');
const UserModel = require('../../db/models/user.schema');
const UserService = require('../../services/user.service')(UserModel);


describe('userService Test Suit',  () => {
    beforeAll(async () => await db.connect());
    afterEach( async () => { await db.clearDatabase();});
    //afterAll( async () => {await db.close();});

    it('Ok it register a new user', async done => {
        // Arrange
        let _user = {
            "fullusername": "Issam JOOMAA",
            "email": "issam@gmail.com",
            "password": "toto",
            "phone": "+216 22 45 79 16"
        };

        // Act
        let result = await UserService.register(_user);

        // Assert
        expect(result.status).toEqual('success');
        expect(result.message).toEqual('user saved successfully :)');
        done();
    });

    it('Should fail if we pass empty object to register', async done => {

        // Act
        let result = await UserService.register({});

        // Assert
        expect(result.status).toEqual('fail');
        expect(result.message).toEqual('Fail');
        done();
    });

    it('Should fail if we call register without argument', async done => {

        // Act
        let result = await UserService.register({});

        // Assert
        expect(result.status).toEqual('fail');
        expect(result.message).toEqual('Fail');
        done();
    });
});