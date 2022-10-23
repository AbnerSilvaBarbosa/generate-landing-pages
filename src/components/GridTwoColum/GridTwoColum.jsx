import SectionBackground from "../SectionBackground/SectionBackground";
import Heading from "../Heading/Heading";
import TextComponent from "../TextComponent/TextComponent"

function GridTwoColum({ title, text, srcImg, background }) {
    return (
        <div>
            <SectionBackground hasBackground={background} >
                <div className="grid lg:grid-cols-2 text-center items-center sm:grid-cols-1">
                    <div>
                        <Heading textHeading={title} themeDark={background} uppercaseHeading={true}></Heading>
                        <TextComponent themeDark={background} text={text}></TextComponent>
                    </div>

                    <div>
                        <img className="" src={srcImg} alt={title} />
                    </div>


                </div>
            </SectionBackground>
        </div>
    )
}


export default GridTwoColum;