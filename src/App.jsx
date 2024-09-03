
import React, {useState} from 'react'
import Classes from './style.module.css'
import { CgChevronDown } from "react-icons/cg";
import './App.css'
import heroImg from './assets/hero--banner.avif';
import thirdImg from './assets/Third-sec.avif';



function App() {
 
          const[isTextVisible, SetIsTextVisible] = useState(false)

          const handleIsTextVisible = () =>{
          
                      isTextVisible 
                        ?SetIsTextVisible(false)
                        :SetIsTextVisible(true) 

          }
          const[isTextVisibleSecond, SetIsTextVisibleSecond] = useState(false)

          const handleIsTextVisibleSecond = () =>{
          
                      isTextVisibleSecond 
                        ?SetIsTextVisibleSecond(false)
                        :SetIsTextVisibleSecond(true) 

          }

          const[isTextVisibleThird,  SetIsTextVisibleThird] = useState(false)

          const handleIsTextVisibleThird = () =>{
          
            isTextVisibleThird 
                        ?SetIsTextVisibleThird(false)
                        :SetIsTextVisibleThird(true) 

          }
          
          
  return (
    <>


      <section className="hero--container">
 

            <div className="hero-wrapper">

            <img src={heroImg} alt="hero-banner-img" />

            <div className="hero--text--wrapper">
              <p>Escolhendo sua faculade?</p> 
              <p>Descubra universidade na sua região com base no feedback de alunos!</p>
                <button>Inicie seu futuro </button>
            </div>

          </div>


 
      </section>

      <section className="reason--dashbord">
       
      <div className="reason-wrapper ">
        <p>Por Que Usar Nosso Site para Escolher Sua Faculdade?</p>
        
        <div className="reason-wrapper--slides">
          

                <div className="reason-slide">
                <div>


                          <div onClick={()=> {handleIsTextVisible()}} className="reason--slide--title">
                              <p>Why use</p>
                                < CgChevronDown
                                  className={Classes.arrow}/>
                          </div>

                          {isTextVisible
                          ?   <div className="reason_slide_text">
                                <p>
                                Encontre a faculdade perfeita para você com base no que realmente importa. Nosso site oferece uma análise completa e personalizada das universidades, considerando não apenas a qualidade acadêmica, mas também fatores como estilo de vida, clima, oportunidades de networking, e mais. Deixe de lado as dúvidas e escolha a faculdade que mais combina com seus sonhos e objetivos.
                                </p>
                              </div>

                          :null
                          }
                </div>
                <div>
                          <div onClick={()=> {handleIsTextVisibleSecond()}} className="reason--slide--title">
                              <p>Why use</p>
                                < CgChevronDown
                                  className={Classes.arrow}/>
                          </div>

                          {isTextVisibleSecond
                          ?   <div className="reason_slide_text">
                                <p>
                                Encontre a faculdade perfeita para você com base no que realmente importa. Nosso site oferece uma análise completa e personalizada das universidades, considerando não apenas a qualidade acadêmica, mas também fatores como estilo de vida, clima, oportunidades de networking, e mais. Deixe de lado as dúvidas e escolha a faculdade que mais combina com seus sonhos e objetivos.
                                </p>
                              </div>

                          :null
                          }
                </div>
                <div>
<div onClick={()=> {handleIsTextVisibleThird()}} className="reason--slide--title">
                              <p>Why use</p>
                                < CgChevronDown
                                  className={Classes.arrow}/>
                          </div>

                          {isTextVisibleThird
                          ?   <div className="reason_slide_text">
                                <p>
                                Encontre a faculdade perfeita para você com base no que realmente importa. Nosso site oferece uma análise completa e personalizada das universidades, considerando não apenas a qualidade acadêmica, mas também fatores como estilo de vida, clima, oportunidades de networking, e mais. Deixe de lado as dúvidas e escolha a faculdade que mais combina com seus sonhos e objetivos.
                                </p>
                              </div>

                          :null
                          }
                </div>

        </div>


           
        </div>
      </div>

      </section>

      <section className="goals-dashboard">

          <div 
            className="joinUs ">
              <div>
                <p>Faça parte deessa comunidade!</p>
                <button> Lets go</button>
              </div>
          </div>
            <img 
              src={thirdImg}
                alt="thirdImg" />



      </section>
    </>
  )
}

export default App
