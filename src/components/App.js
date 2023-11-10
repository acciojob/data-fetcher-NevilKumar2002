
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}

        {/* axios.get("https://dummyjson.com/products")
        .then((response)=>{
          console.log(response)
        } ) */}
        let ans= fetch("https://dummyjson.com/products")
        let ans1= ans.json();
        console.log(ans1)
        <p>{ans1}</p>
    </div>
  )
}

export default App
