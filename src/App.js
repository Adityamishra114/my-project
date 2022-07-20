import React,{useState} from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import SliderData from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import { InfoDataTwo } from './data/InfoDataTwo';
import InfoSectionTwo from './components/InfoSectionTwo';
import InfoSectionThree from './components/InfoSectionThree';
import { InfoDataThree } from './data/InfoDataThree';

import InfoCard from './components/InfoCard';
// import { AboutMenuData } from './data/AboutMenuData';




function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <GlobalStyle/>
    <Navbar toggle={toggle}/>
    {/* <AboutMenuData isOpen={isOpen} toggle={toggle}/> */}
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero slides={SliderData} />
    <InfoSection {...InfoData}/>
    <InfoSectionTwo {...InfoDataTwo}/>
    <InfoSectionThree  {...InfoDataThree}/>
    
    </>
  );
}

export default App;