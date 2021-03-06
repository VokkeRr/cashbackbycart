const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special';
const REGULAR_CASHBACK_PERCENT = 0.01;
const INCREASED_CASHBACK_PERCENT = 0.05;
const SPECIAL_CASHBACK_PERCENT = 0.3;
const CASHBACK_LIMIT = 3000;

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

for (const purchase of purchases) {
    if (purchase.category == REGULAR_CATEGORY) {
        cashback = (purchase.amount * REGULAR_CASHBACK_PERCENT);
    } else if (purchase.category == INCREASED_CATEGORY) {
        cashback = (purchase.amount * INCREASED_CASHBACK_PERCENT);
    } else if (purchase.category == SPECIAL_CATEGORY) {
        cashback = (purchase.amount * SPECIAL_CASHBACK_PERCENT);
    }
}
if (cashback > CASHBACK_LIMIT){
    cashback = CASHBACK_LIMIT;
}
    console.log(cashback);