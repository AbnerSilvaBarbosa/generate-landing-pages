import SectionContainer from "../SectionContainer/SectionContainer";

function SectionBackground({components,hasBackground}){
    return(
        <div className={hasBackground ? `bg-gray-800 text-white md:text-3xl sm:text-sm`: `bg-slate-100 md:text-3xl sm:text-sm ` }>
            <SectionContainer components={components}/>
        </div>
    )
}


export default SectionBackground;