import React from 'react';

const ResultComponent = () => {
  const copyToClipboard = () => {
    const kekkaText = Array.from(document.getElementsByClassName('form-control')).map((control, index) => {
      const paramLabels = ['顔', '楽しさ', '頭', '価値観', '情緒'];
      return paramLabels[index] + control.value;
    });

    navigator.clipboard.writeText(kekkaText.join("\n"))
      .then(function () {
        window.alert("テキストがクリップボードにコピーされました:\n" + kekkaText.join("\n"));
      })
      .catch(function (error) {
        window.alert("テキストのコピーに失敗しました: " + error);
      });
  };

  const handleResultClick = (event) => {
    event.preventDefault();
    copyToClipboard();
  };

  return (
    <div className="text-center">
      <button type="button" id="resultButton" className="btn btn-primary" onClick={handleResultClick}>
        コピー
      </button>
    </div>
  );
};

export default ResultComponent;
