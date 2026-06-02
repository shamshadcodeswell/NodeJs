console.log('hello world i am shamshad');
const _ = require('lodash');
const arr = [1,2,[3,[4,5]]]

const newitem = _.flattenDeep(arr);
console.log(newitem);
