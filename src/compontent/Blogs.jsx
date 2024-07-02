import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import { onSnapshot, collection } from "firebase/firestore";

const Blog = () => {
  const auth = getAuth();
  const collref = collection(db, "blogs");

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      onSnapshot(collref, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getData();
   
  }, []);

  return (
    <>
      <Navbar />

      {data.map((data) => {
        return (
          <>
            <div>
              <div className="container d-flex justify-content-center align-items-center flex-column my-5">
                <div className="container">
                  <div
                    className="user-content d-flex justify-content-center align-items-center"
                    style={{ width: "60%" }}
                  >
                    <img
                      src={data.authorimg}
                      alt=""
                      style={{
                        width: "7%",
                        borderRadius: "50%",
                        margin: "0.5rem",
                      }}
                    />
                    <h2>{data.author}</h2>
                  </div>
                </div>
                <div
                  class=" bg-secondary card mb-3"
                  style={{ maxWidth: "700px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4 d-flex justify-content-center align-items-center ">
                      <img
                        src={data.imgUrl}
                        class="img-fluid rounded-start"
                        alt="..."
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div class="col-md-8 text-white text-center ">
                      <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text">
                         {data.fullDescription}
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">
                          {data.shortDescription}
                          </small>
                        </p>
                        {/* <button className="btn btn-primary">Read More</button>
                        <button className="btn btn-danger mx-3">Delete</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Blog;
