//Here is template for prompts to ask user about his preferenses

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'shape',
      message: 'Enter the shape you want to create (circle, rectangle, or line):',
    },
    {
      type: 'input',
      name: 'attributes',
      message: 'Enter the attributes for the shape (e.g., radius for a circle, width and height for a rectangle, coordinates for a line):',
    },
  ])
  .then((answers) => {
    let svgShape = '';

    switch (answers.shape.toLowerCase()) {
      case 'circle':
        svgShape = `<svg width="100" height="100"><circle cx="50" cy="50" r="${answers.attributes}" fill="red" /></svg>`;
        break;
      case 'rectangle':
        const [width, height] = answers.attributes.split(',');
        svgShape = `<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" fill="blue" /></svg>`;
        break;
      case 'line':
        const [x1, y1, x2, y2] = answers.attributes.split(',');
        svgShape = `<svg width="200" height="200"><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="green" /></svg>`;
        break;
      default:
        console.log('Invalid shape entered. Please enter circle, rectangle, or line.');
        break;
    }

    console.log(svgShape);
  })
  .catch((err) => console.log(err));