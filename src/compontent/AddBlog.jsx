import React, { useState } from "react";
import Navbar from "./Navbar";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";




const AddBlog = () => {

  const auth = getAuth();
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    imgUrl: "",
    author: auth.currentUser.displayName,
    authorimg: auth.currentUser.photoURL,

  });



  const onhandelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData.title);
  };
  const formref = collection(db, "blogs")

  const submitHandler = async (e)=>{
    e.preventDefault();

    await addDoc(formref, formData);
    setFormData({
      title: "",
      shortDescription: "",
      fullDescription: "",
      imgUrl: "",
    })
    navigate('/blogs')
  }

  return (
    <>
      <Navbar />
      <div className="container" style={{ width: "50%" }}>
        <form onSubmit={submitHandler}>
          <div class="mb-1 my-5">
            <label for="exampleInputEmail1" class="form-label">
              Title
            </label>
            <input
              value={formData.title}
              name="title"
              onChange={onhandelChange}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Short Description
            </label>
            <input
              value={formData.shortDescription}
              name="shortDescription"
              onChange={onhandelChange}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Full Description
            </label>
            <textarea
              value={formData.fullDescription}
              name="fullDescription"
              onChange={onhandelChange}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="mb-1">
            <label for="exampleInputPassword1" class="form-label">
              Img Url
            </label>
            <input
              value={formData.imgUrl}
              name="imgUrl"
              onChange={onhandelChange}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary mt-3">
            ADD BLOG
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
