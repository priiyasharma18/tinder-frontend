import React from "react";
import './feed.css';
import { VscThreeBars } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Feed = () => {
    const [data, setData] = useState(null); // To store fetched data
    const [loading, setLoading] = useState(true); // To track loading state
    const [error, setError] = useState(null); // To track error state
    const [isSwiped, setIsSwiped] = useState(false)
    useEffect(()=>{
     //fetch data on a component mount

         const fetchFeedData=async ()=>{
            console.log('this use effetc is goin on')
           try{
            const response= await fetch('http://localhost:8081/feed')

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result=await response.json()

            setData(result)
            console.log(result,'for trial purpose')

           }catch(e){
            setError(e.message)
            console.log(e.message)

           }

         }
    fetchFeedData()
        },[])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("https://randomuser.me/api/"

    //             );
    //             console.log("Raw Response:", response);

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }

    //             const data = await response.json();
    //             console.log(data);
    //         } catch (error) {
    //             console.log("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const reject = () => {
        setIsSwiped(true)
        //         setTimeout(()=>{
        // setIsSwiped(false)
        //         },5000)

    }

    return (
        <>
            <div className="feed">
                <div className="feed-left">
                    <div className="user-side">
                        <div className="user-left">
                            <img
                                src="http://localhost:3000/image/profile.jpeg"
                                alt="user-img" />
                            <span className="user-name">
                                Priya
                            </span>
                        </div>
                        <div className="user-right">
                            <VscThreeBars
                                className="three-bar"
                            />
                        </div>
                    </div>
                    <div className="update-section">
                        <div className="matches">
                            Matches
                        </div>
                        <div className="request">
                            All request
                        </div>
                    </div>
                </div>
                <div className="feed-right">

                    <div className={isSwiped?"swiped":"card-container"}>
                        <div className="image-container">
                            <img
                                src="http://localhost:3000/image/feed.jpg"
                                alt="user" />
                            <div className="text-section">

                                <div className="name">
                                    <div className="inner-name">
                                        Priya
                                    </div>
                                    <div className="age">
                                        23
                                    </div>
                                </div>

                                <div className="bio">
                                    <div className="bio-icon">
                                    <IoSearchSharp/>
                                    </div>
                                    <div className="inner-bio">
                                        I am open for short term fun
                                    </div>
                                </div>

                                <div className="location">
                                   <div className="loc-img">
                                   <FaLocationDot />
                                   </div>
                                   <div className="loc">
                                    Bengaluru
                                   </div>
                                </div>
                                <div className="feature">
                                    <div className="reject">
                                         <button className="rej-btn" onClick={()=>{reject()}}> 
                                            Reject
                                         </button>
                                    </div>
                                    <div className="accept">
                                    <button className="acc-btn">
                                            Accept
                                         </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Feed