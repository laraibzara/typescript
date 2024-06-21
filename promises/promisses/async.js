// promiss
// Key concept
//promiss has three types
//1 pending(initial state)
//2 fulfill(complet / resolves)
//3 Rejected(operation failed / rejected)
// Basic syntex of promiss/ simple way to code a promiss
// let promiss=newPromiss(function(){})
// we make a simple promiss programm
var pubG;
pubG = "we want AC envernoment", "we want to eat biryani";
console.log(pubG);
function makePizza() {
    return "your pizza is ready";
}
var order = makePizza();
console.log(order);
console.log("------------------------------");
var wedding;
wedding = "parrty is ready", "bridal is looking beautyful", "lunch is very testy";
console.log(wedding);
function makeBridal() {
    return "bridal is ready";
}
var order2 = makeBridal();
console.log(order2);
