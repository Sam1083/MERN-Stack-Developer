import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      toast('no', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const sub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    // This useEffect doesn't require any action
    // It's okay to leave it empty if it's not needed.
  },);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button onClick={sub} className="btn btn-primary">
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={add} className="btn btn-danger">
        +
      </button>
    </div>
  );
};

export default About;
