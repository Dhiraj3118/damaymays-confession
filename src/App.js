import { useEffect, useState } from "react";
import db from "./firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [input, setInput] = useState("");
  const [btn, setBtn] = useState("Post Confession");
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    let pswd = JSON.parse(localStorage.getItem("adminObject"))
    if (pswd && pswd["password"] === process.env.REACT_APP_ADMIN_PASSWORD) {
      setAdmin(true);
    }
  }, [])

  const postConfession = (e) => {
    e.preventDefault();
    console.log(input)
    if (input === "" || input.trim() === "") {
      alert("Confession box is empty")
    }
    else {
      db.collection("confessions").add({
        confession: input.trim(),
        read: false,
        timestamp: firebase.firestore.Timestamp.now()
      })
      setInput("");
      setBtn("Posted")
    }
  }
  return (
    <div className="dashboard">
      {admin && <Link to="/adminpage/20704554" className="link">Admin Page</Link>}
      <img src="./logo.jpg" alt="damaymays logo" className="logo" />
      <h1 className="heading">Welcome to damaymays Confessions</h1>
      <form className="form">
        <textarea className="input" maxLength={1000} value={input} placeholder="Enter your confession" onChange={e => { setInput(e.target.value); setBtn("Post Confession") }} />
        <button className="button" disabled={!input} onClick={postConfession}>{btn}</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
