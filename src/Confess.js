import { useState } from "react";
import { db } from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [btn, setBtn] = useState("Post Confession");

  const postConfession = (e) => {
    e.preventDefault();
    if (input === "" || input.trim() === "") {
      alert("Confession box is empty")
    }
    else {
      const str = input.length < 1000 ? input.trim() : input.trim().substring(0, 1000);
      db.collection("confessions").add({
        confession: str,
        read: false,
        timestamp: firebase.firestore.Timestamp.now()
      })
      setInput("");
      setBtn("Posted")
    }
  }

  return (
    <div className="conf-dashboard">
      <h1 className="heading">Welcome to damaymays Confessions</h1>
      <form className="conf-form">
        <textarea className="input" maxLength={1000} value={input} placeholder="Enter your confession" onChange={e => { setInput(e.target.value); setBtn("Post Confession") }} />
        <button className="button" disabled={!input} onClick={postConfession}>{btn}</button>
      </form>
    </div>
  );
}

export default App;
