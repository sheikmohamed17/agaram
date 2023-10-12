let resumeDetails={}
let ele_temp={}
// function savedata(ele,detail)
// {
//     if(detail){
//         if(resumeDetails[detail]){
//             resumeDetails[detail]={...resumeDetails[detail]}
//         }
//         else{
//             resumeDetails[detail]={}
//         }
//         resumeDetails[detail][ele.name]=ele.value;
//     }
//     resumeDetails[ele.name]=ele.value;
//     console.log(resumeDetails)
// }
// function savedata(ele,detail){
//     if(detail){
//         if(resumeDetails[detail]){
//             // resumeDetails[detail]={...resumeDetails[detail]}
//         }
//         else{
//             resumeDetails[detail]={}
//         }
//         resumeDetails[detail][ele.name]=ele.value;

//     }
//     resumeDetails[ele.name]=ele.value
//     console.log(resumeDetails)
// }
// function savedata(ele,detail)
// {
//     if(detail){
//         if(resumeDetails[detail])
//         {
//             resumeDetails[detail]={...resumeDetails[detail]}
//         }
//         else{
//             resumeDetails[detail]={}
//         }
//         resumeDetails[detail][ele.name]=ele.value
//     }
//     resumeDetails[ele.name]=ele.value
//     console.log(resumeDetails)
// }
// function savedata(ele,detail){
//     if(detail){
//         if(resumeDetails[detail])
//         {
//             resumeDetails[detail]={...resumeDetails[detail]}
//         }
//         else{
//             resumeDetails[detail]={}
//         }
//         resumeDetails[detail][ele.name]=ele.value
//     }
//     resumeDetails[ele.name]=ele.value
//     console.log(resumeDetails)
// }
// function hwmd(p_key,ele)
// {
//     if(!resumeDetails[p_key]){
//         resumeDetails[p_key]=[]
//     }
//      if(ele)
//     {
//         resumeDetails[p_key].push(document.getElementById(ele).value)
//     }
//     console.log(resumeDetails)
// }
// function hwmd(p_key,ele_id){
//     if(!resumeDetails[p_key])
//     {
//      resumeDetails[p_key]=[]
//     }
//     if(ele_id)
//     {
//     resumeDetails[p_key].push(document.getElementById(ele_id).value);
//     document.getElementById(ele_id).value='';
//     }
//     console.log(resumeDetails)
// }

// function savedata(ele_id,p_key){
//     if(p_key){
//         if(resumeDetails[p_key])
//         {
//             resumeDetails[p_key]={...resumeDetails[p_key]}
//         }
//         else
//         {
//            resumeDetails[p_key]={} 
//         }
//         resumeDetails[p_key][ele_id]=ele_id.value;
//     }
//     resumeDetails[ele_id.name]=ele_id.value
//     console.log(resumeDetails)
// }


// function hwmd(p_key,ele){
//     if(!resumeDetails[p_key]){
//         resumeDetails[p_key]=[]
//     }
//     if(ele){
//         resumeDetails[p_key].push(document.getElementById(ele).value)
//     }
//     console.log(resumeDetails)
// }




// function savedata(ele,detail){
//     if(detail)
//     {
//     if(resumeDetails[detail])
//         {
//         resumeDetails[detail]={...resumeDetails[detail]}
//         }
//     else
//     {
//         resumeDetails[detail]={}
//     }
//     resumeDetails[detail][ele.name]=ele.value
//     }
//     resumeDetails[ele.name]=ele.value
//     console.log(resumeDetails)
   
//     display()
// }
// function hwmd(p_key,ele_id)
// {
//     if(!resumeDetails[p_key]){
//         resumeDetails[p_key]=[]
//     }
//     if(ele_id){
//         resumeDetails[p_key].push(document.getElementById(ele_id).value)
//     }
//     display()
//     console.log(resumeDetails)
// }
// // function disp(){
// //     document.getElementById('showresume').innerHTML=JSON.stringify(resumeDetails)
// // }
// function display(){
  
//     document.getElementById('display_data').innerHTML=JSON.stringify(resumeDetails)
// }

// function savedata(ele,detail)
// {
//     console.log(ele)
//     console.log(detail)
//     if(detail){
//         if(resumeDetails[detail])
//         {
//             resumeDetails[detail]={...resumeDetails[detail]}
//         }
//         else{
//             resumeDetails[detail]={}
//         }
//         resumeDetails[detail][ele.name]=ele.value
//     }
//     resumeDetails[ele.name]=ele.value
//     console.log(resumeDetails)
//     disp()
// }
// function hwmd(p_key,ele)
// {
//     console.log(p_key)
//     console.log(ele)
//     if(!resumeDetails[p_key]){
//         resumeDetails[p_key]=[]
//     }
//     if(ele)
//     {
//         resumeDetails[p_key].push(document.getElementById(ele).value)
//     }
//     if(p_key){

