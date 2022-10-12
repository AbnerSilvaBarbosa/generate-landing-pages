import SectionBackground from "./SectionBackground";

export default {
    title: "Components/SectionBackground",
    component: SectionBackground,
    args: {
        components: (
            <div>
                <h1>Section</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae omnis blanditiis soluta voluptates reiciendis nulla asperiores ab. Ipsum molestias quis assumenda tempore quas ex sed dolorum praesentium cum voluptates!</p>
            </div>
        ),
        hasBackground:false
    },
    argTypes:{
        hasBackground: {type:"boolean"}
    }
}


export const BackGroung = {

}