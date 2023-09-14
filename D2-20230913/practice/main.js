var a=true;
console.log(typeof(a));
let b="Agaram";
console.log(typeof(b))
let c=3.45;
console.log(typeof(c))
var my_resume=
    {
        name:"S.Sheik Mohamed",
        emailid:"safeeqameen@gmail.com",
        mobileno:"9629276131",
        softskills:["Emotional Intelligence","Time Management","Creativity"],
        hardskills:["Programming Skills","Project Managemeent"],
        educationalSkills:[{SSLC:402,HSC:378,degree_with_Complete_year :"B.Sc Computer Science in 2023"}],
        experience:"Fresher",
        hobbies:["Creative Something","Learn Newthing"],
        personalDetailes:
            {
                FatherName :"SyedAbdulKader",
                FatherOccupation :"Driver",
                Gender:"Male",
                LanguagesKnown:"Tamil,English",
                DOB :"02/03/2003",
                MartialStatus:"UnMarried",
                Address:"18/1MohideenMosqueSouthStreet,Eruvadi,Tirunellveli,627103"
            }
    }

// console.log(typeof(my_resume))
// let days=["sunday","monday","tuesday"]
// console.log(days[2])
// console.log(days.length)
// console.log(days[days.length-1])
// console.log(days.length-1)
// days.push("friday")
// console.log(days)
// // days.pop()
//  let fri="friday"
// days.slice(2,0,fri)
// console.log(days)
// my_resume.personalDetailes.age=21
// my_resume.hardskills[2]="leadership"
// console.log(my_resume)
// sheik="sheik_mohamed"
// function welcome(name){
//     console.log("Welcome",name)
// }
// welcome(sheik)
for(var i=0;i<5;i++){
    console.log(i)
}
days=[
    {name:"sheik",age:21,marks:[32,35],sub:{tamil:45,english:32}},
    {name:'ameen',age:20}
]
console.log(days[0].sub.tamil)
for(a=0;a<days.length;a++)
{
    console.log(days[a].name)
}