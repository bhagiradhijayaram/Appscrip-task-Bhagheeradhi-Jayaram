import { useState, useEffect } from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (menu) => {
    if (!isMobile) return;
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="top-footer-content">
          <div>
            <h3>Be the first to know</h3>
            <p>Sign up for updates from mettā muse.</p>
            <form>
              <input type="text" placeholder="Enter your e-mail..." />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="contact-container">
            <div>
              <h3>CONTACT US</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className="currency">
              <h3>Currency</h3>
              <p>USD</p>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-footer-content">
          <div className="footer-menu-container">
            <div className="footer-menu">
              <h3 onClick={() => toggleMenu("metta")}>
                mettā muse
                <span>
                  {isMobile &&
                    (openMenu === "metta" ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    ))}
                </span>
              </h3>
              <ul className={!isMobile || openMenu === "metta" ? "show" : ""}>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Contact</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-menu">
              <h3 onClick={() => toggleMenu("quick")}>
                Quick Links
                <span>
                  {isMobile &&
                    (openMenu === "quick" ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    ))}
                </span>
              </h3>
              <ul className={!isMobile || openMenu === "quick" ? "show" : ""}>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Track Order</li>
              </ul>
            </div>
          </div>
          <div className="footer-menu">
            <h3 onClick={() => toggleMenu("follow")}>
              Follow Us
              <span>
                {isMobile &&
                  (openMenu === "follow" ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  ))}
              </span>
            </h3>
            <div
              className={`follow-section ${
                !isMobile || openMenu === "follow" ? "show" : ""
              }`}
            >
              <div className="social-icons">
                <FaInstagram className="social-icon" />
                <FaLinkedin className="social-icon" />
              </div>
            </div>
            <div className="payment-section">
              <h4>mettā muse Accepts</h4>
              <div className="payment-icons">
                <img
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1762050829/Gpay-removebg-preview_ajbqu2.png"
                  alt="GPay"
                />
                <img
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1762082444/85dda930e3465f586e2b20700028d0-removebg-preview_jqfwal.png"
                  alt="MasterCard"
                />
                <img
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1762082219/Paypal-Logo-2022_rzgdaz.png"
                  alt="PhonePe"
                />
                <img
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1762082443/Paypal-Logo-2022_cikuc7.png"
                  alt="PayPal"
                />
                <img
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1762082444/kisspng-logo-product-clip-art-brand-font-ward-lumber-agriculture-amp-feed-1713875748283-removebg-preview_pv08wo.png"
                  alt="Apple Pay"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
