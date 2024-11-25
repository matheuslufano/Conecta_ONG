import { Icon } from "@iconify/react/dist/iconify.js"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">SOBRE NÓS</span>
            <img src="./image copy.png" alt="ong" />
            <h3>Conecta ONG</h3>
            <p> 
                Nosso projeto tem como objetivo conectar a população 
                e empresas aos serviços prestados por Organizações 
                Não Governamentais (ONGs) localizadas em Paraíso do Tocantins 
                e regiões adjacentes. 
                <br/> 
                <br/> 
                O projeto visa aumentar a 
                visibilidade de eventos, campanhas, interações e doações 
                realizadas pelas ONGs, promovendo assim maior engajamento 
                social e transparência nas ações dessas organizações.

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
