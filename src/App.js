import { useState } from 'react';
import './App.css';
import { MyContext } from './Context/Context';
import {Routes,Route} from 'react-router-dom'
import BlogHome from './Blog/BlogHome';
import AddBlog from './Blog/AddBlog';
import ViewBlog from './Blog/ViewBlog';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [title, setTitle]=useState([]);
return (
<>
<MyContext.Provider value={{title,setTitle}}>
<Routes>
<Route path="/" element={<BlogHome/>}/>
<Route path="/blogAdd" element={<AddBlog/>}/>
<Route path="/Viewblog/:id" element={<ViewBlog/>}/>
</Routes>
</MyContext.Provider>
</>
);
}

export default App;
