var my_resume=
    {
        name:"S.Sheik Mohamed",
        emailid:"safeeqameen@gmail.com",
        mobileno:"9629276131",
        softskills:["Emotional Intelligence","Time Management","Creativity"],
        hardskills:["Programming Skills","Project Managemeent"],
        education:[{study:"SSLC",mark:402,ins_name:"GHSS",year:2018},
        {study:"HSC",mark:378,ins_name:"GHSS",year:2020},
        {study:"B.Sc Computer Science",year:2023,ins_name:'arignar anna college',mark:"firstclass"}
    ],
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
console.log(my_resume)
function ed(x){
for(var i=x.education.length-1;i>=0;i--)
{
console.log(i+1,x.education[i].study,x.education[i].mark)
}
}
ed(my_resume)
var my_resume1={          projects:[
    {MiniProject:                                                             
            {Title:"Online Banking System",                                           
            frontEnd:["HTML","CSS","JAVAScript"],                                                
            BackEnd:["JAVA","mySQL"],
            Tools:["netBeam","github"]                                                       
            }}, 
    {MainProject:
            {Title:"Multi-Objective load balancing technique for resource management in cloud environment",
            frontEnd:["HTML","CSS","JAVAScript"],                                           
            BackEnd:["JAVA","mySQL"],                                                         
            Tools:["Cloud sim","Deeplearning",["github"]]} 
            }
    ]         }
// console.log(my_resume1.projects[1].MainProject.frontEnd.slice())
sessionStorage.setItem("name","agaram");
localStorage.setItem("name","Agaram");
a=localStorage.getItem("name")
console.log(typeof(a))
console.log(typeof(localStorage.getItem("name")))
let alpha=["A","B","C","D"]
var str=JSON.stringify(alpha)
console.log(localStorage.setItem("string",str))
// console.log(localStorage.getItem(typeof(str)))
// b=localStorage.getItem("string")
var arr=JSON.parse(str)
console.log(arr[1])