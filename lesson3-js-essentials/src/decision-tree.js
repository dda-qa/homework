let a = 1;
let b = 0;

if (a > b) {
    console.log("a is bigger");
}
else{
    console.log("a is smaller")
}

b++;

if (a > b) {
    console.log("a is bigger");
}
else if (a === b){
    console.log("a and b are equal")
}
else{
    console.log("a is smaller");
}

b++;

if (a > b) {
    console.log("a is bigger");
}
else if (a === b){
    console.log("a and b are equal")
}
else{
    console.log("a is smaller");
}

if (a > b || a < b) {
    console.log("Anything is possible within the next decade");
}
