let resumeDetails={};
let emp_temp={};

function a(ele,p_key)
{
    console.log(ele,p_key)
    if(p_key)
    {
        if(resumeDetails[p_key])
        {
            resumeDetails[p_key]={...resumeDetails[p_key]}
        }
        else
        {
            resumeDetails[p_key]={};
        }
        resumeDetails[p_key][ele.name]=ele.value;
        disp()
    }
    else{
    resumeDetails[ele.name]=ele.value;
    }
    console.log(resumeDetails)
    disp()
}
function handlewithmuldata(obj_id,ele_id,t_id)
{
    if(!resumeDetails[obj_id])
    {
        resumeDetails[obj_id]=[];
    }
    if(ele_id)
    {
        resumeDetails[obj_id].push(document.getElementById(ele_id).value);
        document.getElementById(ele_id).value=''
        showarry(obj_id,t_id)

    }
    else{
        resumeDetails[obj_id].push(emp_temp)
        console.log(emp_temp);
        showobjed(obj_id,t_id)
        //  document.getElementById(obj_id).value=''
         let keys=Object.keys(emp_temp)
    for(let i=0;i<keys.length;i++)
    {
       document.getElementsByName(keys[i]).value=''
    }
        emp_temp={}
    }
    console.log(resumeDetails)
    disp()
}

function handlewithmularray(ele)
{
emp_temp[ele.name]=ele.value;
}


function showarry(ob_id,tbl_id)
{
    let dispary='';
    for(let i=0;i<resumeDetails[ob_id].length;i++)
    {
        
        dispary=dispary+`<tr id='${ob_id[i]}'><td>${i+1}'</td><td>'${resumeDetails[ob_id][i]}'</td>
        <td><button type="button" onclick="de('${ob_id}','${i}')" >x</button></td></tr>`
        console.log(dispary)
    }
    document.getElementById(tbl_id).innerHTML=dispary;
}
function showobjed(o_id,tbl_id){

    let dispobj='';
    for(let i=0;i<resumeDetails[o_id].length;i++)
    {
        
      
        let d1=resumeDetails[o_id][i].e_name;
        console.log(d1)
        let d2=resumeDetails[o_id][i].level;
        let d3=resumeDetails[o_id][i].year;
        let d4=resumeDetails[o_id][i].percent;
        // dispobj=dispobj+`<div id='${o_id[i]}'>'${d1}' '${d2}' '${d3}' '${d4}' <button onclick="de('${o_id}','${i}')">x</button>`
        dispobj=dispobj+`<tr id='${o_id[i]}'><td>${d1}</td><td>${d2}</td><td>${d3}</td><td>${d4}</td><td><button type="button" onclick="de('${o_id}','${i}')">delete</button></td>`
        document.getElementById(tbl_id).innerHTML=dispobj
    }
}

function de(o_id,id_nx)
{
    console.log(o_id,id_nx)
   
let after_del_data=[]
for(let i=0;i<resumeDetails[o_id].length;i++)
{

    if(i!=id_nx)
    {
        after_del_data.push(resumeDetails[o_id][i])
    }
}
// console.log(after_del_data)
resumeDetails[o_id]=after_del_data
console.log('d',resumeDetails[o_id])

    a=document.getElementById(`${o_id[id_nx]}`)
     console.log(a)
    a.remove()
     disp()
    // showobjed(resumeDetails[o_id],o_id)

}

function disp()
{
    document.getElementById("display_data").innerHTML=JSON.stringify(resumeDetails,undefined,2)
}

