class Shape {
    constructor(color) {
        this.color = color;
    }

    
    render() {
                return '';
      }
}


class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
      }

      render() {
        return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;
      }
}
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color()}" />`;
    }
}

class Square extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        return `<rect x="25" y="25" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}}" />`;
    }
}


module.exports = { Circle, Triangle, Square };  