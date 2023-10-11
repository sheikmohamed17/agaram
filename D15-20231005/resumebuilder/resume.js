let resumeDetails={};
let ele_temp={}
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
    // console.log(resumeDetails)
    display()
}
function handlewithmuldata(p_key,ele_id){
   if(!resumeDetails[p_key])
   {
    resumeDetails[p_key]=[]
   }
   if(ele_id)
   {
   resumeDetails[p_key].push(document.getElementById(ele_id).value);
   document.getElementById(ele_id).value='';
   }
   else
   {
    resumeDetails[p_key].push(ele_temp)
    ele_temp={}
   }
   console.log(resumeDetails[p_key])
   let skil=''
   for(let i=0;i<resumeDetails[p_key].length;i++)
   {
    let skils =resumeDetails[p_key][i]
    skil=skil+`<h5>${skils}<input type='button' value='x' onclick="deletedskil('${p_key}')"></h5>`
    }
    console.log(skil)
   document.getElementById('showskills').innerHTML=skil
   display()
}
function language(p_key,ele_id){
    console.log(p_key)
    console.log(ele_id)
    let ele = document.getElementById(ele_id).value;

    console.log('ele',ele);

    if(!resumeDetails[p_key])
    {
        resumeDetails[p_key]=[]
    }
    
    resumeDetails[p_key].push(document.getElementById(ele_id).value)
     document.getElementById(ele_id).value=""
    let lang=''
    for(let i=0;i<resumeDetails[p_key].length;i++)
    {
   lang=lang+`<h5>${resumeDetails[p_key][i]}</h5>`
    }
    document.getElementById('showlang').innerHTML=lang
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
function dataentry(){
    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"create_resume",
            user:"sheikmohamed",
            resume:resumeDetails
            
        },
        success:function(a){
            console.log(a)
            window.location='index.html';
        },
        error:function(er){
            console.log(er)
        },
    })
};
function getdata(){

    $.ajax({
        type:"get",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"get_user_resume",
            user:"sheikmohamed"
        },
        success:function(a){
            
             console.log(a)
            let pdata=JSON.parse(a)
            // console.log(pdata)
            let th=''
            for(let i=0;i<pdata.data.length;i++)
            {
                // console.log(pdata.data[a].user)
                th=th+`<tr>
                <td>${pdata.data[i].user}</td>
                <td>${pdata.data[i].id}</td>
                <td> <button onclick="del('${pdata.data[i].id}')">delete</button></td>
                </tr>`
            }
            document.getElementById('rdata').innerHTML=th
        },
        error:function(er){
            console.log(er)
        }

    })
};
function del(i)
{
    alert(i)
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",

        data:{
            request:"delete_user_resume",
            user:"sheikmohamed",
            id:i
        },
        success:function(a){
            console.log(a)
           
            getdata()
        },
        error:function(err){
            console.log('del_err',err)
        }
    })
}
function getresume(){
    $.ajax(
        {
            type:"GET",
            url:"http://agaram.academy/api/action.php",
            data:{
                request:"get_resume_by_id",
                user:"sheikmohamed",
                id:8220
            },
            success:function(a){
                console.log("getresume",a)
            },
            error:function(err){
                console.log('grError',err)
            }


        }
    )
}
function showtable(){
    window.location="h.html";
    getdata();
}







// $.ajax(
//     {
//         type:"GET",
//         url:'https://jsonplaceholder.typicode.com/posts/',
//         data:{},
//         success:function(d){
//             console.log('s',d);
//             console.log('length',d.length);
//              let hdata='';
//             for(let i=0;i<d.length;i++)
//             {
//                 // console.log(`${data[i].id}`)
//                 hdata=hdata+`<tr>
//                 <td>${d[i].userId}</td>
//                 <td>${d[i].id}</td>
//                 <td><button type="button" onclick="showid('${d[i].id}')">${d[i].title}</td></button>`
                               
//             }
//              document.getElementById('tbody_data').innerHTML=hdata
//         },
//         error:function(err){
//             console.log("e",err)
//         }
//     }
// )
