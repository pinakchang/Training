var string=""
let n=5
for(i=0 ; i<=n ; i++)
{
    for(j=0 ; j<=n ; j++)
    {
        if(i+j>n)
        {
            string+="*"
        }
        else
        {
            string+=" "
        }
    }
    string+="\n";
}
console.log(string)