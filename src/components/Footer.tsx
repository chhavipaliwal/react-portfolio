import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

type Props = {
  links: {
    id: number;
    title: string;
    link: string;
    icon: string;
  }[];
};

function Footer({ links }: Props) {
  const [ref, isInView] = useInView();
  const currYear = new Date().getFullYear();
  return (
    <footer ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
        transition={{ duration: 0 }}
        className="footer-top animation-transition"
      >
        <h2 className="footer-main-heading align-center">
          Welcome to My Portfolio
        </h2>
        <div className="btns">
          <a href="/register" className="btn">
            Create an account
          </a>
          <a href="/login" className="btn btn-primary">
            Login
          </a>
        </div>
      </motion.div>

      <div className="footer-middle">
        <a href="/" className="footer-logo">
          <i className="fa-duotone fa-code"></i>
        </a>
        <nav
          className="footer-navbar"
          role="navigation"
          aria-label="Footer Navigation"
        >
          <ul className="footer-nav-menu-level-1">
            <li className="footer-nav-item-level-1">
              <span className="footer-nav-menu-heading">Company</span>
              <ul className="footer-nav-menu-level-2">
                <li className="footer-nav-item-level-2">
                  <a href="#">We vs others</a>
                </li>
                <li className="footer-nav-item-level-2">
                  <a href="/privacy">Your data</a>
                </li>
                <li className="footer-nav-item-level-2">
                  <a href="/contact">Help</a>
                </li>
                <li className="footer-nav-item-level-2">
                  <a href="/privacy">Privacy Policy</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-item-level-1">
              <span className="footer-nav-menu-heading">Pricing</span>
              <ul className="footer-nav-menu-level-2">
                <li className="footer-nav-item-level-2">
                  <a href="/subscription">Subscription</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-item-level-1">
              <span className="footer-nav-menu-heading">Resources</span>
              <ul className="footer-nav-menu-level-2">
                <li className="footer-nav-item-level-2">
                  <a href="/devs">Developers</a>
                </li>
                <li className="footer-nav-item-level-2">
                  <a href="/devs">Team</a>
                </li>
                <li className="footer-nav-item-level-2">
                  <a href="/documentation">Documentation</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-item-level-1">
              <span className="footer-nav-menu-heading">Company</span>
              <ul className="footer-nav-menu-level-2">
                <li className="footer-nav-item-level-2">
                  <a href="/">About Us</a>
                </li>
                <li className="footer-nav-item-level-2">
                  <a href="#">Links</a>
                </li>
                <li className="footer-nav-item-level-2">
                  <a href="#">Blogs</a>
                </li>
                <li className="footer-nav-item-level-2">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-item-level-1">
              <span className="footer-nav-menu-heading">Social</span>
              <ul className="footer-nav-menu-level-2">
                {links.slice(0, 5).map((link) => (
                  <li className="footer-nav-item-level-2" key={link.id}>
                    <a href={link.link} target="_blank">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="footer-ul">
          <ul className="footer-bottom-menu">
            <li className="footer-bottom-item">
              <a href="#">Status</a>
            </li>
            <li className="footer-bottom-item">
              <a href="/privacy">Privacy</a>
            </li>
            <li className="footer-bottom-item">
              <a href="/privacy">Terms</a>
            </li>
            <li className="footer-bottom-item">
              <a href="/privacy">Cookies</a>
            </li>
            <li className="footer-bottom-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <ul className="footer-bottom-menu">
            {links.slice(0, 5).map((link) => (
              <li className="footer-bottom-item" key={link.id}>
                <a href={link.link} target="_blank">
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-end-credit">
        <p>
          <i className="fa-regular fa-copyright"></i>
          <span className="copyright-year"> {currYear}</span> Chhavi Paliwal -
          All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
