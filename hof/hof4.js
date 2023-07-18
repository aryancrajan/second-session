const a=[2,3,4,5,6]
var product=a.reduce(function(ac,e)
{   
    return ac*e
})

console.log(a,product)