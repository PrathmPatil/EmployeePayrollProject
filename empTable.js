window.onload=function(){
    $(document).ready(function(){
        $.get("http://localhost:3000/Employee",function(data){
            for(let i of data){
                // console.log(i)
                let department=JSON.parse(i.department);
                // console.log(department)
                let tr=`
                <tr>
                <td><img style="height:20px;width:20px;cursor:pointer" src="${i.profileImage}"
                alt=""></td>
                <td>${i.name}</td>
                <td>${i.gender}</td>
                <td>${department.map((department)=>{
                    return `<span>${department}</span>`
                })}</td>
                <td>${i.salary}</td>
                <td>${i.date}</td>
                <td>
                    <img style="height:15px;width:15px;cursor:pointer" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png">
                    <img style="height:15px;width:15px;cursor:pointer" src="https://cdn-icons-png.flaticon.com/512/61/61456.png">
                </td>
                </tr>`
                $(".table-body").append(tr)
            }
        })
    })
}
