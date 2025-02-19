
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'; // import NavLink
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <div> 
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/postdetail/:id" element={<PostDetail/>}/>
              <Route path="/createpost" element={<CreatePost/>}/>
            </Routes>
          </div>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;