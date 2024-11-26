import { Icon } from "@iconify/react/dist/iconify.js"
import "./contact.css"

export default function Contact() {
  return (
    <div className="contact">
        <span className="contactTitle">Follow US</span>
        <div className="contactSocial">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <Icon icon="akar-icons:whatsapp-fill" className="topIcon"/>
        </div>
    </div>
  )
}
