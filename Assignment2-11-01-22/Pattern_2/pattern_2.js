var string=""
let n=5
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
        if(i<0 && j<0 && Math.abs(i)+Math.abs(j)<=n+1 || i>0 && j>0 && Math.abs(i)+Math.abs(j)<=n+1)
        {
            string+="@"
        }
        else
        {
            string+="-"
        }
    }
    string+="\n";
}
console.log(string)