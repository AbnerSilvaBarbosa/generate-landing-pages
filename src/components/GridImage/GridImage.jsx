import SectionBackground from "../SectionBackground/SectionBackground"
import Heading from "../Heading/Heading"
import TextComponent from "../TextComponent/TextComponent"

function GridImage({ grid,title,description, background }) {
    return (
        <div>
            <SectionBackground hasBackground={background}>
                <div className="mb-6">
                    <Heading themeDark={background} textHeading={title}  sizeHeading={"text-4xl"} uppercaseHeading></Heading>
                    <TextComponent themeDark={background} text={description}></TextComponent>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
                    {grid.map(element => (
                        <div key={element.altText} className="hover:rotate-6  transition-all  duration-300 ease-in-out">
                            <img src={element.srcImg} alt={element.altText} />
                        </div>
                    ))}
                </div>
            </SectionBackground>

        </div>
    )
}

export default GridImage;