const a=['react','array','edstem','private'];
const str='edstem';
f=true;
for(let i=0;i<a.length;i++)
    {
        if(a[i]!=str)
            f=false;
        else
            { 
            f=true;
            break;
            }
    }
console.log(f)