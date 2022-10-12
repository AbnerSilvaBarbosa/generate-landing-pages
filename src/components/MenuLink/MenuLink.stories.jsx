import MenuLink from "./MenuLink";

export default {
    title: 'Components/MenuLink',
    component: MenuLink,
    args:{
        themeDark:false,
        link:"https://www.google.com",
        target:true,
        text:"texto"
    },
    argTypes:{
        themeDark:{control:{type:"boolean"}},
        link:{control:{type:"text"}},
        target:{control:{type:"boolean"}},
        text:{control:{type:"text"}}
    }

    
};

export const MenuLinks = {}
