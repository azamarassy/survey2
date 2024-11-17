// import React from 'react';
// import { setting, setDisplayText, setLeftPt } from './App';

// const ResetComponent = () => {
//   const handleResetClick = () => {
//     setting();
//     setDisplayText(['', '', '', '', '']);
//     setLeftPt(125);

//     for (let i = 0; i < 5; i++) {
//       document.getElementsByClassName('kekka')[i].textContent = "";
//     }

//     document.getElementById('leftPt').textContent = "125";

//     const clearForm = (i) => {
//       const formControls = document.getElementsByClassName('form-control');
//       formControls[i].value = "";
//     };

//     for (let i = 0; i < document.getElementsByClassName('clearButton').length; i++) {
//       clearForm(i);
//     }
//   };

//   return (
//     <button type="button" className="ms-1 my-1 btn btn-primary" onClick={handleResetClick}>
//       リセット
//     </button>
//   );
// };

// export default ResetComponent;
