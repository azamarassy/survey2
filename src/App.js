import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './form'; // 相対パスを適切に指定する
import DecideComponent from './decideButton';
import ResultComponent from './resultButton';
// import ResetComponent from './resetButton';


const App = () => {

//--------------------------------------------------------------------------------------------------------------------

//app.jsに書いてあった処理

const [displayText, setDisplayText] = useState(['', '', '', '', '']);
const [leftPt, setLeftPt] = useState(125);

// const [isResultButtonVisible, setIsResultButtonVisible] = useState(false);
// const [isResetButtonVisible, setIsResetButtonVisible] = useState(false);

useEffect(() => {
  // 初期設定の処理を行う
  setting();
}, []);

  //ページを開いた時の処理
  const setting = () => {
    document.getElementById('js-question').textContent = "女選びゲーム";

    let koumoku = ['顔 : 体型なども含む(服装は含みません) ', '楽しさ : 会話や遊んだときの楽しさ', '頭 : 理解力,記憶力,柔軟性など', '価値観 : 金銭感覚や共通の知識など', '情緒 : キレやすさや動揺しやすさなど'];
    let i = 0;
    while (i < 5) {
      document.getElementsByTagName('label')[i].textContent = koumoku[i];
      i++;
    }

    document.getElementById("resultButton").style.display = "none";
    document.getElementById("resetButton").style.display = "none";
  };

  //------------------------------------------------------------------------------------------------------------
  //フォームの入力に関する処理

  // const isValidNumber = (value) => {
  //   const numericValue = Number(value);
  //   return Number.isInteger(numericValue) && numericValue >= 1 && numericValue <= 50;
  // };

  // const restrictInputToNumbers = (evt) => {
  //   const inputElement = evt.target;
  //   const inputValue = inputElement.value.trim();

  //   if (inputValue === '') return;

  //   if (!isValidNumber(inputValue)) {
  //     inputElement.value = '';
  //   }
  // };



  //--------------------------------------------------------------------------------

  // const getValue = (event) => {
  //   event.preventDefault();

  //   const formControls = document.getElementsByClassName('form-control');
  //   for (let i = 0; i < formControls.length; i++) {
  //     if (!isValidNumber(formControls[i].value)) {
  //       formControls[i].value = '';
  //     }
  //   }

  //   let input = calculateInput();
  //   let output = 125 - input;
  //   document.getElementById('leftPt').textContent = output;
  // };

  //-----------------------------------------------------------------------------------------
  //確定ボタンを押して結果テキストを表示
  // const calculateInput = () => {
  //   const formControls = document.getElementsByClassName('form-control');
  //   let input = 0;
  //   for (let i = 0; i < 5; i++) {
  //     input += Number(formControls[i].value);
  //   }
  //   return input;
  // };

  // const showText = () => {
  //   let input = calculateInput();
  //   let output = 125 - input;

  //   if (output !== 0) {
  //     alert("合計値が0でありません。");
  //     return;
  //   }

  //   const formControls = document.getElementsByClassName('form-control');
  //   const paramLabels = ['顔', '楽しさ', '頭', '価値観', '情緒'];
  //   const kekkaText = Array.from(formControls).map((control, index) => paramLabels[index] + control.value);
    

  //   for (let i = 0; i < 5; i++) {
  //     document.getElementsByClassName('kekka')[i].textContent = kekkaText[i];
  //   }

  //   document.getElementById("copyButton").style.display = "block";
  //   document.getElementById("resetButton").style.display = "block";
  // };

  //-------------------------------------------------------------------------------------------------------------
  //クリップボードにコピーする処理→後々結果をサーバーに送信する処理に変更予定

  // const copyToClipboard = () => {
  //   const kekkaText = Array.from(document.getElementsByClassName('form-control')).map((control, index) => {
  //     const paramLabels = ['顔', '楽しさ', '頭', '価値観', '情緒'];
  //     return paramLabels[index] + control.value;
  //   });
    

  //   navigator.clipboard.writeText(kekkaText.join("\n"))
  //     .then(function () {
  //       window.alert("テキストがクリップボードにコピーされました:\n" + kekkaText.join("\n"));
  //     })
  //     .catch(function (error) {
  //       window.alert("テキストのコピーに失敗しました: " + error);
  //     });
  // };

  //-------------------------------------------------------------------------------------------------------------
  //各フォームの内容を消す処理

  // const clearForm = (i) => {
  //   document.getElementsByClassName('form-control')[i].value = "";
  // };

  //-------------------------------------------------------------------------------------------------------------
  //ページ全体をリセットする処理

  // const resetPage = () => {
  //   for (let i = 0; i < 5; i++) {
  //     document.getElementsByClassName('kekka')[i].textContent = "";
  //   }

  //   document.getElementById('leftPt').textContent = "125";

  //   // for (let i = 0; i < document.getElementsByClassName('clearButton').length; i++) {
  //   //   clearForm(event, i);
  //   // }

  //   document.getElementById("copyButton").style.display = "none";
  //   document.getElementById("resetButton").style.display = "none";
  // };

  //--------------------------------------------------------------------------------------------

  const handleResetClick = () => {
    // リセットボタンがクリックされたときに呼ばれる関数
    setting();
    setDisplayText(['', '', '', '', '']);
    setLeftPt(125);

    //確定ボタンを押して出てきたテキストを非表示にする処理
    //フォームの中身をリセットする処理

    for (let i = 0; i < 5; i++) {
      document.getElementsByClassName('kekka')[i].textContent = "";
    }

    document.getElementById('leftPt').textContent = "125";
    
    const clearForm = (i) => {
      const formControls = document.getElementsByClassName('form-control');
      formControls[i].value = "";
    };

    for (let i = 0; i < document.getElementsByClassName('clearButton').length; i++) {
        clearForm(i);
    }
  };

  //-------------------------------------------------------------------------------------------------------------
  //イベントリスナー追加

  // const formControls = document.getElementsByClassName('form-control');
  // for (let i = 0; i < formControls.length; i++) {
  //   formControls[i].addEventListener('input', restrictInputToNumbers);
  // }

  // const submitButtons = document.getElementsByClassName('submitButton');
  // for (let i = 0; i < submitButtons.length; i++) {
  //   submitButtons[i].addEventListener('click', getValue);
  // }

  // const clearButtons = document.getElementsByClassName('clearButton');
  // for (let i = 0; i < clearButtons.length; i++) {
  //   clearButtons[i].addEventListener('click', function (event) {
  //     event.preventDefault();
  //     clearForm(i);
  //   });
  // }

  // const $decideButton = document.getElementById('decideButton');
  // $decideButton.addEventListener('click', function (event) {
  //   event.preventDefault();
  //   showText();
  // });

  // const $copyButton = document.getElementById('copyButton');
  // $copyButton.addEventListener('click', function (event) {
  //   event.preventDefault();
  //   copyToClipboard();
  // });

  // const $resetButton = document.getElementById('resetButton');
  // $resetButton.addEventListener('click', function (event) {
  //   event.preventDefault();
  //   resetPage();
  // });

  //-------------------------------------------------------------------------------------------------------------

  //今の状態だと一度ボタンをクリックしたときに複数回アラートが出る(Reactのコンポーネントが複数回レンダリングされている可能性がある)
  //なのでReactコンポーネントのイベントハンドラーを使ってイベントを管理できるようにする必要がある

//--------------------------------------------------------------------------------------------------------------------

  return (
    <div className="container">
      <div id="js-question" className="mt-3 alert alert-primary" role="alert" style={{ fontSize: '25px' }}>
        A simple primary alert—check it out!
      </div>

      <div className="card-deck">
        <div className="card">
          <div className="card-header">
            <h1 id="1pName" style={{ fontSize: '30px' }}>女のパラメータ</h1>
          </div>

          <p style={{ fontSize: '20px' }} className="ms-2 mt-2 ml-4">残りポイントが0になるように1~50の数字を入力してください。</p>
          <p style={{ fontSize: '20px' }} className="ms-2 ml-4">各パラメータは50人中の順位を表しており、1に近づくほど自分の理想に近づきます。</p>
          <p style={{ fontSize: '20px' }} className="ms-2 ml-4">例えば、顔 : 1ptにすると、50人中1位の顔になります。</p>

          <FormComponent />

          <dl className="row">
            <dt style={{ fontSize: '25px' }} className="ms-2 mt-1 ml-3 col-4">残りポイント</dt>
            <dd style={{ fontSize: '25px' }} className="ms-2 mt-1 ml-8 " id="leftPt">{leftPt}</dd>
          </dl>

          <DecideComponent />

          <div id="displayText" className="my-3 ml-3 col-4">
            {displayText.map((text, index) => (
              <p key={index} className="kekka">{text}</p>
            ))}
          </div>

          <ResultComponent />
          {/* <ResetComponent /> */}
          <button type="button" className="ms-1 my-1 btn btn-primary" id="resetButton" onClick={handleResetClick}>
             リセット
          </button>


        </div>
      </div>
    </div>
  );
};

export default App;
// export const setting = () => {
//   // setting 関数の中身
// };

// export const setDisplayText = (text) => {
//   // setDisplayText 関数の中身
// };

// export const setLeftPt = (value) => {
//   // setLeftPt 関数の中身
// };