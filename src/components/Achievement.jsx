import React from 'react';
import Mathursahb from '../assets/images/MATHURSAHB.png';
import audiofile from "../assets/images/audio.mp3"

export const Achievement = () =>{

    
    const audio = new Audio(audiofile);

    const handlePlayButtonClick = () => {
        audio.play();
    };
  

  const mainImageStyle = {
    maxWidth: '150vh',
    height: 'auto',
  };

 

  return (
    <div  style={{ textAlign: 'center', padding: '80px', marginTop:'10%' }} >
      
      
      <h1 style={{ fontSize:'8vw', marginBottom:'5%'}}>
        My Greatest Achievement!⭐</h1>
        <br></br>

   
        <button onClick={handlePlayButtonClick}>
                  <img
            className='Achievement'
            src={Mathursahb}
            alt="Achievements"
            style={mainImageStyle}
          
        />
        </button>



      
    </div>
  );
}

