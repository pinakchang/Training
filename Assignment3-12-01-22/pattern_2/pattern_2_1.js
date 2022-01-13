string=""
base=""
bottom_base=""
tree=""
top_cherry=""
let n=5

for(i=0 ; i<n+1 ;i++)
{
    if(i-n==0)
    {
        top_cherry+="O" 
    }
    else
    {
        top_cherry+=" "
    }
    for(j=-n ; j <= n ; j++)
    {  
        if(Math.abs(j)==0 || i == n)
        {
            bottom_base+="="
        }
        else if(Math.abs(j) == 1)
        {
            bottom_base+="|"
        }
        else
        {
            bottom_base+=" "
        }
        if(i==0)
        {
            continue
        }
        else if(Math.abs(i) - Math.abs(j) == 0 && j!=0 && j>0)
        {
            string+="\\"
        }
        else if(Math.abs(i) - Math.abs(j) == 0 && j!=0 && j<0)
        {                
           string+="/"
        }
        
        else if(i-Math.abs(j)>=1 && i<=n || i-Math.abs(j)>=n+1 && i<=(2*n))
        {
            string+="*"
        }
        else
        {
            string+=" "
        }
    }
    if(i!=n)
    {
        string+="\n"
    }
    bottom_base+="\n"
}
for(k=0;k<n-1;k++)
{
    tree+=string
}
console.log(top_cherry+tree)
console.log(bottom_base)