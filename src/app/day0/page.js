"use client";
import { useState } from 'react';
import './page.css'
import Image from 'next/image'
import flippy from '../components/flippy.png'
import ipad from '../components/ipad.png'
import tech_eco from '../components/tech_eco.png'

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default function day0() {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctPassword = 'opensesame'; // You should ideally store this securely

    if (password === correctPassword) {
      setAccessGranted(true);
    } else {
      setError('Incorrect password, please try again.');
    }
  };
  if (accessGranted) {
  return (
    <main className='main'>
     <div className='block1'>
     <div className='title'> Redesigning My Technology Ecosystem</div>
      <div className='video'>
      <YouTubeEmbed videoId={"EFhea-3mXs0"} />
    </div>
     </div>
      <div className='block'>
      <div className='text-1'> follow up thoughts</div>
      <br></br>
      <div className='text'>
        <pre className='text-pre'>{`although an ipad addiction is very real and parallels iphone addiction in many ways, i think it will still help me reset my technology ecosystem for a few reasons- 

1. the size of the device is simply too large to keep on me at all times, forcing me to engage with it as an independent activity. i still get to dictate when i want to use it, instead of subconsciously having a device dictate my actions through notifications, muscle memory, etc. 
2. i will use it as a creative tool, with content consumption explicitly for creating and learning purposes, rather than doomscrolling. i will not have any social media apps, and will have all notifications off (except for messaging.. ) 

the ipad will also help ease the transition for family and friends as i will still be reachable via imessage, facetime, etc. 

it has been an incredible tool for me to organize my life, my creative endeavors, and is a tool that i am choosing to engage with to enhance my life. it captures a lot of utility that i enjoyed from my iphone and more, without the addictive aspects. i made the decision to have an ipad as an adult after evaluating its features and my life, which feels very different from my “decision” to have an iphone at age 16 and hadn’t questioned until now. 

regardless, i will continuously evaluate the technology in my life that make up my ecosystem, and make adjustments as needed. 

a friend shared this beautiful and relevant zine with me as well, check it out: 
`}</pre>
      <a href="https://arena-attachments.s3.amazonaws.com/3568310/9d8420005d1ff7ac32825f91553fa294.pdf?1549377955" target="_blank" rel="noopener noreferrer">
        Disconnection Practices
      </a>
      <pre className='text-pre'>
        my first sexy flippy selfie 
      </pre>
      <Image
        src={flippy}
        alt="folder Logo"
        width={500}
        />
        <pre className='text-pre'>
        current ipad setup
      </pre>
      <Image
        src={ipad}
        alt="folder Logo"
        width={500}
        />
      <pre className='text-pre'>
        my initial vision
      </pre>
      <Image
        src={tech_eco}
        alt="folder Logo"
        width={500}
        />
      <pre className='text-pre'>{`
              O  o
            _\\_   o
>('>   \\\\/  o \\ .
         //\\___=
          ''

xoxoxx discofish 
`}</pre>
      </div>
      </div>
    </main>
  );
}
return (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      <button type="submit">Submit</button>
    </form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
);
}