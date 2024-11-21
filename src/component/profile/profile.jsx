import React from "react";
import './profile.css';
import { useState } from "react";
const Profile = () => {

    const [urls, setUrl] = useState([])
    const [imgPreview, setimgPreview] = useState([])

    const imageHandler = async (e) => {
        const files = Array.from(e.target.files);
        // const urlArr=[]

        //lets read the image urls and preview it on page
        files.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setimgPreview((oldImg) => [...oldImg, reader.result])
                }
            }
            reader.readAsDataURL(file)

        })
        files.forEach(async (file) => {
            const formData = new FormData();
            formData.append("file", file); // Attach the file
            formData.append("upload_preset", "mytinder"); // Your Cloudinary upload preset

            try {
                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/ddkdtixpy/image/upload", // Replace <cloud_name>
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                if (!response.ok) {
                    throw new Error(`Upload failed with status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Uploaded successfully:", data);

                let url = data.url
                console.log(url)
                // we need a state variable to store the urls
                //pending
                setUrl(...urls, url)
                setUrl()
                console.log(urls, "arr of url needed")
                // Handle the returned data (e.g., save the image URL)
            } catch (error) {
                console.error("Error uploading to Cloudinary:", error);
            }
        });
    };


    return (
        <> 

            <div className="profile-main">
                                  <span className="head">Create account</span>
                <div className="profile-child">

                    <div className="pro-items">
                        <div className="pro-child">
                            <label htmlFor="">Name</label>
                            <input type="text" className='profile-input' placeholder="First name" />
                        </div>
                        <div className="pro-child">
                            <label htmlFor="">Age</label>
                            <input type="number" className='profile-input' />
                        </div>
                        <div className="pro-child">
                            <label htmlFor="">Bio</label>
                            <textarea name="" id=""></textarea>
                        </div>

                        <div className="pro-child">
                            <div className="gender">
                                <div className="label">
                                    Gender
                                </div>
                                <div className="gen-opt">
                                    <button className="man">Man</button>
                                    <button className="woman">Woman</button>
                                    <button className="other">Others</button>
                                </div>
                            </div>
                        </div>

                        <div className="pro-child">
                            <div className="gender">
                                <div className="label">
                                    Intrested in
                                </div>
                                <div className="gen-opt">
                                    <button className="man">Man</button>
                                    <button className="woman">Woman</button>
                                    <button className="other">Everyone </button>
                                </div>
                            </div>
                        </div>
                        <div className="pro-child">
                            <label htmlFor="">Location</label>
                            <input type="text"
                                className='profile-input'
                            />
                        </div>

                    </div>

                    <div className="pro-items">
                        <div className="image-section">
                            <label htmlFor="image">Add your photos</label>
                            <input
                                type="file"
                                id="image"
                                onChange={imageHandler}
                                accept="image/*"
                                multiple
                            />
                            <div className="img-sec">
                                {
                                    imgPreview.map((item, index) => {
                                        return <img
                                            src={item}
                                            key={index}
                                            alt="preview-img"
                                            width='130'
                                            height='150'
                                            style={{ padding: "1vmax" }}
                                        />
                                    })
                                }
                            </div>
                            <div className="submitbtn">
            <button className="sub-btn" > Continue</button>
            </div>

                        </div>
                    </div>
                </div>
              
            </div>

           
        </>
    )
}

export default Profile