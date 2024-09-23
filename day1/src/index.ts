function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

greet("TypeScript");

function areaRectangle (length:number, width:number): number{
    return length*width
}
let lenghtRect:number= 25;
let widthRect:number = 5;
console.log("The area of reactangle is " + areaRectangle(lenghtRect,widthRect));

