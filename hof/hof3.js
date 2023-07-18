const a=[2,3,4,5,6]
var b=a.filter(function(e)
{   
    if(e%3==0)
        return e
})

console.log(a,b)