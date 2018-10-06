// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => { return []; };

const createNotEnumerableProperty = (prop) => {
    Object.defineProperty(Object.prototype, prop, {
        set: (value) => { prop = value; },
        get: () => { return prop; },
        enumerable: false
    });

    return prop;
 };
 
const createProtoMagicObject = () => { 
    let obj = () => {};

    obj.prototype = obj.__proto__;

    return obj;
 };

 function incrementor() {
    this.value = 0;
 };
 incrementor.prototype.valueOf = incrementor.prototype.toString = () => {
    return this.value++;;
 };
 
 let j = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        return resolve(++j);
    })
};

const createIncrementer = () => {
    let obj = [];

    obj.value = 0;
    obj.next = () => { 
        obj.value++;
        return obj; 
    }

    return obj;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (arg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { return resolve(arg); }, 1000);      
    });
};
const getDeepPropertiesCount = (obj) => {
    obj = JSON.stringify(obj);
    return obj.split("}", obj.length).length - 2;
};
const createSerializedObject = () => { return null; };
const toBuffer = () => {};
const sortByProto = (array) => { return array.sort((a, b) => (a.__proto__ - b.__proto__)); };

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;