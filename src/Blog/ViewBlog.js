import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function ViewBlog() {
const {title}=useContext(MyContext);
const navigate=useNavigate()
const {id}=useParams()
const listitem=title.filter(h=>h.id===parseInt(id))
return (
<div className='App'>
<div className='view'>
<h1>{listitem[0].title}</h1><br/> <br/>
<h3>{listitem[0].blog}</h3><br/> <br/>
<Button type='button' onClick={()=>navigate('/')}>Back</Button>
</div>
</div>
)
}

export default ViewBlog
