import Heading from "../Heading/Heading";
import image from "../../assets/imagens/teste.png"

function LogoLink({ texto, srcImage }) {
    return (
        <div className="lg:flex lg:items-center sm:inline">
            {srcImage ? <Heading textHeading={<img  src={image} alt="" style={{height:"200px"}} />}></Heading>  : <Heading textHeading={texto}></Heading>}
        </div>

    )
}

export default LogoLink;