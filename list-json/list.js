'use strict';

let textJson = document.querySelector(".add-json");

function submitForm(event){

    event.preventDefault(); //чтобы при отправке формы не перезагружалась страница
    let text = JSON.stringify($('form').serializeArray()); //формирование JSON-структуры из данных формы
    textJson.textContent = text; //выводим данные в пустой параграф под формой

//   2.6 Форма должна отправлять асинхронный GET-запрос к абстрактному
//   обработчику на том же сервере (в той же папке). В случае, если данные
//   дошли, надо получать ответ. Можно выводить его через alert.

//   Запрос отправляется к рандомному API вместо абстрактного обработчика на сервере

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://some-random-api.ml/facts/dog", true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            alert("Ответ с сервера: " + xhr.responseText);
        } else {
            console.error(xhr.statusText);
        }
    }
    };
    xhr.onerror = function (e) {
    console.error(xhr.statusText);
    };
    xhr.send(null);
}

  

