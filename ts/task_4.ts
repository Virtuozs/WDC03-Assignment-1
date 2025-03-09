function dateDifference(date1: string, date2: string): number {
    let d1: Date = new Date(date1);
    let d2: Date = new Date(date2);
    let diffTime: number= Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}
console.log(dateDifference("2025-03-08", "2025-03-10")); 