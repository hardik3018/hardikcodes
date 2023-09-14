import React from 'react'
import "../App.css"


function Display() {


  
  return (
    <section id='display'>
        <div className='display' data-aos='flip-up'>


          
            <div className='d1 d-flex justify-content-center' onClick={()=>{
               window.location = "/Project";
            }}>
              <h1>PROJECTS</h1>
            </div>
          
            
            
            <div className='d2'>

                <div className='d2-box up d-flex justify-content-center ' onClick={()=>{
                  window.open("https://hardik3018.github.io/DiceGame/");
                
                }}>
                 <h1 className='m-5 d-flex justify-content-center '>DICE GAME</h1>
                </div>
                <div className='d2-box btm d-flex justify-content-center ' onClick={()=>{
                  window.open("https://hardik3018.github.io/Calculator/");
                
                }}>
                  <h1 className='m-5'>CALCULATOR</h1>
                </div>

            </div>

            <div className='d3 d-flex justify-content-center ' onClick={()=>{
               window.location = "/Project";
               document.getElementById("design").scrollIntoView();
            }}>
            <h1>DESIGNS</h1>
            </div>
        </div>


        

    </section>
  )
}

export default Display