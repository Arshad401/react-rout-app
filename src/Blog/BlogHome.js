import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function BlogHome() {
const {title} = useContext(MyContext);
const navigate=useNavigate()
return (
<div className='App'>
<h1>CREATE YOUR BLOGS</h1> <br/> <br/>
<Button className='button1' onClick={()=>navigate('/blogAdd')} type='button'>ADD</Button>
<br/> <br/> <h1>VIEW YOUR BLOGS</h1>
<div>{title.map((t)=><li> <ul className='but3' id="list" onClick={()=>navigate(`/viewblog/${t.id}`)}><h1 key={t.id}>{t.title}</h1></ul></li>)}</div>
</div>
);
};

export default BlogHome
