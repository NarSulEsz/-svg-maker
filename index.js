const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function createShape(shapeType, color, attributes) {
  switch (shapeType.toLowerCase()) {
    case 'circle':
      return new Circle(color, attributes);
    case 'triangle':
      return new Triangle(color, attributes);
    case 'square':
      return new Square(color, attributes);
    default:
      return null;
  }
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'shape',
      message: 'Enter the shape for your logo (circle, triangle, or square):',
      choices: ['Circle', 'Triangle', 'Square'],//I inserted "choices" property but it doesn't work anyway
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color for the shape:',
    },
    {
      type: 'input',
      name: 'attributes',
      message: 'Enter the attributes for the shape (e.g., radius for a circle, side length for a square, coordinates for a triangle):',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => input.length <= 3 || 'Text must be 3 characters or less', 
  },
  {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for the text (keyword or hex):',
  },
    
  ])
  .then((answers) => {
    const shape = createShape(answers.shape, answers.color, answers.attributes);
    if (shape) {
      const svgShape = shape.render();
      fs.writeFile("shape.svg", `<svg width="200" height="200">${svgShape}</svg>`, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully created SVG file!");
        }
      });
      console.log(svgShape);
    } else {
      console.log('Invalid shape entered. Please enter circle, triangle, or square.');
    }
  })
  .catch((err) => console.log(err));