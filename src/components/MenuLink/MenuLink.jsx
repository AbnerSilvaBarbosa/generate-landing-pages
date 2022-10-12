function MenuLink({ link, target, text }) {

    return (
        <div className="flex ">
            <a className={"relative text-black text-sm p-2 after:content-[''] after:absolute after:bottom-0 after:left-2/4 after:0 after:h-1  after:bg-red-400 after:transition-all after:duration-300 after:ease-in-out hover:transition-all hover:after:left-1/4 hover:after:w-2/4"} href={link} target={target ? "_blank" : "_self"}>{text}</a>
        </div>
    )

}

export default MenuLink;