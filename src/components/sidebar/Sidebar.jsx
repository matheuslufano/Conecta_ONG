import { Icon } from "@iconify/react/dist/iconify.js"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="./image.png" alt="ong" />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam consequatur beatae recusandae accusamus quasi eligendi 
                sit atque exercitationem asperiores dolorem, tenetur quis 
                necessitatibus, possimus eius! Atque aliquid quod officia itaque!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow US</span>
            <div className="sidebarSocial">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <Icon icon="akar-icons:whatsapp-fill" className="topIcon"/>
            </div>
        </div>
    </div>
  )
}
