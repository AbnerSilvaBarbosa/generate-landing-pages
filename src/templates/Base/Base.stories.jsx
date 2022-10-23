import Base from "./Base";
import links from "../../components/NavLinks/mock"

import GridImage from "../../components/GridImage/GridImage"
import GridTwoColum from "../../components/GridTwoColum/GridTwoColum"
import GridText from "../../components/GridText/GridText"
import GridContent from "../../components/GridContent/GridContent"

import gridImageMock from "../../components/GridImage/mock"
import gridTwoMock from "../../components/GridTwoColum/mock"
import gridTextMock from "../../components/GridText/mock"
import gridContextMock from "../../components/GridContent/mock"

export default {
    title: "Template/Base",
    component: Base,
    args: {
        children: (
            <>
                <GridTwoColum {...gridTwoMock} ></GridTwoColum>
                <GridContent {...gridContextMock}></GridContent>
                <GridText {...gridTextMock} ></GridText>
                <GridImage {...gridImageMock} background ></GridImage>
            </>
        ),
        links: links,
        logoData: "LogoNome",
        footerHtml: "<h1>Feito por Abner</h1>"
    },
    argTypes: {}
}

export const BasE = {}