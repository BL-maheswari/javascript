function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function cal(a,b,callback){
    return callback(a,b);
}
console.log(10,20,add);