'use strict';

let textJson = document.querySelector(".add-json");

function submitForm(event){
    event.preventDefault();
    let text = JSON.stringify($('form').serializeArray());
    textJson.textContent = text;
    // $.ajax({
    //     type: "GET",
    //     url: "server.php",
    //     success: function(){
    //       alert("t");
    //     },
    //   });
  }


