import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


function Footer() {
return (
    <div id="footer">
        <div className="container">
            <div className="row">
            <div className="footer1 col-sm-12 col-md-6 col-lg-5">
                <div className="d-flex gap-2 align-items-center">
                <img width="40" height="40" src="logo.png" alt="logo" />
                <h1 className="fw-bold text-white">eduTech</h1>
                </div>
                <p className="mt-3">
                eduTech is a dynamic platform that features portfolios and
                projects created by experienced professionals in programming and
                web development. It serves as a source of inspiration and
                education, offering insights into the creativity and dedication of
                developers worldwide.
                </p>
            </div>
            <div className="footer2 col-sm-12 col-md-3 col-lg-3 pt-2">
                <h3 className="fw-bold text-white">Contact Us</h3>
                <ul className="list-unstyled pt-3">
                <li>
                    <SiGooglemaps />
                    <span>123 Main St, City, Country</span>
                </li>
                <li>
                    <BsTelephoneFill />
                    <span>+1 (123) 456-7890</span>
                </li>
                <li>
                    <a className="email" href="mailto:info@example.com">
                    <MdEmail />
                    info@example.com
                    </a>
                </li>
                </ul>
            </div>
            <div className="footer3 col-sm-12 col-md-3 col-lg-4 pt-2">
                <h3 className="fw-bold text-white">Find Us on Social Media</h3>
                <div className="d-flex gap-2 mt-2 mb-4 pt-3">
                <a
                    className="d-flex justify-content-center align-items-center"
                    href="https://instagram.com/rafidardanu"
                    target="blank"
                >
                    <AiFillInstagram size={45} color="#000"/>
                </a>
                <a
                    className="d-flex justify-content-center align-items-center"
                    href="https://www.linkedin.com/in/rafidardanu"
                    target="blank"
                >
                    <FaLinkedin size={40} color="#000"/>
                </a>
                <a
                    className="d-flex justify-content-center align-items-center"
                    href="https://github.com/rafidardanu"
                    target="blank"
                >
                    <FaGithubSquare size={40} color="#000"/>
                </a>
                <a
                    className="d-flex justify-content-center align-items-center"
                    href="https://www.youtube.com/watch?v=d22KYHiTrEc&ab_channel=TheRelaxedMuslim"
                    target="blank"
                >
                    <AiFillYoutube size={45} color="#000"/>
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
);
}

export default Footer;
