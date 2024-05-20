import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ContactusForm from "./ContactForm";
function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <ContactusForm />
      </div>
    </div>
  );
}

export default App;
// getting data function
//   const getData = () => {
//     axios.get(' https://script.google.com/macros/s/AKfycbxDdTOGD4ofOmhf5w83D7e3ZgInK3k3y_lUJOA3gSH5LUEjS9y-BHumxS3sL0FWGFWj/exec').then((response) => {
//       console.log(response);
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }
