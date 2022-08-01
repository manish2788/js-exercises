const obj = {
	address: {
        region : {
            state: "Karnatak",
            country: "India"
        },
        city: "Bnglr",
    },
    name : {
        firstName: "Umang",
    },
    email : "xyz@abc.com"
};

function updateObj(obj, pathArr, value) {
    let len = pathArr.length;
    let current = obj;

    pathArr.forEach((item, index) => {
        if(index === len - 1) {
            current[item] = value;
        }
        else {
            current = current[item];
        }
    });
    return obj;  
}

console.log(updateObj(obj, ["address", "region"], {'country':'India'}));
// console.log(updateObj(obj, ["address", "region", "state"], value));
// console.log(updateObj(obj, ["name", "lastname"], value));
// console.log(updateObj(obj, ["email"], value));