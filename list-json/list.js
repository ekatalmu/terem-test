'use strict';

function submitForm(event){
    event.preventDefault();
    console.log(JSON.stringify($('form').serializeArray()))
  }


// var formData = new FormData(document.querySelector('.form'))
// console.log(formData);

// var formData = new FormData(form);
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');

// // Display the values
// for (var value of formData.values()) {
//    console.log(value);
// }

// // console.log(form[0].name);
// // console.log(form[1].value);


// for (let i = 0; i < form.length; i++){
//     formData.append(form[i].name, form[i].value);
// }

// console.log(formData);



// function submitForm(event){
//     console.log(event.target.elements.Option.value)
//     return false;
//   }

// let a = {   
// };


// for(values){
//     a[name] = value
// };

// json.stringify(a);
    


// let b = {
//     "foo": "1",
//     "bar": "xxx",
//     "this": "hi"
// }

// console.log(JSON.stringify(b));





