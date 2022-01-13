var string=""
let n=9
for(i=0 ; i<n ; i++)
{
    for(j=0 ; j<n ; j++)
    {
        if(i==j)
        {
            if(i==Math.round((n/2)-1))
            {
                string+="o"
            }
            else
            {
                string+="\\"
            }
        }
        else if(i+j==n-1)
        {
            string+="/"
        }
        else if(j==n-1 && i<n-1 || j==0 && i<n-1)
        {
            string+="|" 
        }
        else if(i==n-1 && j<n-1 || i==0 && j<n-1)
        {
            string+="-"
        }
        else
        {
            string+= " "
        }
    }
    string+="\n";
}
console.log(string)


// var string=""
// let n=6
// for(i=0 ; i<n ; i++)
// {
//     for(j=0 ; j<n ; j++)
//     {
//         if(i==(n/2)-1 && j==n/2 || j==(n/2)-1 && i==n/2 || i==n/2 && j==n/2 || i==(n/2)-1 && j==(n/2)-1)
//         {
//             string+="o"
//         }            
//         else if(i==j)
//         {
//            string+="\\"
//         }
//         else if(i+j==n-1)
//         {
//             string+="/"
//         }
//         else if(j==n-1 && i<n-1 || j==0 && i<n-1)
//         {
//             string+="|" 
//         }
//         else if(i==n-1 && j<n-1 || i==0 && j<n-1)
//         {
//             string+="-"
//         }
//         else
//         {
//             string+= " "
//         }
//     }
//     string+="\n";
// }
// console.log(string)