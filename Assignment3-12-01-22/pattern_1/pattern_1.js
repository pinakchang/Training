string=""
let n=5
for(i=-(n+1) ; i<=(n+1) ; i++)
{
    for(j=-(n+1) ; j<=(n+1) ; j++)
    {
        if(i==0 && j==0)
        {
            string+="O"
        } 
        else if(-n < i < n && (j==(-n-1) || j==(n+1)))
        {
                string+="O"
        }
        else if(-n < j < n && (i==(-n-1) || i==(n+1)))
        {
                string+="0" 
        }
        else if(Math.abs(i)-Math.abs(j)>=0 && ((i<0 && j<0) || (i>0 && j>0)))
        {
                string+= (Math.abs(j))
        }
        else if(Math.abs(i)-Math.abs(j)<=0 && ((i<0 && j>0) || (i>0 && j<0)))
        {
                string+=n-Math.abs(j)+1
        }
        else
        {
            string+=" "
        }
    }
    string+="\n"
}
console.log(string)