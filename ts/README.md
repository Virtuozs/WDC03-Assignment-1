## Task #1 - Typescript

![task](https://raw.githubusercontent.com/Virtuozs/WDC03-Assignment-1/main/assets/task_img.png)

This folder contains a collection of Typescript implementation from the Task

**Task Overview**

1. Calculate the area of a rectangle
2. Calculate the diameter, circumference, and area of a circle
3. Find the third angle of a triangle given two angles
4. Calculate the difference between two dates in days
5. Display name initials in uppercase

## 1. Calculate the area of a rectangle
```
function rectangleArea(length: number, width: number): number{
    return length * width;
}

console.log(rectangleArea(10, 15));
```

## 2. Calculate the diameter, circumference, and area of a circle
```
function circleProps(radius: number){
    let diameter: number= 2 * radius;
    let circumference: number = 2 * Math.PI * radius;
    let area: number = Math.PI * radius * radius;

    return {
        diameter: diameter,
        circumference: circumference.toFixed(4),
        area: area.toFixed(3)
    };
}

console.log(circleProps(10));
```

## 3. Find the third angle of a triangle given two angles
```
function thirdAngle(firstAngle: number, secondAngle: number): number{
    return 180 - (firstAngle+secondAngle);
}

console.log(thirdAngle(40, 60));
```

## 4. Calculate the difference between two dates in days
```
function dateDifference(date1: string, date2: string): number {
    let d1: Date = new Date(date1);
    let d2: Date = new Date(date2);
    let diffTime: number= Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}
console.log(dateDifference("2025-03-08", "2025-03-10")); 
```

## 5. Display name initials in uppercase
```
function getInitials(name: string):string {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}

console.log(getInitials("Leander Grey"));
```
