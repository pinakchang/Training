var string=""
let n=9
for(i=0 ; i<n ; i++)
{
    for(j=0 ; j<=i ; j++)
    {
        string += "*";
    }
    string+="\n";
}
console.log(string)