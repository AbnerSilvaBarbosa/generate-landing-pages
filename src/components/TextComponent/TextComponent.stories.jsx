import TextComponent from "./TextComponent";

export default {
    title: 'Components/TextComponent',
    component: TextComponent,
    argTypes: {
        text: { control: 'text' },

    },
    args: {
        themeDark: false,
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore reiciendis quas eligendi error quasi iure natus, aliquid adipisci aperiam corrupti maxime reprehenderit, ab expedita, asperiores aut debitis delectus officia!",
    }

};

export const Text = {

}