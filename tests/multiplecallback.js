function a(callback)
{
console.log("a");
callback()
}
function b(callback)
{
    console.log("b");
    callback()
}
function c(callback)
{
    console.log("c");
    callback()
}
function d()
{
    console.log("d");
}
a(()=>{
b(()=>
{
    c(()=>{
        d()
    })
})
})