const myLocalFunction = () => {
    console.log("Hello from myModule.js");
};

function uppercaseString(str) {
    return str.toUpperCase();
}

function lowercaseString(str) {
    return str.toLowerCase();
}

// export what you want to be public
// named exports pattern
export default {
    uppercaseString,
    lowercaseString
};