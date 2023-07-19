const a=[100,20,31,150,39,72];
// var low=Math.min(...a);
// var high=Math.max(...a);
var low=a[0];
var high=a[0];
for(let i of a)
    {
    if(i<low)
        low=i
    if(i>high)
        high=i
    }

console.log('Highest value:',high,'and lowest value:',low);

