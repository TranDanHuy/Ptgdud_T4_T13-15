
const avgDolphins = (96 + 108 + 89) / 3; 
const avgKoalas = (88 + 91 + 110) / 3;   


console.log(`Điểm trung bình của Dolphins: ${avgDolphins}`);
console.log(`Điểm trung bình của Koalas: ${avgKoalas}`);


if (avgDolphins > avgKoalas) {
  console.log("Dolphins giành được cúp!");
} else if (avgKoalas > avgDolphins) {
  console.log("Koalas giành được cúp!");
} else {
  console.log("Hai đội hòa nhau!");
}


if (avgDolphins >= 100 || avgKoalas >= 100) {
  if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("Dolphins giành được cúp với điều kiện điểm tối thiểu!");
  } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log("Koalas giành được cúp với điều kiện điểm tối thiểu!");
  } else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("Hai đội hòa nhau và đều đạt điều kiện điểm tối thiểu!");
  } else {
    console.log("Không có đội nào giành được cúp do không đạt điều kiện tối thiểu!");
  }
} else {
  console.log("Không có đội nào giành được cúp do không đạt điều kiện điểm tối thiểu!");
}


if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
  console.log("Hai đội hòa nhau và đủ điều kiện điểm tối thiểu!");
} else if (avgDolphins === avgKoalas) {
  console.log("Hai đội hòa nhau nhưng không đạt điểm tối thiểu!");
}
