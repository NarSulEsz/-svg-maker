//This is code from my shapes.test.js file. How to improve it further?

const { Circle, Triangle, Square } = require('./shapes');

describe('Shape', ()=>{
    describe('Circle', ()=>{        
        it('renders a circle', ()=>{
            const circle = new Circle('green');

            expect(circle.render()).toBe('<circle cx="50" cy="50" r="80" fill="green" />');
        });
    });
});