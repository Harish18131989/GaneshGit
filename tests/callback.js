function one(callback, name)
{
    console.log("hi "+name)
    callback();
}
function greet()
{
    console.log("good bye")
}
one(greet,"harish");