//         resumeDetails[p_key].push(ele_temp);

//     }
//     console.log(resumeDetails)
//     disp()
// }
// function disp(){
//     document.getElementById('showresume').innerHTML=JSON.stringify(resumeDetails)
// }
// function hwmv(ele_v){ 
// ele_temp[ele_v.name]=ele_v.value
// console.log(ele_temp)
// }
// function savedata(ele,detail)
// {
//     if(detail)
//     {
//     if(resumeDetails[detail])
//     {
//         resumeDetails[detail]={...resumeDetails[detail]}
//     }
//     else{
//     resumeDetails[detail]={}
//     }
//     resumeDetails[detail][ele.name]=ele.value
//     }
//     resumeDetails[ele.name]=ele.value
//     console.log(resumeDetails)
//     disp()
// }
// function hwmd(p_key,ele_id,t)
// {
//     if(!resumeDetails[p_key])
//     {
//         resumeDetails[p_key]=[]
//     }
//     if(ele_id)
//     {
//         resumeDetails[p_key].push(document.getElementById(ele_id).value)
//         document.getElementById(ele_id).value=''
//         // showskills(resumeDetails[p_key],ele_id)
//         let s=resumeDetails[p_key]
//         show(p_key,t)
//     }
//     else
//     {
//         resumeDetails[p_key].push(ele_temp)
//         ele_id={}

//     }
//     console.log(resumeDetails)
// //     let skil=''
// //    for(let i=0;i<resumeDetails[p_key].length;i++)
// //    {
// //     let skils =resumeDetails[p_key][i]
// //     skil=skil+`<h5>${skils}<input type='button' value='x' onclick="deletedskil('${p_key}')"></h5>`
// //     }
// //    document.getElementById(t).innerHTML=skil
//     disp()
// }

// function hwmv(ele_id)
// {
//   ele_temp[ele_id.name]=ele_id.value 
//   console.log(ele_temp)
// }
// function disp(){
//     document.getElementById('showresume').innerHTML=JSON.stringify(resumeDetails,undefined,2)
// }
// // function showskills(skill,pkey)
// // {
// //     console.log('skill',skill)
// //     console.log('pkey',pkey)
// //     let show=''
// //     for(let i=0;i<skill.length;i++)
// //     {
// //         let show_id=skill[i]
// //         show=show+`'${show_id}'`
// //         console.log('j',show)
// //     }
// //     document.getElementById('d').innerHTML=show
// // }
// function show(pid,tid)
// {
//     console.log(pid)
//    let dtas='';
//    for(let i=0;i<resumeDetails[pid].length;i++)
//    {
//     // let d=resumeDetails[pid][i]
//     dtas=dtas+`<h6>${resumeDetails[pid][i]}<button onclick="dn('${pid}','${i}')">x</button></h6>`
//    }
//    document.getElementById(tid).innerHTML=dtas
// }
// function dn(indx,idnx)
// {
//     console.log('i',indx)
//     console.log('id',idnx)
//     resumeDetails[indx].splice(idnx,1)
//     console.log(resumeDetails)
//     disp()
// }
// function savedata(ele_id,p_key)
// {
//     if(p_key)
//     {
//         if(resumeDetails[p_key])
//         {
//             resumeDetails[p_key]={...resumeDetails[p_key]}
//         }
//         else{
//             resumeDetails[p_key]={}
//         }
//         resumeDetails[p_key][ele_id.name]=ele_id.value
//     }
//     resumeDetails[ele_id.name]=ele_id.value
//     console.log(resumeDetails)
// }
// function hwmd(oid,eid,dis)
// {
//     console.log(oid,eid)
//     if(!resumeDetails[oid])
//     {
//         resumeDetails[oid]=[]
//     }
//     if(eid)
//     {
//         resumeDetails[oid].push(document.getElementById(eid).value)
//     }
//     console.log(resumeDetails)
// // }
// function savedata(ele,p_key)
// {
//     console.log(p_key)
//     if(p_key)
//     {
//         if(resumeDetails[p_key])
//     {
//         resumeDetails[p_key]={...resumeDetails[p_key]}
//     }
//     resumeDetails[p_key][ele.name]=ele.value
//     }
//     resumeDetails[ele.name]=ele.value;
//     console.log(resumeDetails)
//     disp()
// }
// function hwmd(oid,eid,tid)
// {
//     console.log(oid,eid,tid)
//     if(!resumeDetails[oid])
//     {
//         resumeDetails[oid]=[]
//     }
//     if(eid)
//     {
//         resumeDetails[oid].push(document.getElementById(eid).value)
//    document.getElementById(eid).value='';

