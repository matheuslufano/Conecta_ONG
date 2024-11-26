import { Icon } from "@iconify/react/dist/iconify.js"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">SOBRE NÓS</span>
            <img src="./image copy.png" alt="ong" className="sidebarImg"/>
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
                <li className="sidebarListItem">Saúde</li>
                <li className="sidebarListItem">Educação</li>
                <li className="sidebarListItem">Animais</li>
                <li className="sidebarListItem">Caridade</li>
                <li className="sidebarListItem">Projetos</li>
                <li className="sidebarListItem">Doações</li>
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
