import React, { useState, useEffect } from 'react';
import axios, { toFormData } from 'axios';
import './App.css';

function ContactusForm() {
  // retrieved data state
  const [finaldata, setFinalData] = useState('');

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [buttonName, setButtonName] = useState('Submit');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const UserData = { Name: name, Contact: mobile, Email: email, Subject: subject, Message: message };

    if (!UserData.Name || !UserData.Contact || !UserData.Email || !UserData.Subject || !UserData.Message) {
      if (!UserData.Name) setNameError('Name is required');
      if (!UserData.Contact) setMobileError('Mobile is required');
      if (!UserData.Email) setEmailError('Email is required');
      if (!UserData.Subject) setSubjectError('Subject is required');
      if (!UserData.Message) setMessageError('Message is required');
      return;
    }
    console.log(UserData)
    // Disable the button during submission
    setButtonDisabled(true);
    setButtonName("Submitting...");

    axios.post('https://script.google.com/macros/s/AKfycbxDdTOGD4ofOmhf5w83D7e3ZgInK3k3y_lUJOA3gSH5LUEjS9y-BHumxS3sL0FWGFWj/exec', toFormData(UserData))
      .then((response) => {
        console.log(response);
        setFinalData(response.data);
        setName('');
        setMobile('');
        setEmail('');
        setSubject('');
        setMessage('');
        setButtonName('Submitted');
      })
      .catch((err) => {
        console.log(err)
      })
      
  };
  
  useEffect(() => {
    setTimeout(() => {
      setFinalData('');
      setButtonDisabled(false);
      setButtonName('Submit');
    }, 5000)
  }, [finaldata])

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setMobileError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setSubjectError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError('');
  };

  return (
    <div className="container">
      <br />
      <h1>Save Form Data in Google Sheets using React</h1>
      <h2 style={{ color: 'green' }}>{finaldata}</h2>
      <br />
      <form className='form-group' onSubmit={handleSubmit}>
        <label>Full Name:-</label>
        <input
          type='text'
          className='form-control mt-2'
          // required
          placeholder='Enter your name'
          onChange={handleNameChange}
          value={name}
        />
        {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
        <br />
        <label>Mobile No:-</label>
        <input
          type='tel'
          className='form-control mt-2'
          // required
          placeholder='Enter your mobile no'
          onChange={handleMobileChange}
          value={mobile}
        />
        {mobileError && <span style={{ color: 'red' }}>{mobileError}</span>}
        <br />
        <label>Email Address:-</label>
        <input
          type='email'
          className='form-control mt-2'
          // required
          placeholder='Enter your email'
          onChange={handleEmailChange}
          value={email}
        />
        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        <br />
        <label>Subject:-</label>
        <select
          className='form-control mt-2'
          // required
          value={subject}
          onChange={handleSubjectChange}
        >
          <option disabled value="">
            Please select a subject
          </option>
          <option value="Design quote">Design quote</option>
          <option value="Payment and purchase">Payment and purchase</option>
          <option value="Other">Other</option>
        </select>
        {subjectError && <span style={{ color: 'red' }}>{subjectError}</span>}
        <br />
        <label>Message:-</label>
        <input
          type='text'
          className='form-control py-4 mt-2'
          // required
          placeholder='Enter your Subject'
          onChange={handleMessageChange}
          value={message}
        />
        {messageError && <span style={{ color: 'red' }}>{messageError}</span>}
        <div style={{ display: "flex", justifyContent: 'flex' }}>
          <button type='submit' name='btn' className=' border px-5 py-3 text-white  border rounded my-5' disabled={buttonDisabled}>{buttonName}</button>
        </div>
      </form>
    </div>
  );
}

export default ContactusForm;
