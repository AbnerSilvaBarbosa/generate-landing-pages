import MenuLink from "../MenuLink/MenuLink";

function NavLinks({ links }) {

    return (
        <div  className=" lg:flex lg:flex-wrap lg:p-0 lg:flex-row lg:bg-slate-100 sm:flex-col sm:p-2 sm:bg-slate-100 sm:flex-wrap sm:content-center sm:hidden" >
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