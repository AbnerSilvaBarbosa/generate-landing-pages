import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
    return pagesData.map((data) => {

        const {

            footer_text: footerHtml = '',
            slug = '',
            title = '',
            sections = [],
            menu = {},
        } = data;


        return {
            footerHtml,
            slug,
            title,
            sections: mapSections(sections),
            menu: mapMenu(menu),
        };
    });
};


// [
//   {
//     footerHtml: '<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>',
//     slug: 'landing-page',
//     title: 'Landing Page',
//     sections: [
//       [Object], [Object],
//       [Object], [Object],
//       [Object], [Object],
//       [Object]
//     ],
//     menu: {
//       open_in_new_tab: false,
//       _id: '602fdf30540c00269e0561ae',
//       logo_text: 'Landing Page',
//       logo_link: '#home',
//       menu: [Array],
//       __v: 1,
//       logo: [Object],
//       id: '602fdf30540c00269e0561ae'
//     }
//   }
// ]