
// callback hell / callback
console.log("Start");

function getName(name, callback){
    setTimeout(()=>{
        console.log("Set Timeout Function called");
        callback(name);
    }, 2000)
}

function getHobbies(name, hobbies) {
    setTimeout(() => {
        console.log("Set Timeout Finction called");
        hobbies(['Cricket', 'Tenis', 'Badminton']);
    }, 1000)
}
let nm = getName("Jay", (nm) => {
    console.log(nm);
    getHobbies(nm, (hobby) => {
        console.log(hobby)
    })
});

console.log("End");
