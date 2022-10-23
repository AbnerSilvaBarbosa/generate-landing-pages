import SectionBackground from "../SectionBackground/SectionBackground"
import Heading from "../Heading/Heading"
import TextComponent from "../TextComponent/TextComponent";

function GridText({ title, description, grid, background }) {
    return (
        <div className="">
            <SectionBackground hasBackground={background}>
                <div className="mb-10">
                    <Heading themeDark={background} textHeading={title} uppercaseHeading={true} sizeHeading={"text-4xl"}></Heading>
                    <TextComponent themeDark={background} text={description}></TextComponent>

                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-40">
                    {grid.map(element => (
                        <div key={element.title}>
                            <Heading themeDark={background} textHeading={element.title} sizeHeading={"text-2xl"}></Heading>
                            <TextComponent themeDark={background} text={element.description}></TextComponent>

                        </div>
                    ))}

                </div>
            </SectionBackground>
        </div>
    )
}


export default GridText;