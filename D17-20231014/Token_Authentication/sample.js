function store_data()
{
    let u_name=$('#name').val()
    let u_mail=$('#mail').val()
    let userpassword=$('#password').val()
    $.ajax(
        {
            type:"POST",
            url:'http://agaram.academy/api/action.php',
            data:
            {
                request:"create_candidate",
                name:u_name,
                mail:u_mail,
                password:userpassword

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

// function loged()
// {
    
// $.ajax({
//     type:"POST",
//     url:"http://agaram.academy/api/action.php",
//     data:
//     {
//         request:"candidate_login",
//         email:$('#mail').val(),
//         password:$('#password').val(),
//     },
//     success:function(successed_login)
//     {
//         console.log("Success",JSON.parse(successed_login))
//     },
//     error:function(error_msg_login)
//     {
//         console.log(error_msg_login)
//     }
// })
// }

function login(){
    
    $.ajax({
    
        type: 'Post',
        url:'http://agaram.academy/api/action.php',
        data :
    {
    request : "candidate_login",
    mail : $('#mail').val(),
    password : $('#password').val(),
    },
    success: function(detail){
        console.log('log',JSON.parse(detail))
    },
    error: function(error){
        console.log(error)
    }
    
    })
    
        
    }
    
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

