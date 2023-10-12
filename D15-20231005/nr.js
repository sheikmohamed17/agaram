let resumeDetails={};
let emp_temp={};

function a(ele,p_key)
{
    if(p_key)
    {
        if(resumeDetails(p_key))
        {
            resumeDetails[p_key]={...resumeDetails}
        }
        else
        {
            resumeDetails[p_key]=[];
        }
        resumeDetails[p_key][ele.name]=ele.value;
    }
    resumeDetails[ele.name]=ele.value;
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
        showarry(obj_id,t_id)

    }
    else{
        resumeDetails[obj_id].push(emp_temp)
        console.log(emp_temp);
        showobj(obj_id,t_id)
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
    // console.log(ob_id,tbl_id)
    // console.log('g',resumeDetails[ob_id])
    let dispary='';
    for(let i=0;i<resumeDetails[ob_id].length;i++)
    {
        dispary=dispary+`<div id='${ob_id[i]}'>'${resumeDetails[ob_id][i]}'<button onclick="d('${ob_id},${i}')">x</div>`
    }
    // console.log(dispary)
    document.getElementById(tbl_id).innerHTML=dispary;
}
function showobj(o_id,tbl_id){
    // console.log(o_id,tbl_id)
    let dispobj='';
    for(let i=0;i<resumeDetails[o_id].length;i++)
    {
        // console.log(resumeDetails[o_id][i])
        for(keys in resumeDetails[o_id][i])
        {
            dispobj=dispobj+`<div>'${keys}' '${resumeDetails[o_id][i][keys]}'</div>`
        }
        // console.log("d",dispobj)
        document.getElementById(tbl_id).innerHTML=dispobj
    }
}

function d(oid,idindex)
{
    alert(oid,idindex)
}

function disp()
{
    document.getElementById("display_data").innerHTML=JSON.stringify(resumeDetails,undefined,2)
}