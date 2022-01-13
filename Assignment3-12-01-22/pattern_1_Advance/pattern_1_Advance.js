string=""
let n=5

for(i=(-n-1) ; i<=(n+1) ; i++)
{
    for(j=(-n-1) ; j<=(n+1) ; j++)
    { 
        if(i==0 && j==0)
        {
            string+="X "
        }
        else if(-n < i < n && (j==(-n-1) || j==(n+1)))
        {
                string+="| "
        }
        else if(-n < j < n && (i==(-n-1) || i==(n+1)))
        {
                string+="= " 
        }
        else if(i==0 && -n<j<n)
        {
            string+="0 "
        }
        else if(j==0 && -n<j<n)
        {
            string+="O "
        }
        else if(Math.abs(i)-Math.abs(j)==0)
        {
            if((j>0 && i<0) || (j<0 && (i>0)))
            {
                string+="/ "
            }
            else
            {
                string+="\\ "
            }
        }
        else if(Math.abs(i)-Math.abs(j)>=0)
        {
            if(i<0 && j>0 || i>0 && j<0) 
            {
                string+= String.fromCharCode(Math.abs(j)+97) + " "
            }
            else
            {
                string+= Math.abs(j) + " "
            }
        }
        else if(Math.abs(i)-Math.abs(j)<=0)
        {
            if(i<0 && j<0 || i>0 && j>0) 
            {
                string+= String.fromCharCode(n-Math.abs(j)+98) + " "
            }
            else
            {
                string+= (n-Math.abs(j)+1) + " "
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
