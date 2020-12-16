module.exports = {
    arrayToObject: (Array) => {
        return Array.map((Array) => Array.toObject());
    },
    objectToObject: (object) => {
        return object ? object.toObject() : object;
    },
};
