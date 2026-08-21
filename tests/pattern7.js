for(let i=5;i>1;i--)
{
let star="";
//space
for(let s=1;s<i;s++)
{
    star=star+" ";
}
//increasing
for(let j=i;j<=5;j++)
{
    star=star+j;
}
//decreasing
for(let j=4;j>=i;j--)
{
    star=star+j;
}
console.log(star);
}