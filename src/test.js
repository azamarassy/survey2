// const init = () => {
//     document.getElementById('js-question').textContent = "女選びゲーム";
    
//     let koumoku = ['顔 : ', '楽しさ : ', '頭 : ', '価値観 : ', '情緒 : '];
//     let i = 0;
//     while(i < 5){
//     document.getElementsByTagName('label')[i].textContent = koumoku[i];
//     i ++;
//     }
    
//     document.getElementById("copyButton").style.display = "none";
//     document.getElementById("resetButton").style.display = "none";
//   }
  
//   init();
  
  
  
  
//   function isValidNumber(value) {
//     const numericValue = Number(value); 
  
    
    
//     return Number.isInteger(numericValue) && numericValue >= 1 && numericValue <= 50;
    
//   }
  
  
//   function restrictInputToNumbers(evt) {
//     const inputElement = evt.target; 
    
    
    
//     const inputValue = inputElement.value.trim(); 
  
//     if (inputValue === '') return; 
  
    
    
//     if (!isValidNumber(inputValue)) {
//       inputElement.value = ''; 
//     }
//   }
  
  
  
//   function calculateInput() {
//     const formControls = document.getElementsByClassName('form-control');
//     let input = 0;
//     for (let i = 0; i < 5; i++) {
//       input += Number(formControls[i].value);
//     }
//     return input;
//   }
  
//   function getValue(event) {
//     event.preventDefault(); 
    
//     const formControls = document.getElementsByClassName('form-control');
//     for (let i = 0; i < formControls.length; i++) {
//       if (!isValidNumber(formControls[i].value)) {
//         formControls[i].value = '';
//       }
//     }
  
//     let input = calculateInput();
//     let output = 125 - input;
//     document.getElementById('leftPt').textContent = output;
//   }
  
  
  
//   function showText() {
//     let input = calculateInput();
//     let output = 125 - input;
  
//     if (output !== 0) {
//       alert("合計値が0でありません。");
//       return;
//     }
  
//     const formControls = document.getElementsByClassName('form-control');
//     let kekkaText = [
//       '顔' + formControls[0].value,
//       '楽しさ' + formControls[1].value,
//       '頭' + formControls[2].value,
//       '価値観' + formControls[3].value,
//       '情緒' + formControls[4].value
//     ];
  
//     for (let i = 0; i < 5; i++) {
//       document.getElementsByClassName('kekka')[i].textContent = kekkaText[i];
//     }
  
    
//     document.getElementById("copyButton").style.display = "block";
//     document.getElementById("resetButton").style.display = "block";
//   }
  
  
  
//   function copyToClipboard() {
//     let $form = Array.from(document.getElementsByClassName('form-control'));
//     let kekkaText = [
//       '顔' + $form[0].value,
//       '楽しさ' + $form[1].value,
//       '頭' + $form[2].value,
//       '価値観' + $form[3].value,
//       '情緒' + $form[4].value
//     ];
   
//     navigator.clipboard.writeText(kekkaText)
//       .then(function() {
        
//         window.alert("テキストがクリップボードにコピーされました: " + kekkaText);
//       })
//       .catch(function(error) {
        
//         window.alert("テキストのコピーに失敗しました: " + error);
//       });
//   }
  
  
//   document.addEventListener('DOMContentLoaded', function() {
    
//     const formControls = document.getElementsByClassName('form-control');
//     for (let i = 0; i < formControls.length; i++) {
      
//       formControls[i].addEventListener('input', restrictInputToNumbers);
//     }
  
    
//     const submitButtons = document.getElementsByClassName('submitButton');
//     for (let i = 0; i < submitButtons.length; i++) {
//       submitButtons[i].addEventListener('click', getValue);
//     }
    
//     const clearButtons = document.getElementsByClassName('clearButton');
//     for (let i = 0; i < clearButtons.length; i++) {
//       clearButtons[i].addEventListener('click', function(event) {
//         event.preventDefault(); 
//         clearForm(i);
//       });
//     }
  
    
//     const $decideButton = document.getElementById('decideButton');
//     $decideButton.addEventListener('click', function(event) {
//       event.preventDefault(); 
//       showText();
//     });
  
    
//     const $copyButton = document.getElementById('copyButton');
//     $copyButton.addEventListener('click', function(event) {
//       event.preventDefault(); 
//       copyToClipboard();
//     });
  
  
    
//     const $resetButton = document.getElementById('resetButton');
//     $resetButton.addEventListener('click', function(event) {
//       event.preventDefault(); 
//       resetPage();
//     });
  
  
//   });
  
  
//   function clearForm(i) {
//     document.getElementsByClassName('form-control')[i].value = "";
//   }
  
  
  
//   function resetPage() {
  
    
//     for (let i = 0; i < 5; i++) {
//       document.getElementsByClassName('kekka')[i].textContent = "";
//     }
  
    
//     document.getElementById('leftPt').textContent = "125";
  
    
//     for (let i = 0; i < document.getElementsByClassName('clearButton').length; i++) {
//          clearForm(i);
//       };
  
    
//      document.getElementById("copyButton").style.display = "none";
//      document.getElementById("resetButton").style.display = "none";
//   }