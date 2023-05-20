import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [excuse, setExcuse] = useState(null);
  const [category, setCategory] = useState("");
  const [categorySelected, setCategorySelected] = useState(false);

  // ignore this part
  // function getRandomExcuseId(min, max) {
  //   const range = max - min + 1;
  //   const random = Math.floor(Math.random() * range);
  //   return min + random;
  // }

  useEffect(() => {
    const fetchExcuse = async () => {
      const excuses = await fetch(`https://excuser-three.vercel.app/v1/excuse/${category}`);
      const result = await excuses.json();
      setExcuse(result);
    };
    fetchExcuse();
  }, [categorySelected]);

  function handleGenerateExcuse(event) {
    event.preventDefault()
    setCategorySelected(!categorySelected)
    const targetCategory = event.target.value;
    if (targetCategory === "family"){
      setCategory("family");
    } else if (targetCategory === "office"){
      setCategory("office")
    } else if (targetCategory === "children"){
      setCategory("children")
    } else if (targetCategory === "college"){
      setCategory("college")
    } else if (targetCategory === "party"){
      setCategory("party")
    } else if (targetCategory === "funny"){
      setCategory("funny")
    } else if (targetCategory === "unbelievable"){
      setCategory("unbelievable")
    } else if (targetCategory === "developers"){
      setCategory("developers")
    } else if (targetCategory === "gaming"){
      setCategory("gaming")
    }
  }

  return (
    <>
      <h2>Excuse generator</h2>
      {excuse ? 
      <div>
        <h4>{excuse[0].excuse}</h4>
        <h5>category: {excuse[0].category}</h5>
      </div>
      : null}
      <div>
        <button onClick={handleGenerateExcuse} value="family">Family</button>
        <button onClick={handleGenerateExcuse} value="office">Office</button>
        <button onClick={handleGenerateExcuse} value="children">Children</button>
        <button onClick={handleGenerateExcuse} value="college">College</button>
        <button onClick={handleGenerateExcuse} value="party">Party</button>
        <button onClick={handleGenerateExcuse} value="funny">Funny</button>
        <button onClick={handleGenerateExcuse} value="unbelievable">Unbelievable</button>
        <button onClick={handleGenerateExcuse} value="developers">Developers</button>
        <button onClick={handleGenerateExcuse} value="gaming">Gaming</button>
      </div>
    </>
  );
}

export default App;
