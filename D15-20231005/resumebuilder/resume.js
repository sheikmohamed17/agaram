let resumeDetails={};
ele_temp={}
function a(ele,detail)
{
    if(detail)
    {
        if(resumeDetails[detail])
        {
            resumeDetails[detail]={...resumeDetails[detail]}
        }   
        else{
            resumeDetails[detail]={}
        }
        resumeDetails[detail][ele.name]=ele.value
    }
    else{
        resumeDetails[ele.name]=ele.value
    }
    console.log(resumeDetails)
    display()
}
function handlewithmuldata(p_key,ele_id){
   if(!resumeDetails[p_key]){
    resumeDetails[p_key]=[]
   }
   if(ele_id){
   resumeDetails[p_key].push(document.getElementById(ele_id).value);
   document.getElementById(ele_id).value='';
   }
   else{
    resumeDetails[p_key].push(ele_temp)
    ele_temp={}
   }
   console.log(resumeDetails[p_key])
   let skil=''
   for(let i=0;i<resumeDetails[p_key].length;i++){
    let skils =resumeDetails[p_key][i]
    skil=skil+`<h5>${skils}<input type='button' value='x' onclick="deletedskil('${p_key}')"></h5>`
 }
   document.getElementById('showskills').innerHTML=skil
   display()
}
function deletedskil(a){
    for(let i=0;i<resumeDetails['skills'].length;i++){
        console.log(a[i])
        if(resumeDetails['skills'][i]=a[i]){
            
        }
    }

}

function handlewithmularray(ele){
ele_temp[ele.name]=ele.value;
}

// function handlewithobj(p_key){
//     if(!resumeDetails[p_key]){
//         resumeDetails[p_key]=[]
//     }
//     resumeDetails[p_key].push(ele_temp);
//     display()
// }

function display(){
    document.getElementById('display_data').innerHTML=JSON.stringify(resumeDetails,undefined,2)
}