const sum = 5500;
const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special';
const ans = 0;
const ans1 = 0;
const ans2 = 0;
const ans3 = 0;
const REGULAR_CASHBACK_PERCENT = 1;
const INCREASED_CASHBACK_PERCENT = 5;
const SPECIAL_CASHBACK_PERCENT = 30;


if (categ === 'regular') {
    ans = sum * REGULAR_CASHBACK_PERCENT;
}
if (categ === 'increased') {
    ans = sum * INCREASED_CASHBACK_PERCENT;
}
if (categ === 'special') {
    ans = sum * SPECIAL_CASHBACK_PERCENT;
}
const CASHBACK_LIMIT = 3000;

if (ans > CASHBACK_LIMIT) {
    ans = CASHBACK_LIMIT;
}
console.log(ans);

const purchases = [
    {
        amount: 1000,
        category: REGULAR_CATEGORY,
    },
    {
        amount: 1000,
        category: INCREASED_CATEGORY,
    },
    {
        amount: 1000,
        category: SPECIAL_CATEGORY,
    },
];

let cashback = 0;

if (obj.obj1.categ === 'regular') {
    ans1 = sum * REGULAR_CASHBACK_PERCENT;
}
if (obj.obj1.categ === 'increased') {
    ans1 = sum * INCREASED_CASHBACK_PERCENT;
}
if (obj.obj1.categ === 'special') {
    ans1 = sum * SPECIAL_CASHBACK_PERCENT;
}

//  if obj 2
if (obj.obj2.categ === 'regular') {
    ans2 = sum * REGULAR_CASHBACK_PERCENT;
}
if (obj.obj2.categ === 'increased') {
    ans2 = sum * INCREASED_CASHBACK_PERCENT;
}
if (obj.obj2.categ === 'special') {
    ans2 = sum * SPECIAL_CASHBACK_PERCENT;
}
// if obj 3
if (obj.obj3.categ === 'regular') {
    ans3 = sum * REGULAR_CASHBACK_PERCENT;
}
if (obj.obj3.categ === 'increased') {
    ans3 = sum * INCREASED_CASHBACK_PERCENT;
}
if (obj.obj3.categ === 'special') {
    ans3 = sum * SPECIAL_CASHBACK_PERCENT;
}

console.log(ans);
console.log(ans1);
console.log(ans2);
console.log(ans3);