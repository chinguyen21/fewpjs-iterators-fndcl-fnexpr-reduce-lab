const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 0;

totalBatteries = batteryBatches.reduce((total,e) => total + e, totalBatteries);