//         disp()
//         showsk(oid,tid)
//     }
//     else{
//     resumeDetails[oid].push(ele_temp)
//     ele_temp={}
//     console.log(resumeDetails)
//     showed(oid,tid)
    
//     disp()
//     }
// }
// function showsk(pid,tbl)
// {
//     let ht=''
//     for(i=0;i<resumeDetails[pid].length;i++)
//     {
//         a=resumeDetails[pid][i]
//         console.log(a)
//       ht=ht+`<h6><div id= '${pid[i]}'>${a}<button onclick="del('${pid}','${i}')">x</button></h6>`
     
//     }
//     document.getElementById(tbl).innerHTML=ht
// }
// function disp(){
//     document.getElementById('showresume').innerHTML=JSON.stringify(resumeDetails,undefined,2)
// }
// function del(id,i)
// {
//     console.log('k',resumeDetails[id][i])
//     a=document.getElementById(`${id[i]}`)
//     console.log(a)
//     a.remove()
//     resumeDetails[id].splice(i,1)
//     console.log(resumeDetails)
//     // document.getElementById(a).style.display='null';
//     disp()
// }


// function hwmv(ele)
// {
//     console.log(ele)
//     ele_temp[ele.name]=ele.value
//     console.log(ele_temp)
    
// }
// function showed(ed,ti)
// {
//     console.log(ti)
//     a=resumeDetails[ed]
//     console.log(';',a)
//     data=''
//     for(i=0;i<a.length;i++)
//     {
//         for(let key in a[i])
//         {
//            data=data+`<div id='${ed[i]}'<tr><td>'${key}'${a[i][key]}</td></tr></div>`
//         }
//         data=data+`<button onclick="del('${ed}','${i}')">x</button>`
//     }
//     document.getElementById(ti).innerHTML=data
//     console.log(data)
// // }
// function savedata(e,o){
//     if(o)
//     {
//         if(resumeDetails[o]){
//             resumeDetails[o]={...resumeDetails}
//         }
//         resumeDetails[o]=[]
//     }
//     resumeDetails[e.name]=e.value
//     console.log(resumeDetails)
// }
// function hwmd(oi,ei,t){
//     if(!resumeDetails[oi]){
//         resumeDetails[oi]=[]
//     }
//     if(ei)
//     {
//         resumeDetails[oi].push(document.getElementById(ei).value)
//         document.getElementById(ei).value=''
//         showsk(oi,t)
//     }
//     else{
//         resumeDetails[oi].push(ele_temp)
//         ele_temp={}
//     }
//     console.log(resumeDetails)
//     disp()
// }
// function showsk(oid,ti){
//     console.log(oid,ti)
//     let d=''
//     for(i=0;i<resumeDetails[oid].length;i++)
//     {
//         a=resumeDetails[i]
//         d=d+`<div id='${oid[i]}'>${a}<button onclick=del('${oid}','${i}')>x`
//     }
//     document.getElementById(ti).innerHTML=d

// }
// function del(oi,i){
//     console.log('g',oi,i)
//     resumeDetails[oi].splice(i,1)
//     // a.splice(i,1)
//     console.log(resumeDetails[oi][i])
// }
// function hwmv(e){
//     ele_temp[e.name]=e.value
//     console.log(ele_temp)
// }
// function disp(){
//     document.getElementById('showresume').innerHTML=JSON.stringify(resumeDetails,undefined,2)
// }
// function del(id,i)
//       ht=ht+`<h6><div id= '${pid[i]}'>${a}<button onclick="del('${pid}','${i}')">x</button></h6>`
// {
//     console.log('k',resumeDetails[id][i])
//     a=document.getElementById(`${id[i]}`)
//     console.log(a)
//     a.remove()
//     resumeDetails[id].splice(i,1)
//     console.log(resumeDetails)
//     // document.getElementById(a).style.display='null';
//     disp()
// }

