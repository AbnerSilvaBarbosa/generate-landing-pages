import Heading from "../Heading/Heading";
import SectionBackground from "../SectionBackground/SectionBackground";
import TextComponent from "../TextComponent/TextComponent";

function GridContext({ title, html, background }) {
    return (
        <div className="text-center">
            <div className="">
                <SectionBackground hasBackground={background}>
                    <Heading uppercaseHeading={true} themeDark={background} textHeading={title}></Heading>
                    <TextComponent text={html} themeDark={background}></TextComponent>
                </SectionBackground>
            </div>

        </div>
    )
}


export default GridContext;