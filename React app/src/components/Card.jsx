import React from "react";
import { FaBookmark } from "react-icons/fa";
const Card = () => {
    return (
        <div className="card1">
            <div className="top">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s"
                    alt=""
                />
                <button>
                    Save <FaBookmark />
                </button>
            </div>
            <div className="center">
                <h3>
                    Amazon <span>5 days ago...</span>
                </h3>
                <h2>Senior UI & UX Designer</h2>
                <div>
                    <h4>Part time</h4>
                    <h4>Senior level</h4>
                </div>
            </div>
            <div className="bottom">

                <div>
                    <h3>$120/hr</h3>
                    <p>LHR,ISB</p>
                </div>

                <button>Apply Now</button>
            </div>
        </div>
    );
};

export default Card;
