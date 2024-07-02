import React from 'react'
import Login from './compontent/Login';
import AddBlog from './compontent/AddBlog';
import Blogs from './compontent/Blogs';

import Singal from './compontent/Singal'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   <>
<Router>

<Routes>
<Route path="/blogs" element={<Blogs/>}/>
<Route path="/addBlog" element={<AddBlog/>}/>
<Route path="/" element={<Login/>}/>
<Route path="/singal/:id" element={<Singal/>}/>
</Routes>
</Router>
   </>
  );
}

export default App;
