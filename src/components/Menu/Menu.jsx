import LogoLink from "../LogoLink/LogoLink"
import NavLink from "../NavLinks/NavLinks"

function Menu({ text, links }) {

    return (
        <div className=" bg-slate-100 lg:flex lg:justify-between sm:inline sm:text-center">
            <LogoLink texto={text}></LogoLink>
            <NavLink links={links}></NavLink>
        </div>

    )

}

export default Menu;