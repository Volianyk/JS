//#gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

const nums = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

nums.myForEach((value, index) => {
    console.log(value, index);
});

Array.prototype.myFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

const evens = nums.myFilter(n => n % 2 === 0);
console.log(evens);