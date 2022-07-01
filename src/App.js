import { useState, useEffect } from "react";
import Axios from 'axios';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [listOfPosts, setListofPosts] = useState([]);

  const addPost = () => {
    Axios.post("http://localhost:4000/addPost", {
      name: name, 
      title: title,
      description: description
    }).then(()=> {
      alert("Whoohoo! Success!")
    })
    .catch(() => {
      console.error()
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:4000/read", {
    }).then((response)=> {
      setListofPosts(response.data)
    })
    .catch(() => {
      console.error()
    });
}, []);

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${month}.${day}.${year}`;

    return (
        <div className="App">
          <h1>Anonymity</h1>
        <div className="addPost">
        <input 
            type= "text" 
            placeholder="Title **Not Required**" 
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            />
          <textarea className="description"
            type= "text" 
            placeholder="Write your text here" 
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            />
          <input 
            type= "text" 
            placeholder="Anon Name **Not Required**" 
            onChange={(event) => {
              setName(event.target.value);
            }}
            />
          <button type="submit" onClick={addPost}>Submit</button>
      </div>
      <div className="posts">
        {listOfPosts.map((val) => {
          return <div className="stickyNotes">  
            <h2>Title</h2>
            <p>{val.postDescription}</p>
            <h3>{val.name}</h3>
            <h6>{fullDate}</h6> 
            </div>
      })}
      </div>
    </div>
  );
}

export default App;
