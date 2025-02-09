getAllEmployee();
function saveEmployee(){

    let name=$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let mobile=$('#exampleFormControlInput4').val();

    console.log(typeof jQuery);//used to check jquery is ok

    $.ajax( {
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/saveEmployee",
        async:true,
        data:JSON.stringify({
            "empID":0,
            "empName":name,
            "address":address,
            "mobile":mobile
        }),
        success:function (data){
            alert("saved")
            getAllEmployee();
        },
        error:function (xhr, exception){
            alert("error")
        }
    })
}

function updateEmployee(){

    let empID=$('#exampleFormControlInput1').val();
    let name=$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let mobile=$('#exampleFormControlInput4').val();



    $.ajax( {
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/updateEmployee",
        async:true,
        data:JSON.stringify({
            "empID":empID,
            "empName":name,
            "address":address,
            "mobile":mobile
        }),
        success:function (data){
            alert("updated")
            getAllEmployee();
        },
        error:function (xhr, exception){
            alert("error")
        }
    })
}

function deleteEmployee(){

    let empID=$('#exampleFormControlInput1').val();




    $.ajax( {
        method:"DELETE",
        url:"http://localhost:8080/api/v1/employee/deleteEmployee/"+empID,
        async:true,

        success:function (data){
            alert("deleted")
            getAllEmployee();
        },
        error:function (xhr, exception){
            alert("error")
        }
    })
}

function getAllEmployee(){

    $.ajax( {
        method:"GET",
        url:"http://localhost:8080/api/v1/employee/getAllEmployees",
        async:true,

        success:function (data){
            if (data.code === "00"){
                $('#empTable').empty();
                for(let emp of data.content){
                    let empID = emp.empID
                    let name = emp.empName
                    let address = emp.address
                    let mobile = emp.mobile

                    var row=` <tr><td>${empID}</td> <td>${name}</td> <td>${address}</td> <td>${mobile}</td></tr>`;
                    $('#empTable').append(row);
                }
            }
        },
        error:function (xhr, exception){
            alert("error")
        }
    })
}

$(document).ready(function (){
    $(document).on('click','#empTable tr',function(){
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);
    })
})