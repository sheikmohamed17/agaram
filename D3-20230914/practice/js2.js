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
for(var i=0;i<x.education.length;i++)
{
console.log(i+1,x.education[i].study,x.education[i].mark)
}
}
ed(my_resume)