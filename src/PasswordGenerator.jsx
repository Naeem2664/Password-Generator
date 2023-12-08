import React, { useEffect, useState } from 'react'

const PasswordGenerator = () => {
    const [length,setLength]=useState(6)
    const [number,setNumber]=useState(false)
    const [character,setCharacter]=useState(false)
    const [password,setPassword]=useState(6)


    const paswordGenerator=()=>{
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(number){
            str +="0123456789";

        }
        if(character){
            str +="!@#$%^&*()-_`"
        }
        for (let i = 0; i < length; i++) {
            let char=Math.floor(Math.random()*str.length+1)
            pass +=str.charAt(char)
    
            
        }
        setPassword(pass)
    }
    useEffect(()=>{
        paswordGenerator()

    },[length,number,character,setPassword])
  return (
    <>
     <div className="container">
      <div className="generator" style={{backgroundColor:'green',color:'white'}}>
        <h1>Random Password Generator</h1>
        <div className="display-field">
          <input type="text" placeholder='Password' readOnly value={password}/>
        </div>
        <div className="generate-field">
          <input type="range" min={6} max={100} style={{color:'black'}} value={length} onChange={(e)=>setLength(e.target.value)}/>
          <label>Range: {length}</label>
          <input type="checkbox" value={number} onChange={(e)=>setNumber(e.target.value)}/>
          <label>Number</label>
          <input type="checkbox" value={character} onChange={(e)=>setCharacter(e.target.value)}/>
          <label htmlFor="">Special Characters</label>
        </div>
      </div>
     </div>
    
    </>
  )
}

export default PasswordGenerator