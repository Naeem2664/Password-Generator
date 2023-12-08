import { useCallback, useState, useEffect ,useRef} from "react";
import "./App.css";
import PasswordGenerator from "./PasswordGenerator";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_-`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);
  const passRef=useRef(null)

  const copyToClipboard=useCallback(()=>{
    passRef.current.select()
    window.navigator.clipboard.writeText(password)

  },[password])

  return (
    <>
      <div className="container">
        <div className="generator">
          <h1>Random Password Generator</h1>
          <div className="display-field">
            <input
              type="text"
              placeholder="Password"
              readOnly
              value={password}
              ref={passRef}
            />
            <button
              style={{
                padding: "10px",
                margin: "5px",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "7px",
                border: "none",
                cursor:'pointer'
              }}
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="generate-field">
            <input
              type="range"
              min={6}
              max={100}
              onChange={(e) => setLength(e.target.value)}
              value={length}
            />
            <label>Range:{length}</label>
            <input
              type="checkbox"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Number</label>
            <input
              type="checkbox"
              onChange={() => setCharAllowed((prev) => !prev)}
              value={charAllowed}
            />
            <label htmlFor="">Special Characters</label>
          </div>
        </div>
      </div>
      <div className="container">
        <PasswordGenerator />
      </div>
    </>
  );
}

export default App;