// function hwmd(p_key,ele)
// {
//     if(!resumeDetails[p_key]){
//         resumeDetails[p_key]=[]
//     }
//      if(ele)
//     {
//         resumeDetails[p_key].push(document.getElementById(ele).value)
//     }
//     console.log(resumeDetails)
// }
// function showed(dr,d)
// {
//     let ed=resumeDetails[d]
//     let di=''
//     for(i=0;i<ed.length;i++)
//     {
//         console.log(ed)
//     }
// }
// function savedata(el,pi)
// {
//     console.log(el,pi)
//     if(pi)
//     {
//         if(resumeDetails[pi]){
//             resumeDetails[pi]={...resumeDetails[pi]}
//         }
//         else{
//             resumeDetails[pi]={}
//         }
//         resumeDetails[pi][el.name]=el.value
//     }
//     resumeDetails[el.name]=el.value
//     disp()
//     console.log(resumeDetails)
// }
// function hwmd(oid,eid,tid)
// {
//     console.log(oid,eid,tid)
//     if(!resumeDetails[oid])
//     {
//         resumeDetails[oid]=[]
//     }
//     if(eid)
//     {
//         resumeDetails[oid].push(document.getElementById(eid).value)
//         showsk(oid,tid)
//     }
//     else{
//         resumeDetails[oid].push(ele_temp)
//         se(oid,tid)
//     }
//     console.log(resumeDetails)
//     disp()
// }
//  function hwmv(ele_id)
// {
//   ele_temp[ele_id.name]=ele_id.value 
//   console.log(ele_temp)
// }
// function hwmv(oi)
// {
//     ele_temp[oi.id]=oi.value
//     console.log(ele_temp)
// }
// function showsk(o,t){
// console.log(o,t)
// ht=''
// for(i=0;i<resumeDetails[o].length;i++){
//     ht=ht+`<div id='${o[i]}'>${resumeDetails[o][i]}<button onclick="del('${i}','${o}')">x</button></div>`
// }
// console.log(ht)
// document.getElementById(t).innerHTML=ht
// }
// function del(i,o)
// {
    
//     a=document.getElementById(`${o[i]}`)
//     a.remove()
//     resumeDetails[o].splice(i,1)
//     disp()
//     console.log(resumeDetails)
// }
// function disp(){
//     document.getElementById('showresume').innerHTML=JSON.stringify(resumeDetails,undefined,2)
// }
// function se(o,t)
// {
//     console.log(o,t)
//     a=resumeDetails[o]
//     console.log(a)
//     let dp=''
//     for(i=0;i<a.length;i++){
//         for(keys in a[i])
//         {
//             dp=dp+`<tr><td>'${keys}'${a[i][keys]}`
//         }
//         document.getElementById(t).innerHTML=dp
//     }
// }
// function del(id,i)
// {
//     console.log('k',resumeDetails[id][i])
//     a=document.getElementById(`${id[i]}`)
//     console.log(a)
//     a.remove()
//     resumeDetails[id].splice(i,1)
//     console.log(resumeDetails)
//     // document.getElementById(a).style.display='null';
//     disp()
// }
// -------------------------------------------------------------------
let resumedata=[];
let emp_temp={};
function savedata(ele,ob){
console.log(ele,ob);
  if(ob)
  {
    if(resumedata[ob]){
      resumedata[ob]={...resumedata};
    }
    resumedata[ob]=[];
  }
  resumedata[ele.name]=ele.value;
  console.log(resumedata);
  
}
function hwmd(oid,eid,tid)
{
  // console.log(tid);
  if(!resumedata[oid])
    {
      resumedata[oid]=[];
    }
  if(eid)
  {
   resumedata[oid].push(document.getElementById(eid).value); 
  console.log(resumedata);
    showsk(oid,tid)
    disp()
  }
  else{
    resumedata[oid].push(emp_temp);
    console.log(emp_temp);
    emp_temp={}
    showob(oid,tid)
    console.log(resumedata)
    disp()
  }
  disp()
}

function hwmv(ele)
{
  emp_temp[ele.name]=ele.value;
}
function disp()
{
  document.getElementById('display').innerHTML=JSON.stringify(resumedata,undefined,1);
}
function showsk(o_id,t_id)
{
  console.log("h",o_id)
  let hdata='';
  for(let i=0;i<resumedata[o_id].length;i++)
    {
      a=resumedata[o_id][i];
      console.log(a)
      console.log('a',resumedata[o_id][i]);
      hdata=hdata+`<div id='${o_id[i]}'>${a}<button onclick="del('${o_id}','${i}')">x</button></div>`
    }
  document.getElementById(t_id).innerHTML=hdata;
}
function showob(ob_id,tl_id)
{
  let showobj='';
  console.log(ob_id)
  a=resumedata[ob_id];
  console.log('k',a);
  for(let i=0;i<a.length;i++)
  {
    console.log('l',a[i]);
    for(keys in a[i])
      {
        // console.log(keys,a[i])
        showobj=showobj+`<div id="${ob_id[i]}">'${keys}''${a[i][keys]}<button onclick="del('${ob_id}','${i}')">x</button></div>`
      }
  }
  document.getElementById(tl_id).innerHTML=showobj;
}

function del(ob,i)
{
  resumedata[ob].splice(i,1);
  console.log(resumedata);
  let a=document.getElementById(`${ob[i]}`);
 a.remove() 
}