"use client";
import React from 'react';
import "./page.css";
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import folder from './components/folder.png'
import archive from './components/archive.png'
import earico from './components/earico.png'
import vanishico from './components/vanishico.png'
import visual from './components/visual.png'
import disco from './components/disco.png'
import haus from './components/haus.png'
import tummy from './components/tummy.png'
import music from './components/music.png'
import websites from './components/websites.png'
import Popup from './components/Popup.js';

export default function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  return (
    <div className='container'>
    <div className='main'>
    <div>
      <div className="header">
        <div className="title">
          brain worms
        </div>
        <div className="sub">
          an internet art collective
        </div>
      </div>
      
      <div className="works">
        <div className="websites">
            <button className='category' onClick={() => setButtonPopup(true)}>
            <Image className='logo'
                    src={folder}
                    alt="folder Logo"
                      width={50}
                      height={50}
                    />
                    <div className='text'>websites</div>
            </button>
            <div className='child child-1'>
            <Popup  trigger={buttonPopup} setTrigger={setButtonPopup} title = "websites" 
            text = {<div className='project-container'>
              <Link className='project' href={ "/vanish" } onClick={() => router.reload()}>          
                <Image
                          src={vanishico}
                          alt="folder Logo"
                            width={50}
                            height={50}
                          />
                <div className='text'>vanish</div>
              </Link>
              <Link className= 'project' href={ "/vanish" } onClick={() => router.reload()}>          
                <Image
                          src={earico}
                          alt="folder Logo"
                            width={50}
                            height={50}
                          />
                <div className='text'>ear</div>
              </Link>
              <Link className= 'project' href={ "/vanish" } onClick={() => router.reload()}>          
                <Image
                          src={disco}
                          alt="folder Logo"
                            width={50}
                            height={50}
                          />
                <div className='text'>discofish</div>
              </Link>
              <Link className= 'project' href={ "/vanish" } onClick={() => router.reload()}>          
                <Image
                          src={haus}
                          alt="folder Logo"
                            width={50}
                            height={50}
                          />
                <div className='text'>haus</div>
              </Link>
              <Link className= 'project' href={ "/vanish" } onClick={() => router.reload()}>          
                <Image
                          src={tummy}
                          alt="folder Logo"
                            width={50}
                            height={50}
                          />
                <div className='text'>tummy</div>
              </Link>
            </div>}> 
              
            </Popup>
          </div>
        </div>
        <div className="music">
            <button className='category' onClick={() => setButtonPopup1(true)}>
            <Image className='logo'
                    src={earico}
                    alt="folder Logo"
                      width={50}
                      height={50}
                    />
                    <div className='text'>music</div>
            </button>
            <div className='child child-1'>
            <Popup  trigger={buttonPopup1} setTrigger={setButtonPopup1} title = "websites" 
            text = {        
              <div className='project-container'>
                <Link className= 'project' href={ "/vanish" } onClick={() => router.reload()}>          
                <Image className='logo'
                          src={websites}
                          alt="folder Logo"
                            width={50}
                            height={50}
                          />
                <div className='text'>siren</div>
              </Link>
              <Link className= 'project' href={ "/vanish" } onClick={() => router.reload()}>          
                <Image className='logo'
                          src={music}
                          alt="folder Logo"
                            width={50}
                            height={50}
                          />
                <div className='text'>dump</div>
              </Link>
</div>    
            }> 
            </Popup>
          </div>
        </div>
        <div className="archive">
            <button className='category' onClick={() => setButtonPopup2(true)}>
            <Image className='logo'
                    src={archive}
                    alt="folder Logo"
                      width={50}
                      height={50}
                    />
                    <div className='text'>archive</div>
            </button>
            <div className='child child-1'>
            <Popup  trigger={buttonPopup2} setTrigger={setButtonPopup2} title = "girlies" text = {        <Link href={ "/vanish" } onClick={() => router.reload()}>          
                <Image className='logo'
                          src={visual}
                          alt="folder Logo"
                            width={50}
                            height={50}
                          />
                <div className='text'>LTP</div>
              </Link>}> 
            </Popup>
          </div>
        </div>
      </div>
    </div>
    
</div>
<nav className="navbar navbar-expand-lg navbar-dark">
      <div className="navbar-nav">
        {/* First nav item */}
        <div className='nav-buttons'>
        <div className="nav-item">
          <Link href={ "/about" } onClick={() => router.reload()} className="nav-link" role="button">
            <span className="nav-link-inner-text">📺 About</span>
          </Link>
        </div>
        {/* Second nav item */}
        <div className="nav-item">
          <Link href={ "/docs" } onClick={() => router.reload()}className="nav-link" role="button">
            <span className="nav-link-inner-text">📕 Collective</span>
          </Link>
        </div>
        <div className="time">
       1:47 PM
      </div>
        </div>

      </div>
    </nav>
</div>
  );
}
