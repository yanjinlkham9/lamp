class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width*this.height
    }
}

class Rectangle extends Shape{
    constructor(width,height){
        super(width, height)
    }
    getArea(){
        const a = Math.sqrt((this.width**2)+(this.height**2));
        return a;
    }
}
let rec3=new Rectangle(3,4);
console.log(rec3.getArea());

class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }
    getArea(){
        const a = (this.width*this.height)/2;
        return a;
    }
}

class Circle extends Shape{
    constructor(width, height, radius){
        super(height, width);
        this.radius = radius;
    }
    getArea(){
        return Math.PI*this.radius**2;
    }

}


let rec1=new Circle(2,4,4);
console.log(rec1.getArea());