let a={
    name:"BMW",
    cost:75.6,
    milage:86,

    start:function(){
        console.log("car is starting....");
    },
    accelerate:function(){
        console.log("car is accelerate..");
    }
};
console.log(a.name);
console.log(a.cost);
a.start();