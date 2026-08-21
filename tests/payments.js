function card(callback) {
    console.log("card is swiped and not working")
    callback();
}
function upi(callback) {
    console.log("but upi payment success")
    callback();
}
function paytm(callback) {
    console.log("but paytm payment success");
    callback();
}
function gpay() {
    console.log("but gpay payment success");
    
}
card(()=>{
    paytm(()=>{
        gpay()

    })
})