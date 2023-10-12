$.ajax(
    {
        type:"GET",
        url:'https://jsonplaceholder.typicode.com/posts/',
        data:{},
        success:function(d){
            console.log('s',d);
            console.log('length',d.length);
             let hdata='';
            for(let i=0;i<d.length;i++)
            {
                // console.log(`${data[i].id}`)
                hdata=hdata+`<tr>
                <td>${d[i].userId}</td>
                <td>${d[i].id}</td>
                <td><button type="button" onclick="showid('${d[i].id}')">${d[i].title}</td></button>`
                               
            }
             document.getElementById('tbody_data').innerHTML=hdata
        },
        error:function(err){
            console.log("e",err)
        }
    }
)

function showid(a)
{
    console.log(a)
    $.ajax(
        {
            type:"GET",
            url:`https://jsonplaceholder.typicode.com/posts/${a}`,
            success:function(datas){
                console.log(datas)
            }

        }
    )
}

function checkAjax()
{
    $('#head_ajax').hide();
}
function adddata()
{
    $.ajax(
        {
            type:'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            data:{userid:'E32',id:'1',title:"welcome"},
            success:function(nd){
                console.log(nd)
            },
            error:function(e){
                console.log(e)
            }
        }
    )
}