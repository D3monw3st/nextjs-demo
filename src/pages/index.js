
import NavBar from '@/components/NavBar.js'
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import styled from 'styled-components'
import Image from 'next/image'


const StyledButton = styled.button`
:hover: {
  transform: scale(1.05)
  transition: ease-in-out 0.2s
}
`

const MainContent = styled.div`
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 4rem;

`

// Version 1
export async function getServerSideProps() { // Grab the user's profile image using server side props
  const { MongoClient } = require('mongodb');
  const uri = process.env.MONGODB_URI;


  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
  
  let client;
  let clientPromise;
  
  client = new MongoClient(uri, options)

  clientPromise = client.connect()
  const db = client.db("nextjs-demo")
  const users = db.collection("users");
  const doc = await users.findOne({ name: 'fun' });

  // Can run a DB Query
  return {
    props: {
      header: "Are you feeling lucky?",
      profileBase64: doc.base64
    }
  }
}
/* Version 2 
export async function getServerSideProps() { // Grab the user's profile image using server side props
  const client = await clientPromise; // Fetch Mongo Client & query
  const db = client.db("nextjs-demo")
  const user = await db.collection("users").findOne({ name: 'fun' });

  // Can run a DB Query
  return {
    props: {
      header: "Are you feeling lucky?",
      profileBase64: user.base64
    }
  }
}
*/

export default function Home({ header, profileBase64 }) {
  const [roll, setRoll] = useState(0);
  const [rollImg, setRollImg] = useState("");

  // Client Side
  const { data, error } = useSWR('/api/roll', async url => {
    const req = await fetch(url, { method: 'POST' })
    const json = await req.json();

    if (!req.ok) {
      const error = new Error('An error has occurred.')
      error.info = json;
      error.status = req.status;
      throw error;
    }

    return json.msg;
  })

  const fetchRequestCSF = async () => {
    const req = await fetch('/api/roll');
    if (req.ok) {
      const json = await req.json();
      setRoll(json.roll)

      switch (json.roll) {
        case 1:
          setRollImg('/1.png')
          break;
        case 2:
          setRollImg('/2.png')
          break;
        case 3:
          setRollImg('/3.png')
          break;
        case 4:
          setRollImg('/4.png')
          break;
        case 5:
          setRollImg('/5.png')
          break;
        case 6:
          setRollImg('/6.png')
          break;
      }

    }
  }

  return (
    <MainContent>
      <NavBar header={header} />
      {error && <h2>An error has occured {error}</h2>}
      <img style={{marginTop: `10px`, marginBottom: `20px`}} src={`data:image/jpeg;base64,${profileBase64}`} />
      <StyledButton onClick={fetchRequestCSF}>Roll Dice!</StyledButton>
      <h5 style={{ marginTop: `10px` }}> Your roll is {roll}</h5>
      {rollImg.length !== 0 && <Image style={{ marginTop: `20px` }} src={rollImg} width={150} height={150} />}
      {data && <p style={{ marginTop: `20px` }}>{data}</p>}
    </MainContent>
  )
}
