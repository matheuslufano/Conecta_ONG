import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <Icon icon="akar-icons:whatsapp-fill" className="topIcon"/>
      </div>
      <div className="topCenter">
        <ul className="topList">

          <li className="topListItem">
            <Link to="/" className="link">HOME</Link>
          </li>

          <li className="topListItem">
            <Link to="/aboutus" className="link">SOBRE</Link>
          </li>

          <li className="topListItem">
            <Link to="/contact" className="link">CONTATO</Link>
          </li>

          <li className="topListItem">
            <Link to="/write" className="link">ESCREVER</Link>
          </li>

          <li className="topListItem">
            {user && "LOGOUT"}
          </li>

        </ul>
      </div>
      <div className="topRight">
        { user ? 
          (
            <img 
              className="topImg"
              src="/image copy.png"
              alt="ong" 
            />
          ) : 
          (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
