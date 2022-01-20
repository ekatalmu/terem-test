'use strict';

window.onload = () => {
//делать, чтобы при нажатии кнопки
//"Кнопка 1" скрывался блок с заголовком. При повторном нажатии блок
//должен появляться.
let buttonOne = document.querySelector('.btn-warning');
let h1Block = document.querySelector('.test-grid__top');



buttonOne.addEventListener('click', (event) =>{
    if(h1Block.classList.contains('noDisplay')){
        h1Block.classList.remove('noDisplay')
    }else{
        h1Block.classList.add('noDisplay')
    }
});

// 2.2 При нажатии кнопки "Кнопка 2" средний блок во втором ряду должен
// меняться местами с левым блоком. При повторном нажатии - возвращаться
// на прежнее место.
let buttonTwo = document.querySelector('.btn-success');
let leftMidBlock = document.querySelector('.test-grid__middle-1');
let midMidBlock = document.querySelector('.test-grid__middle-2');

buttonTwo.addEventListener('click', (event)=>{
//извиняюсь, через element.style.order = "2" получалось лишь поменять средний блок с левым, но не обратно
//для быстрого решения пришлось наплодить классы
    if (leftMidBlock.classList.contains('order-2')){
        leftMidBlock.classList.remove('order-2');
        leftMidBlock.classList.add('order-3');
        midMidBlock.classList.remove('order-3')
        midMidBlock.classList.add('order-2')
    }else{
        leftMidBlock.classList.remove('order-3');
        leftMidBlock.classList.add('order-2');
        midMidBlock.classList.remove('order-2')
        midMidBlock.classList.add('order-3')
    }
})
}

