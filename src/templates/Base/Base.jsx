import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"

function Base({ links = [], logoData, footerHtml, children }) {
    return (
        <div>
            <Menu links={links} text={logoData}/>
            <h1>{children}</h1>
            <Footer children={footerHtml}/>
        </div>
    )
}

export default Base;