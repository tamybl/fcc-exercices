function whatIsInAName(collection, source) {

    var arr = [];
    var keys = Object.keys(source);
    arr = collection.filter((data) => {
        return keys.every((key) => {
            return data.hasOwnProperty(key) && source[key] === data[key];
        })
    });
    return arr;
}

// Test
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

