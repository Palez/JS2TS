import absolute from 'absolute';
import assert from 'assert';


const x: boolean = absolute('/home/foo');
console.log(assert(x === true));