// import React, { useState } from "react";
// import "../components/styles/cssbasedstyle/Footer.css";
// import FI from "../assets/FooterImage.png";
// import { InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

// function FooterDesign() {
//   const [showIcons, setShowIcons] = useState(false);

//   const toggleIcons = () => {
//     setShowIcons(!showIcons);
//   };

//   return (
//     <>
//       <footer className="footer_section">
//         <div className="footer_inner_box">
//           <div className="uper_box">
//             <div className="newslatter_box">
//               <h3>BE THE FIRST TO KNOW</h3>
//               <p>Sign up for updates form metta muse.</p>

//               <div className="newslatter_input_box">
//                 <input
//                   type="email"
//                   placeholder="Enter your e-mail..."
//                   className="newslatter_input"
//                 />
//                 <button>subscribe</button>
//               </div>
//             </div>
//             <div className="contactus_box">
//               <div className="contactus_inner_box">
//                 <h3>CONTACT US</h3>
//                 <h5>+44 22113 35360</h5>
//                 <h5>customercare@mettamuse.com</h5>
//                 <h3> CURRENCY</h3>
//                 <h5>. USD</h5>
//                 <h5>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Mole
//                 </h5>
//               </div>
//             </div>
//           </div>

//           <div className="border_box"></div>

//           <div className="lower_box">
//             <div className="metta_box">
//               <div className="mettalink_box">
//                 <h3>metta muse</h3>
//                 <ul>
//                   <li>About Us</li>
//                   <li>Stories</li>
//                   <li>Artisans</li>
//                   <li>Boutiques</li>
//                   <li>Contact Us</li>
//                   <li>EU Compliances Docs</li>
//                 </ul>
//               </div>
//             </div>

//             {/*  */}

//             <div className="metta_box">
//               <div className="quicklinks_box">
//                 <h3>QUICK LINKS</h3>
//                 <ul>
//                   <li>Orders & shipping</li>
//                   <li>Join/Login as a Seller</li>
//                   <li>Payment & Pricing</li>
//                   <li>Return & Refunds</li>
//                   <li>FAQs</li>
//                   <li>Privacy Policy</li>
//                   <li>Terms & Conditions</li>
//                 </ul>
//               </div>
//             </div>

//             <div className="metta_box">
//               <div className="followus_box">
//                 <h3 className="followus_heading" onClick={toggleIcons}>
//                   FOLLOW US
//                 </h3>
//                 {showIcons && (
//                   <div className="icons-dropdown">
//                     <div className="followus_heading">
//                       <InstagramOutlined />
//                       <LinkedinOutlined />
//                     </div>
//                   </div>
//                 )}

//                 <h3>metta muse ACCEPTS</h3>

//                 <img src={FI} alt="FI" />
//               </div>
//             </div>
//           </div>
//           <div className="copyright_text">
//             <h6>Copyright © 2023 mettamuse. All rights reserved.</h6>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default FooterDesign;
import React, { useState } from "react";
import "../components/styles/cssbasedstyle/Footer.css";
import FI from "../assets/FooterImage.png";
import { InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

function FooterDesign() {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <>
      <footer className="footer_section">
        <div className="footer_inner_box">
          <div className="uper_box">
            <div className="newslatter_box">
              <h3>BE THE FIRST TO KNOW</h3>
              <p>Sign up for updates form metta muse.</p>

              <div className="newslatter_input_box">
                <input
                  type="email"
                  placeholder="Enter your e-mail..."
                  className="newslatter_input"
                />
                <button>subscribe</button>
              </div>
            </div>
            <div className="contactus_box">
              <div className="contactus_inner_box">
                <h3>CONTACT US</h3>
                <h5>+44 22113 35360</h5>
                <h5>customercare@mettamuse.com</h5>
                <h3> CURRENCY</h3>
                <h5>. USD</h5>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mole
                </h5>
              </div>
            </div>
          </div>

          <div className="border_box"></div>

          <div className="lower_box">
            <div className="metta_box">
              <div className="mettalink_box">
                <h3>metta muse</h3>
                <ul>
                  <li>About Us</li>
                  <li>Stories</li>
                  <li>Artisans</li>
                  <li>Boutiques</li>
                  <li>Contact Us</li>
                  <li>EU Compliances Docs</li>
                </ul>
              </div>
            </div>

            <div className="metta_box">
              <div className="quicklinks_box">
                <h3>QUICK LINKS</h3>
                <ul>
                  <li>Orders & shipping</li>
                  <li>Join/Login as a Seller</li>
                  <li>Payment & Pricing</li>
                  <li>Return & Refunds</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>

            <div className="metta_box">
              <div className="followus_box">
                <h3 className="followus_heading" onClick={toggleIcons}>
                  FOLLOW US
                </h3>
                {showIcons && (
                  <div className="icons-dropdown">
                    <InstagramOutlined />
                    <LinkedinOutlined />
                  </div>
                )}

                <h3>metta muse ACCEPTS</h3>

                <img src={FI} alt="FI" />
              </div>
            </div>
          </div>
          <div className="copyright_text">
            <h6>Copyright © 2023 mettamuse. All rights reserved.</h6>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterDesign;
