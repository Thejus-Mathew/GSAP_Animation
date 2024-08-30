import './App.css'



import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(useGSAP,TextPlugin);


function App() {

  
  useGSAP(()=>{
    
    
    gsap.timeline()
      .from(".loadingText span",{y:200,stagger:0.1,opacity:0,delay:0.5,duration:0.5,ease:"back(4)"})
      .from(".loadingBun",{opacity:0,duration:0.1})
      .from(".loadingBun",{rotate:-360,duration:2,ease:"power1.in"})
      .to(".loadingBundle",{rotate:360,repeat:1,duration:4,ease:"none"})
      .to(".loadingText span",{y:200,stagger:0.1,opacity:0,delay:0.5,duration:0.5,ease:"back.in(4)"},"<")
      .to(".loadingbundleCover",{x:-153,duration:4,ease:"power1.inOut"},5)
      .to(".centerCircle",{scale:3000,duration:3,ease:"back.in(1)"},8)
      .to(".loadingCircle1",{scale:12,y:-200,duration:6,ease:"none"},4)
      .to(".loadingCircle2",{scale:11,y:-200,duration:6,ease:"none"},4.2)
      .to(".loadingCircle3",{scale:10,y:-200,duration:6,ease:"none"},4.4)
      .to(".loadingCircle4",{scale:9,y:-200,duration:6,ease:"none"},4.6)
      .to(".loadingCircle5",{scale:8,y:-200,duration:6,ease:"none"},4.8)
      .to(".loadingCircle6",{scale:7,y:-200,duration:6,ease:"none"},5)
      .to(".landingPage",{display:"none",duration:0.01})
      .to(".content",{display:"block",duration:0.01},"<")
  })

  

  return (
    <>


      <div className="landingPage justify-content-center align-items-center w-100">
        <p className='loadingText mx-3 m-0'>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </p>
        <div className="loadingbundleCover">
          <div className="loadingBundle d-flex justify-content-center align-items-center">
            <div className="loadingBun1 loadingBun">
              <div className="loadingCircle loadingCircle1"></div>
            </div>
            <div className="loadingBun2 loadingBun">
              <div className="loadingCircle loadingCircle2"></div>
            </div>
            <div className="loadingBun3 loadingBun">
              <div className="loadingCircle loadingCircle3"></div>
            </div>
            <div className="loadingBun4 loadingBun">
              <div className="loadingCircle loadingCircle4"></div>
            </div>
            <div className="loadingBun5 loadingBun">
              <div className="loadingCircle loadingCircle5"></div>
            </div>
            <div className="loadingBun6 loadingBun">
              <div className="loadingCircle loadingCircle6"></div>
            </div>
            <div className="centerCircle">
            </div>
          </div>
        </div>
      </div>



      <div className="content">
        dfugvne
      </div>
    </>
  )
}

export default App
