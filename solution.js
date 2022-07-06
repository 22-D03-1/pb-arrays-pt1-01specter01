const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondaryCity = euroCities[1]; //1

euroCities[0] = "Berlin"; //2

console.log(euroCities.length); //3

euroCities.pop(); //4

euroCities.push("Budapest"); // 5

const asianCities = ["Shanghi", "Kalkutta", "Kathmandu", "Hongkong", "Deli"]; //6

const worldCities = euroCities.concat(asianCities); // 7

worldCities.reverse(); // 8

euroCities.pop(); // 9
