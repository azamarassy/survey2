import React from 'react';

const DecideComponent = () => {
  const calculateInput = () => {
    const formControls = document.getElementsByClassName('form-control');
    let input = 0;
    for (let i = 0; i < 5; i++) {
      input += Number(formControls[i].value);
    }
    return input;
  };

  const showText = () => {
    let input = calculateInput();
    let output = 125 - input;

    if (output !== 0) {
      alert("合計値が0でありません。");
      return;
    }

    const formControls = document.getElementsByClassName('form-control');
    const paramLabels = ['顔', '楽しさ', '頭', '価値観', '情緒'];
    const kekkaText = Array.from(formControls).map((control, index) => paramLabels[index] + control.value);

    for (let i = 0; i < 5; i++) {
      document.getElementsByClassName('kekka')[i].textContent = kekkaText[i];
    }

    document.getElementById("resultButton").style.display = "block";
    document.getElementById("resetButton").style.display = "block";
    
  };

  const handleDecideClick = (event) => {
    event.preventDefault();
    showText();
  };

  //----------------------------------------------------------------------------------------------------


//   const calculateInput = () => {
//     const formControls = document.getElementsByClassName('form-control');
//     let input = 0;
//     for (let i = 0; i < 5; i++) {
//       input += Number(formControls[i].value);
//     }
//     return input;
//   };

//   const showText = () => {
//     let input = calculateInput();
//     let output = 125 - input;

//     if (output !== 0) {
//       alert("合計値が0でありません。");
//       return;
//     }

//     const formControls = document.getElementsByClassName('form-control');
//     const paramLabels = ['顔', '楽しさ', '頭', '価値観', '情緒'];
//     const kekkaText = Array.from(formControls).map((control, index) => paramLabels[index] + control.value);

//     for (let i = 0; i < 5; i++) {
//       document.getElementsByClassName('kekka')[i].textContent = kekkaText[i];
//     }

//   };

//   const handleDecideClick = (event) => {
//     event.preventDefault();
//     showText();
//   };

  //----------------------------------------------------------------------------------------------------

  return (
    <div className="text-center">
        <button type="button" id="decideButton" className="btn btn-primary" onClick={handleDecideClick}>
          確定
        </button>
    </div>

    
  );
};

export default DecideComponent;
