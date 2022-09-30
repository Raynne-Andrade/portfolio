import Menu from "./Menu"

const Header = () => { 
    const logo = require('../../assets/Logo.png')
    const links = [
        {
            name: "Sobre mim",
            link: "#aboutMe"
        }, {
            name: "Portfólio",
            link: "#portfolio"
        }, {
            name: "Skills",
            link: "#skills"
        }, {
            name: "Contato",
            link: "#contact"
        }
    ]
    return ( 
        <header className="flex gap-5 p-4 justify-between items-center bg-black">
            <img src={logo} width='200px'/>
            <Menu links={links}/> 
        </header>
    )
}
export default Header