import SectionContainer from "../SectionContainer/SectionContainer";

function SectionBackground({hasBackground,children}){
    return(
        <div className={hasBackground ? `bg-gray-800 text-white md:text-3xl sm:text-sm`: `bg-slate-100 md:text-3xl sm:text-sm ` }>
            <SectionContainer>{children}</SectionContainer>
        </div>
    )
}


export default SectionBackground;