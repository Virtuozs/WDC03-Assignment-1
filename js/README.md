## Task #1 - Javascript

![task](https://raw.githubusercontent.com/Virtuozs/WDC03-Assignment-1/main/assets/task_img.png)

This folder contains a collection of Javascript implementation from the Task

**Task Overview**

1. Calculate the area of a rectangle
2. Calculate the diameter, circumference, and area of a circle
3. Find the third angle of a triangle given two angles
4. Calculate the difference between two dates in days
5. Display name initials in uppercase

# JavaScript Task Solutions with Explanations

## 1. Calculate the Area of a Rectangle
```javascript
function rectangleArea(length, width){
    return length * width;
}

console.log(rectangleArea(10, 15));
```
### Explanation:
- This function calculates the area of a rectangle using the formula:
  $$
  \text{Area} = \text{length} \times \text{width}
  $$

- It takes two parameters: `length` and `width`.
- Returns the product of `length` and `width`.

---

## 2. Calculate the Diameter, Circumference, and Area of a Circle
```javascript
function circleProps(radius){
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;

    return {
        diameter: diameter,
        circumference: circumference.toFixed(4),
        area: area.toFixed(3)
    };
}

console.log(circleProps(10));
```
### Explanation:
- This function calculates **diameter, circumference, and area** of a circle.
- **Diameter**:  
  $$
  \text{Diameter} = 2 \times \text{radius}
  $$
- **Circumference**:  
  $$
  \text{Circumference} = 2 \times \pi \times \text{radius}
  $$
- **Area**:  
  $$
  \text{Area} = \pi \times \text{radius}^2
  $$
- `toFixed()` ensures values are rounded to 4 decimal places for circumference and 3 for area.

---

## 3. Find the Third Angle of a Triangle
```javascript
function thirdAngle(firstAngle, secondAngle){
    return 180 - (firstAngle + secondAngle);
}

console.log(thirdAngle(40, 60));
```
### Explanation:
- The sum of a triangle’s interior angles is **180°**.
- The third angle is calculated as:
  $$
  \text{Third Angle} = 180° - (\text{First Angle} + \text{Second Angle})
  $$
- The function returns the missing angle.

---

## 4. Calculate the Difference Between Two Dates in Days
```javascript
function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}

console.log(dateDifference("2025-03-08", "2025-03-10"));
```
### Explanation:
- This function calculates the number of days between two dates.
- Converts date strings into `Date` objects.
- Uses `getTime()` to get the time in milliseconds.
- Converts the difference into **days** using:
  $$
  \frac{\text{milliseconds difference}}{1000 \times 60 \times 60 \times 24}
  $$
- `Math.abs()` ensures a positive result.
- `Math.ceil()` rounds up to the nearest whole number.

---

## 5. Display Name Initials in Uppercase
```javascript
function getInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}

console.log(getInitials("leander grey"));
```
### Explanation:
- Extracts **initials** from a given name.
- `split(' ')` breaks the name into words.
- `map()` gets the first letter of each word and converts it to uppercase.
- `join('')` combines the initials into a single string.

---

## Sample Outputs
```javascript
console.log(rectangleArea(10, 15)); 
// Output: 150

console.log(circleProps(10)); 
// Output: { diameter: 20, circumference: '62.8319', area: '314.159' }

console.log(thirdAngle(40, 60)); 
// Output: 80

console.log(dateDifference("2025-03-08", "2025-03-10")); 
// Output: 2

console.log(getInitials("leander grey")); 
// Output: LG
```
