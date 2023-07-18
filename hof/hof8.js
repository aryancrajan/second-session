const a=["Edstem","technology","private","limited"];
var b=a.reduce(function(ac,e)
{
   return ac+'_'+e
})
console.log(b)