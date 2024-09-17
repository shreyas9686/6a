const arithmetic=require(`./arithmetic`);
const fs=require('fs');
const a=10;
const b=5;
const sum=arithmetic.add(a,b); 
const difference=arithmetic.subtract(a,b); 
const product=arithmetic.multiply(a,b); 
const quoitient=arithmetic.divide(a,b); 
console.log(`sum:${sum}`);
console.log(`differnce:${difference}`);
console.log(`product:${product}`);
console.log(`quoitient:${quoitient}`);

const results=`
Sum=${sum}
Differnce=${difference}
Product=${product}
Quotient=${quoitient}
`;

fs.writeFile('results.txt',results,(err)=>{
    if(err){
        console.error('Error writing to file',err);
    }else{
        console.log('result writtten to results.txt');
    }
});
fs.readFile('results.txt','UTF-8',(err,data) => {
    if(err){
        console.error('error reading from file',err);
    }else{
        console.log('content of results.txt');
        console.log(data);
    }
});