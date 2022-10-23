import { useEffect, useRef, useState } from "react";
import {mapData} from "../../api/map-data"

import Base from "../Base/Base";
import {mockBase} from "../Base/mock"

function Home() {

    const [data,setData] = useState([])
    const isMounted = useRef(true)

    // useEffect(() => {
    //     const load = async () => {
    //         const dada = await fetch('http://localhost:1337/api/pages/?filters[slug]=landing-page&populate=deep')
    //         const json = await dada.json()
    //         const jsonInArray = [json]
    //         const pageData = mapData(jsonInArray)
    //         setData(pageData[0]);
    //         console.log(pageData[0])
    //     }

    //     if (isMounted.current === true) {
    //         load();
    //     }

    //     return () => {
    //         isMounted.current = false;
    //     };

    // }, []);

    // if (data === undefined) {
    //     return <h1>Página não encontrada</h1>;
    // }


    // const {menu,sections,footerHtml} = data
    // const {links,text,link,srcImg} = menu


    // return <Base links={links} footerHtml={footerHtml} logoData={{text}} />

    return <Base {...mockBase}/>
}

export default Home;