// ----------------------AJAX--------------------------//
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
            window.location='show_table.html';
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
                <td><a href="file:///home/sheik_mohamed/agaram/D15-20231005/resumebuilder/show_layout.html?id=${pdata.data[i].id}">ReDirect</a>
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
            // console.log(a)
           
            getdata()
        },
        error:function(err){
            console.log('del_err',err)
        }
    })
}
function getresume(i){
    $.ajax(
        {
            type:"GET",
            url:"http://agaram.academy/api/action.php",
            data:{
                request:"get_resume_by_id",
                user:"sheikmohamed",
                id:i
            },
            success:function(a){
                console.log("getresume",a)
                let parsed_data=JSON.parse(a)
                let parsed_data_data=parsed_data.data.data
                let p=JSON.parse(parsed_data_data)
                console.log('p',typeof(p.experience))
                document.getElementById("name").innerHTML=p.name;
                document.getElementById("cell").innerHTML=p.mobile;
                // $('#date_of_birth').html(p.date_of_birth)
                $('#objective').html(p.objective);
                $('#mail_id_1').html(p.email)
                $('#name_2').html(p.name);
                $('#name_3').html(p.name);
                $('#degree').html(p.degree);
                $('#father_name').html(p.personal_detailes.father_name)
                $('#gender').html(p.personal_detailes.gender)
                $('#nation').html(p.personal_detailes.nation)
                $('#hobbies').html(p.personal_detailes.Hobbies)
                $('#declartion').html(p.decelartion)
                $('#mail_id').html(p.email)
                $('#phone').html(p.mobile)
                $('#role').html(p.role)
                $('#date_of_birth').html(p.personal_detailes.dob)
                let skills_html='';
                 for(let i=0;i<p.skills.length;i++)
                 {
                    
                    skills_html=skills_html+`<li>${p.skills[i]}</li></ul>`
                    
                 }
                $('#skill_list').html(skills_html)
                let education_html=''
                for(let i=0;i<p.education.length;i++)
                {
                    education_html=education_html+`</b><li>Edcuation Level:<b>${p.education[i].level}</b><br>
                    Institute Name:<b>${p.education[i].e_name}</b><br>
                    Percentage:<b>${p.education[i].percent}</b><br>
                    Passed Out year:<b>${p.education[i].year}</b>
                    </li>`
                }
                $('#education_list').html(education_html)

                let experience_html=''
                console.log(p.Experience)
                for(let i=0;i<p.Experience.length;i++)
                {
                    console.log(p.Experience[i].e_name)
                    experience_html=experience_html+`</b><li>Job position:<b>${p.Experience[i].level}</b><br>
                    company name:<b>${p.Experience[i].e_name}</b><br>
                    no of projects:<b>${p.Experience[i].percent}</b><br>
                    year of experience:<b>${p.Experience[i].year}</b>
                    </li>`
                }

                 $('#experience_list').html(experience_html)
                 let project_html=''
                 console.log(p.project)
                 for(let i=0;i<p.project.length;i++)
                 {
                     project_html=project_html+`</b><li>Job position:<b>${p.project[i].level}</b><br>
                     company name:<b>${p.project[i].name}</b><br>
                     no of projects:<b>${p.project[i].percent}</b><br>
                     year of experience:<b>${p.project[i].year}</b>
                     </li>`
                 }
 
                  $('#project_detail').html(project_html)

                let languages_html=""
                for(let i=0;i<p.languages_known.length;i++)
                {
                    languages_html=languages_html+`${p.languages_known[i]} `
                }
                $('#known_languages').html(languages_html)
                
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



 var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function download() {
    alert('ok')
const page = document.getElementById('temp_for_resume');
var opt = {
margin:
1,
filename: 'Demopdf.pdf',
image:
{ type: 'jpeg', quality: 0.98 },
html2canvas:
{ scale: 1 },
jsPDF:
{ unit: 'in', format: 'letter', orientation: 'portrait' }
};
// Choose the element that our invoice is rendered in.
html2pdf().set(opt). from (page).save();
}

function getingid(id)
{
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        data:
        {
            request:"get_user_resume",
            user:"sheikmohamed",
            resume:resumeDetails
        },
        success:function(response){
            
            let parsedata=JSON.parse(response)
            let data=parsedata.data
            console.log(data)
            let htmldata='';
            for(let i=0;i<data.length;i++)
            {
                console.log(data[i].id,id)
                if(data[i].id==id)
                {
                htmldata=htmldata+`<li><a href="file:///home/sheik_mohamed/agaram/D15-20231005/resumebuilder/resume_1.html?id=${data[i].id}"><img src="images/newresume1.jpg"</a></li>
                <li><a href="file:///home/sheik_mohamed/agaram/D15-20231005/resumebuilder/new_resume_layout/resume2.html?id=${data[i].id}"><img src="images/temp1.png"</a></li>
                <li><a href="file:///home/sheik_mohamed/agaram/D15-20231005/resumebuilder/new_resume_layout/resume4.html?id=${data[i].id}"><img src="images/resume4.png"</a></li>
                <li><a href="file:///home/sheik_mohamed/agaram/D15-20231005/resumebuilder/new_resume_layout/resume5.html?id=${data[i].id}"><img src="images/resume4.png"</a></li>
                
                
                `
                }
            }
            $('#listdata').html(htmldata)
        },
        error:function(error_message){
            console.log("error",error_message)
        }

    })
}
