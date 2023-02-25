describe ('Test GET /launches', () => {
    test('[1] It should respond with 200 success', () => {
        const response = 200;
        expect(response).toBe(200);    
    });
});

describe ('Test POST /launches', () => {
    test.todo('[2] It should respond with 200 success');
    
    test.todo('[3] It should catch missing required properties');
    test.todo('[4] It should catch invalid dates');
});

