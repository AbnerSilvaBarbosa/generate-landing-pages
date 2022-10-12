import MenuLink from "../MenuLink/MenuLink";

function NavLinks({ links }) {

    return (
        <div  className="flex lg:flex-wrap lg:flex-row lg:bg-white sm:flex-col sm:flex-wrap sm:bg-orange-300 sm:content-center " >
            {links.map((link)=>{
                return (
                    <div key={link.id}>
                        <MenuLink   link={link.link} text={link.title} target={true} />
                    </div>
                )
            })}


        </div>

    )
};


export default NavLinks;