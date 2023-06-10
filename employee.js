$(document).ready(() => {
    $("#my_Form").submit(function (event) {
      event.preventDefault();
      let name = $("#get_name").val();
      let get_Profile = $("input[name='profile']:checked").val();
      let get_Gender = $("input[name='gender']:checked").val();
      let departments = [];
       $("input[name='department']:checked").each(
        function () {
          departments.push($(this).val());
        }
      );
      let get_Salary = $("#s_select").val();
      let get_Day = $("#day").val();
      let get_Month = $("#month").val();
      let get_Year = $("#year").val();
      let get_Note = $("#notes").val();

      let obj = {
        name: name,
        profileImage: get_Profile,
        gender: get_Gender,
        department: JSON.stringify(departments),
        salary: get_Salary,
        date: get_Day + "/" + get_Month + "/" + get_Year,
        note: get_Note,
      };
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/Employee",
        data: obj,
        success: function () {
            alert("data posted succesfully");
        },
        error: function () {
            alert("error in posting");
        },
    });
   
    });
    
  });