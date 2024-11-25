import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Conecta ONG</span>
            <span className="headerTitleLg">Blog</span>

        </div>
        <img 
            className="headerImg" 
            src="./SERRA DO ESTRONDO.jpg"
            alt="headerImg" 
        />
    </div>
  )
}
