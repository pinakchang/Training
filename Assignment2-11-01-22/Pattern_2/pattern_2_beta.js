var string=""
let n=4
for(i=-n ; i<=n ; i++)
{
    if(i==0)
        {
            continue
        }
    for(j=-n ; j<=n ; j++)
    {
        if(j==0)
        {
            continue
        }
        if(Math.abs(i)+Math.abs(j)>n+1)
        {
            string+="-"
        }
        else
        {
            string+="@"
        }
    }
    string+="\n";
}
console.log(string)
