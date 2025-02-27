const { Circle, Triangle, Square } = require('./shapes');

describe('Shape', ()=>{
    describe('Circle', ()=>{        
        it('renders a circle', ()=>{
            const circle = new Circle('green', 80);

            expect(circle.render()).toBe('<circle cx="50" cy="50" r="80" fill="green" />');
        });
    });
    describe('Triangle', ()=>{        
        it('renders a triangle', ()=>{
            const triangle = new Triangle('green');

            expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
        });
    });
    describe('Square', ()=>{        
        it('renders a square', ()=>{
            const square = new Square(50,'green');

            expect(square.render()).toBe('<rect x="25" y="25" width="50" height="50" fill="green" />');
        });
    });

});