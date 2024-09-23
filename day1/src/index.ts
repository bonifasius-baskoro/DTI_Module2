import dayjs from 'dayjs';

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

greet("TypeScript");

//Rectangle Area 
function areaRectangle (length:number, width:number): number{
    return length*width
}
let lenghtRect:number= 25;
let widthRect:number = 5;
console.log("The area of reactangle is " + areaRectangle(lenghtRect,widthRect));


function findCircleInfo(radius:number):number[]{
    let infoArr:number[]= [];
    infoArr[0] = radius*2;
    infoArr[1]= Math.round((3.14 * infoArr[0])*100)/100;
    infoArr[2] = 3.14*radius*radius;
    return infoArr

}
let radius = 7;
let circleInfo = findCircleInfo(radius);
console.log("This is the circle info from radius = "+ radius 
    + " \n the diamter = " + circleInfo[0]
    + "\n the circumference = " + circleInfo[1] 
    + "\n the area of circle = " + circleInfo[2]);


function findLastAngle(angle1:number, angle2:number):number{
    return 180-angle1-angle2;
}
let angle1 = 65;
let angle2= 90;
console.log("The last angle = " + findLastAngle(angle1,angle2));



let now = dayjs().format("DD-MM-YYYY") ;
var date1= dayjs("2024-09-20");
var date2= dayjs("2024-09-23");
let diff =Math.abs(date1.diff(date2,"day"))
console.log("The difference between " + date1.format("DD-MM-YYYY") +" and " + date1.format("DD-MM-YYYY") + " are "+ diff+ " days");

function getInitial(name:string):string{
    let nameArr = name.split(" ");
    return nameArr.reduce((str,item)=> str + item[0],"")
}

let nameInput = "Uzumaki Naruto Kakashi Hisatsu"
console.log("The initial from this name: " + nameInput+ " are " + getInitial(nameInput));