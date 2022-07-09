import React from 'react'
import Sections from './component/sections';
import Tv from './asset/tv.png';
import Mobile from './asset/mobile.jpeg';
import Kid from './asset/kids.png';
import Section2 from './component/section2';
import Section3 from './component/section3';
import LastSection from './component/lastSection';
import Footer from './component/footer';
import LandingPage from './component/landingPage';
import './Home.css'


const Home = () => {

  const sectionTitle = 'Enjoy on your TV.'
  const sectionSubtitle = 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
  const sectionTitle2 = 'Download your shows to watch offline.'
  const sectionSubtitle2 = 'Save your favorites easily and always have something to watch.'
  const sectionTitle3 = 'Watch everywhere.'
  const sectionSubtitle3 = 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
  const sectionTitle4 = 'Create profiles for kids.'
  const sectionSubtitle4 = 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'



  return (
    <>
      <LandingPage />
      <div className="line"></div>
      <Sections
        title={sectionTitle}
        subtitle={sectionSubtitle}
        image={Tv}
      />
      <div className="line"></div>
      <Section2
        title={sectionTitle2}
        subtitle={sectionSubtitle2}
        image={Mobile} 
      />
      <div className="line"></div>
      <Section3
        title={sectionTitle3}
        subtitle={sectionSubtitle3}
      />
      <div className="line"></div>
      <Section2
        title={sectionTitle4}
        subtitle={sectionSubtitle4}
        image={Kid} 
      />
      <div className="line"></div>
      <LastSection />
      <div className="line"></div>
      <Footer />
    </>
  )
}

export default Home