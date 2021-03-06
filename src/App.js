import { useState, useEffect } from "react";
import Axios from 'axios';
import NewPost from "./components/Post";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [listOfPosts, setListofPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/read", {
    }).then((response)=> {
      setListofPosts(response.data)
    })
    .catch(() => {
      console.error()
    });
}, []);

    return (
        <div className="App">
          <h1>Anonymity</h1>
          <div>
            <button 
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}>
              Create Post</button>
          </div>
        {openModal && <NewPost closeModal={setOpenModal}/>}
      <div className="posts">
        {listOfPosts.map((val) => {
          return <div className="stickyNotes">  
            {/* <h2>{val.title}</h2> */}
            <p>{val.postDescription}</p>
            <h3>-{val.name}</h3>
            <div className="stickyNoteFooter">
            {/* <h6>{val.fullDate}</h6>  */}
            <ThumbUpIcon color="default" fontSize="small"/>
            </div>
            </div>
      })}
      </div>
    </div>
  );
}

export default App;
