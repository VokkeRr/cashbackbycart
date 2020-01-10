const sum = 5500;
let categ = 'special';
const ans = 0;
const ans1 = 0;
const ans2 = 0;
const ans3 = 0;
const regPurPer = 0.01;
const incPurPer = 0.05;
const spePurPer = 0.3;


if (categ === 'regular') {
    ans = sum * regPurPer;
}
if (categ === 'increased') {
    ans = sum * incPurPer;
}
if (categ === 'special') {
    ans = sum * spePurPer;
}
const cashLim = 3000;

if (ans > cashLim) {
    ans = cashLim;
}
console.log(ans);

let obj = {
    obj1: {
        sum =  3000,
        categ = 'special',
    },
    obj2: {
        sum = 3500,
        categ = 'increased',
    },
    obj3: {
        sum = 4000,
        categ = 'regular',
    }

}
if (obj.obj1.categ === 'regular') {
    ans1 = sum * regPurPer;
}
if (obj.obj1.categ === 'increased') {
    ans1 = sum * incPurPer;
}
if (obj.obj1.categ === 'special') {
    ans1 = sum * spePurPer;
}
//  if obj 2
if (obj.obj2.categ === 'regular') {
    ans2 = sum * regPurPer;
}
if (obj.obj2.categ === 'increased') {
    ans2 = sum * incPurPer;
}
if (obj.obj2.categ === 'special') {
    ans2 = sum * spePurPer;
}
// if obj 3
if (obj.obj3.categ === 'regular') {
    ans3 = sum * regPurPer;
}
if (obj.obj3.categ === 'increased') {
    ans3 = sum * incPurPer;
}
if (obj.obj3.categ === 'special') {
    ans3 = sum * spePurPer;
}

console.log(ans);
console.log(ans1);
console.log(ans2);
console.log(ans3);