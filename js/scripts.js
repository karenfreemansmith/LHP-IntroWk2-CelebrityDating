$(document).ready(function() {
  $("#aboutYou form").submit(function(event) {
    event.preventDefault();
    var genderInput = $("select#gender").val();
    var interestInput = $("select#interest").val();
    /*
    if(genderInput==="m") {
      $(".female").remove();
    } else {
      $(".male").remove();
    }
    */
    if(interestInput==="movies") {
      if(genderInput==="m") {
        alert("you should date Keanu Reeves");
      } else {
        alert("you should date Mindy Kaling");
      }
    }
    if(interestInput==="comedy") {
      if(genderInput==="m") {
        alert("you should date Mark Lowry");
      } else {
        alert("you should date Nashim Pedrad");
      }
    }
    if(interestInput==="music") {
      if(genderInput==="m") {
        alert("you should date Justin Bieber");
      } else {
        alert("you should date Connie Britton");
      }
    }
    if(interestInput==="politics") {
      if(genderInput==="m") {
        alert("you should date Prince Henry");
      } else {
        alert("you should date Yulia Tymoshenko");
      }
    }
    if(interestInput==="religion") {
      if(genderInput==="m") {
        alert("you should date Tim LaHaye");
      } else {
        alert("you should date Mary Ann Glendon");
      }
    }
    if(interestInput==="sports") {
      if(genderInput==="m") {
        alert("you should date Denis Kapustin");
      } else {
        alert("you should date Morgan Pressel");
      }
    }
    if(interestInput==="business") {
      if(genderInput==="m") {
        alert("you should date Sergey Brin");
      } else {
        alert("you should date Bridget Van Kralingen");
      }
    }
  });
});
