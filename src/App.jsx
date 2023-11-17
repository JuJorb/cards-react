import './app.css';
import Header from './Header.jsx';
import first from '/first.jpg'
import second from '/second.jpg'
import third from '/third.jpg'
import fourd from '/fourd.jpg'


function App() {
  return (
    <>
    <Header text="DESING PORTAFOLIO" lenguaje="HTML CSS" color="white" imagen={first}/>
    <Header text="E-LEARNING LANDING PAGE" lenguaje="HTML CSS" color="white" imagen={second}/>
    <Header text="TODO WEB APP" lenguaje="ADOBE PREMIERE" color="white" imagen={third}/>
    <Header text="ENTERTAINMETN WEB APP" lenguaje="HTML CSS JAVASCRIPT" color="white" imagen={fourd}/>

{/*     <div className='card'>
      <img className='nft' src="./public/nft.jpg" alt="" />
      <h3 className='txt'>Equilibrium #3429</h3>
      <h4 className='txt'> Our Equilibrium collection prometes <br /> balance and calm.</h4>
    <div className='part'>
      <h4 className='dos'> <img className='icon' src="./public/icon.svg" alt="" />0.041 ETH</h4>
      <h4 className='tres'> <img src="./public/icon-clock.svg" alt="" /> 3 days left</h4>
    </div>
    <div className='four'>
    <h4 className='cuatro'> <img className='avatar' src="./public/image-avatar.png" alt="" />Creation  of  </h4>
    <h4 className='cinco'>Jules  Wyvern</h4>
    </div>
    </div>
 */}
    </>
  );
}

export default App;