function store_data()
{
    let u_name=$('#name').val()
    let u_mail=$('#mail').val()
    let userpassword=$('#password').val()
    let u_pincode=$('#pin_code').val()
    let u_aadhar=$('#aadhar_no').val()
    let u_phone=$('#cell').val()
    let u_area=$('#area').val()
    let u_city=$('#city').val()
    let u_address=$('#address').val()
    $.ajax(
        {
            type:"POST",
            url:'http://agaram.academy/api/action.php',
            data:
            {
                request:"create_candidate",
                name:u_name,
                email:u_mail,
                password:userpassword,
                city:u_city,
                phone:u_phone,
                area:u_area,
                pin:u_pincode,
                aadhar:u_aadhar,
                address:u_address
            },
            success:function(su)
            {
                console.log(su)
            },
            error:function(er)
            {
                console.log(er)
            }
        }
    )
}
function go_log()
{
    window.location="sample_login.html";
}
function login()
{
    
    $.ajax({
    type:"POST",
    url:"http://agaram.academy/api/action.php",
    data:
    {
        request: "candidate_login",
        mail: $('#mail').val(),
        password :$('#password').val(),
    },
    success:function(successed_login)
    {
        console.log("Success",JSON.parse(successed_login))
    },
    error:function(error_msg_login)
    {
        console.log(error_msg_login)
    }
})
}

// function login(){
    
//     $.ajax({
    
//         type: 'Post',
//         url:'http://agaram.academy/api/action.php',
//         data :
//     {
//     request : "candidate_login",
//     mail : $('#mail').val(),
//     password : $('#password').val(),
//     },
//     success: function(detail){
//         console.log('log',JSON.parse(detail))
//     },
//     error: function(error){
//         console.log(error)
//     }
    
//     })
    
        
//     }
    
function get_all_data()
{ 
    $.ajax({
        type:"GET",
    url:"http://agaram.academy/api/action.php",

        data:
        {
            request:"getAllMembers"
        },
        success:function(get_data)
        {
            console.log(get_data)
        },
        error:function(err_data)
        {
            console.log(err_data)
        }
    })
}

function disp_all_data()
{ 
    $.ajax({
        type:"GET",
    url:"http://agaram.academy/api/action.php",

        data:
        {
            request:"getAllMembers"
        },
        success:function(get_data)
        {
            console.log(get_data)
            let disp=JSON.parse(get_data)
            // console.log(disp.data.length)
            let disp_data=''
            for(let i=0;i<disp.data.length;i++)
            {
                disp_data=disp_data+`<tr>
                <td>'${disp.data[i].id}'</td>
                <td>'${disp.data[i].name}'</td>
                <td>'${disp.data[i].email}'</td>
                <td>'${disp.data[i].pin}'</td>
                <td>'${disp.data[i].aadhar}'</td>
                <td>'${disp.data[i].address}'</td>
                <td>'${disp.data[i].phone}'</td>
                <td>'${disp.data[i].city}'</td>
                <td>'${disp.data[i].area}'</td>


                </tr>`
            }
            document.getElementById('t_body').innerHTML=disp_data
        },
        error:function(err_data)
        {
            console.log(err_data)
        }
    })
}