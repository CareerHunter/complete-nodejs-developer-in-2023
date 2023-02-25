# 135. Testing API Endpoints With Supertest: Error Cases

https://github.com/odziem/nasa-project

-   `server/src/routes/launches/launches.test.js`

```
const request = require('supertest');
const app = require('../../app')

describe ('Test GET /launches', () => {
    test('[1] It should respond with 200 success', async () => {
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    });
});

describe ('Test POST /launches', () => {
    const completeLaunchData = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler 186 f',
        launchDate: 'January 4, 2028',
    };

    const launchDataWithoutDate = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler 186 f',  
    };

    const launchDateWithInvalidDate = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler 186 f',
        launchDate: 'zoot',
    }

    test('[2] It should respond with 201 created', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201);

        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);

        expect(response.body).toMatchObject (launchDataWithoutDate);
    });
    
    test('[3] It should catch missing required properties', async () => {
        const response = await request(app)
            .post('/launches')
            .send(launchDataWithoutDate)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            error: 'Missing required launch property',
        })
    });

    test('[4] It should catch invalid dates', async () => {
        const response = await request(app)
            .post('/launches')
            .send(launchDateWithInvalidDate)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            error: 'Invalid launch date',
        })
    });
});


```

<details>
  <summary> Testing APIs - result capture </summary>

- run test `npm test-watch`  

<p align="center" >
    <img src="../imags/135_Testing-API-Endpoints-With-Supertest_Error-Cases.png" width="90%" > 
</p> 

</details>

<details>
  <summary> Section 10: Testing APIs </summary>

  - [Codebase: testing-apis](../src/10_testing-apis/)

</details>

---

[Previous](./134) | [Next]()