'use strict';

const adviceBtn = document.getElementById('advice_btn');
let advice = document.getElementById('advice');
let adviceNum = document.getElementById('advice_num');

adviceBtn.addEventListener('click', function () {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceObj = adviceData.slip;
      console.log(adviceObj);
      advice.innerHTML = '"' + adviceObj.advice + '"';
      adviceNum.innerHTML = 'ADVICE #' + adviceObj.id;
    })
    .catch((error) => {
      console.log(error);
    });
});
