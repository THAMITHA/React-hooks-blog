import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';

// import {Navbar, Home, CreatePost, PostDetail} from './';

function App() {
  return (<div className="Container">
  <Navbar/>
 <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/post/:postId" element={<PostDetail/>}/>
    <Route path="/create-post" element={<CreatePost/>}/>
  </Routes>
</div>)
    ;
  
}

export default App;
