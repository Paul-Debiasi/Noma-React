import "./Footer.scss";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer({ children }) {
  return (
    <div className="footer">
      <ul>
        <li>
          {" "}
          <BsFacebook />{" "}
        </li>
        <li>
          {" "}
          <BsTwitter />{" "}
        </li>
        <li>
          {" "}
          <BsInstagram />{" "}
        </li>
      </ul>
      <p>By Paul Debiasi</p>
    </div>
  );
}
