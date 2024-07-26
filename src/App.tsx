import React, { useEffect } from 'react'
import './App.css';
import WebFont from 'webfontloader';
import { FacebookFilled, MailFilled } from '@ant-design/icons'

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Handlee', 'Chilanka']
      }
    });
  }, []);
  return (
    <div className="App" style={{ fontFamily: 'Handlee', fontWeight: 'bold', height: '100vh', backgroundImage: `url(${'bg.jpg'})`}}>
{/*       <div>
        <img src={'icon-removebg-preview.png'} alt={'icon'}/>
        <p style={{fontWeight: 'bold', fontSize: 25}}>Hi I'm Trung!</p>
      </div> */}
{/*       <div style={{display: 'block', margin: 25, textAlign: 'left'}}>
        <div>
          <h2>About me</h2>
          <h3>I'm a software engineer, husband, and lover of astronomy, humanity, and religion.
            <br></br>
            I'm a vegetarian because I believe that all living things have the right to live. </h3>

          <div style={{marginTop: 40}}>
            <h2>What I know</h2>
            <h3>My main programming language is Javascript, but I also know PHP</h3>
            <h3>I'm also working with NodeJS, Laravel, ReactNative</h3>
          </div>
          <div style={{marginTop: 40}}>
            <h2>My pet project</h2>
          </div>
          <div style={{marginTop: 40}}>
            <h2>How to contact to me</h2>
            <h3><FacebookFilled /> <a href={'https://www.facebook.com/phtrung244212/'}>fb.com/phtrung244212</a></h3>
            <h3><MailFilled /> phtrungit@gmail.com</h3>
          </div>
        </div>

      </div> */}
    </div>
  );
}

export default App;
