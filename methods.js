var agesArr = [25, 36, 49, 64, 81, 55];

function root() {
    var roots = agesArr.map(Math.sqrt)
    return roots;
};

var test = root();
console.log(test)
console.log(agesArr)