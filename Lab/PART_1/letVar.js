var x = 10;
if (true){
    var x=20
}
console.log('value of x with var:',x);
let y=10;
if(true){
    let y=20;
    console.log('Inside block, y =',y);

}
console.log('outside block, y=',y);