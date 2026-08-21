let no=7;
let prime=true;

if(no<=1)
{
    prime=false;
}

for(let i=2;i<no;i++)
{
    if(num%i==0)
    {
        prime=false;
        break;
    }
}
if(prime)
{
    console.log("it is a prime number");
}
else
{
    console.log("it is a prime number");
}