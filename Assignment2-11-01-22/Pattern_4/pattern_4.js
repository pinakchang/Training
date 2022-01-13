string=""
let n=9

for(i=(-n-1) ; i<=(n+1) ; i++)
{
    for(j=(-n-1) ; j<=(n+1) ; j++)
    {
        if(j==(-n-1) || j==(n+1) || i==(-n-1) || i==(n+1) && Math.abs(i)+Math.abs(j)>=n+1)
        {
            string+="0 "
        }
        else if(Math.abs(i)-Math.abs(j)>=0)
        {
            if(i<0 && j>0 || i>0 && j<0) 
            {
                string+= (Math.abs(i)-Math.abs(j))+1 + " "
            }
            else
            {
                string+= String.fromCharCode(Math.abs(i)-Math.abs(j)+97) + " "
            }
        }
        else
        {
            string+="  "
        }
    }
    string+="\n"
}
console.log(string)
