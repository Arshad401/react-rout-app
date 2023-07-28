import React, { useContext } from "react";
import { MyContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function AddBlog() {
const { title, setTitle } = useContext(MyContext);
const navigate = useNavigate();


const handleInputChange = (event) => {
event.preventDefault();
const title1 = event.target.title.value;

const blog1 = event.target.blog.value;
setTitle(
(s) => (s = [...title, { id: Date.now(), title: title1, blog: blog1 }])
);

navigate("/");
};
return (
<div className="App">

<h1> CREATE YOU BLOG HERE </h1>
<br />
<br />

<form onSubmit={handleInputChange}>
<input
className="inp" type="text" id="title" placeholder="Enter Title"/>
<br />
<br />

<textarea className="inp" id="blog" placeholder="craetive mind = creative blog" ></textarea>
<br />
<br />

<Button variant="primary" type="submit"> Submit</Button>{' '}
<Button variant="primary" onClick={() => navigate("/") } type="button"> Cancel </Button>



</form>

</div>
);
}

export default AddBlog;
