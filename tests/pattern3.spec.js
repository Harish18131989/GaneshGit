for(let i=0;i<6;i++)
{
    let star="";
    for(let s=0;s<i;s++)
    {
        star=star+" ";
    }
    for(let j=10;j>=i*2;j--)
    {
        star=star+"*";
    }
    console.log(star)
}