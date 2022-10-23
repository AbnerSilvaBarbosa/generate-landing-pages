import TextComponent from "../TextComponent/TextComponent"

function Footer({children}){
    return(
        <div className=" text-center">
            <TextComponent text={children} themeDark={false}></TextComponent>
        </div>
    )
}

export default Footer;