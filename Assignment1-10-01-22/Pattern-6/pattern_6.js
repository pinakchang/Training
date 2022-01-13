var num=""
let n=9
let count= 0;
let w=n-1;
for(i=0 ; i<n ; i++)
{
    for(j=0 ; j<(2*n)-1 ; j++)
    {
        if(((i+j)>=w) && ((j-i)<=w))
        {
            if(j<=w)
            {
                count++;
                num+=count;
            }
            else
            {
                count--;
                num+=count;
            }
        }
        else
        {
            num+= " ";
            count = 0
        }
    }
    console.log(num)
    num = "";
}
