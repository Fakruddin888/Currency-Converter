const select=document.querySelectorAll(".currency");
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const result =document.getElementById('result');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
    // alert(`10 GBP = ${data.rates.USD} USD`);
    const entries = Object.entries(data);
    for(i=0;i<entries.length;i++){
      select[0].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });
  function converter(){
    var input_field = input.value;
    if(select[0].value != select[1].value){
      const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${input.value}&from=${select[0].value}&to=${select[1].value}`)
  .then(val => val.json())
  .then((val) => {
    // alert(`10 GBP = ${data.rates.USD} USD`);
    result.value = Object.values(val.rates)[0]
  });
    }else{
      console.log("please select two different value")
    }
  }