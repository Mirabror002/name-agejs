let namePromt =prompt("Ismi")
let agePromt =prompt("Yoshi")

let name1 =prompt("Ismi")
let age1 =prompt("Yoshi")
let user1={
    name: namePromt,
    age: agePromt

}
let user2={
    name:name1,
    age:age1
}

if(agePromt>age1){
    console.log(user1)
}else if(agePromt<age1){
    console.log(user2)
}