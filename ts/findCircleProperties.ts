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