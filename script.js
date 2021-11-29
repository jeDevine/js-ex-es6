class Room {
    constructor(name, length, width, capacity=15) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.capacity = capacity;
    }
    getArea() {
        let area = this.length*this.width;
        return area;
    }
    getPerimeter() {
        let perimeter = (this.length+this.width)*2;
        return perimeter;
    }
    isavailable = true;  //boolean inside a class
}

const room1 = new Room("Sun", 30, 20);

const room2 = new Room("Green", 15, 20, 18);

console.log(room1.capacity);
console.log(room2.capacity);

room1.getArea();
room1.getPerimeter();

console.log(`Name: ${room1.name}, length: ${room1.length}, width: ${room1.width}, area: ${room1.getArea()}, perimeter: ${room1.getPerimeter()} Avaliblity: ${room1.isavailable}`);
console.log(`Name: ${room2.name}, length: ${room2.length}, width: ${room2.width}, area: ${room2.getArea()}, perimeter: ${room2.getPerimeter()} Avaliblity: ${room2.isavailable}`);