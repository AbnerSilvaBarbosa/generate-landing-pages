import GridTwoColum from "./GridTwoColum";
import image from "../../assets/imagens/javascript.svg"

export default{
    title:"Components/GridTwoColum",
    component:GridTwoColum,
    args:{
        title:"Texto",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis aperiam corporis voluptas voluptatem odit at sit doloribus expedita doloremque nesciunt commodi quaerat, iste debitis rem alias mollitia odio deleniti.",
        srcImg:image,
        background:false
    },
    argTypes:{
       children: {control:"text"}
    }
}

export const GridTwoColumM = {}