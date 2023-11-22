import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";


const OUR__MEMBERS = [
  {
    name: "Riya Goel",
    prn: "21070122127",
    instUrl: "https://www.instagram.com/riya_goel_92/",
    linkedinUrl: "https://www.linkedin.com/in/riyagoel92/",
    imgUrl: ava02,
  },

  {
    name: "Shreya Baldua",
    prn: "21070122158",
    instUrl: "https://www.instagram.com/shrekking__beaut/",
    linkedinUrl: "https://www.linkedin.com/in/shreya-baldua-985256245/",
    imgUrl: ava04,
  },

  {
    name: "Sudeep Sahu",
    prn: "21070122165",
    instUrl: "https://www.instagram.com/sudeep_2102/",
    linkedinUrl: "https://www.linkedin.com/in/sudeep2102/",
    imgUrl: ava03,
  },

  {
    name: "Suraqah Talal",
    prn: "21070122169",
    instUrl: "https://www.instagram.com/___suraqah______/",
    linkedinUrl: "https://www.linkedin.com/in/suraqah-talal-35350a1b7/",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">

              <a
                    href={item.linkedinUrl}
                  >
                  <i className="ri-linkedin-line"></i>
                </a>

                <a
                    href={item.instUrl}
                  >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
