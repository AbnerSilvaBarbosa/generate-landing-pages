import Heading from "./Heading.jsx"

export default {
    title: 'Components/Heading',
    component: Heading,
    argTypes: {
        textHeading: { control: 'text' },
        sizeHeading: {
            options: ["text-5xl", "text-4xl", "text-3xl", "text-2xl", "text-xl", "text-lg", "text-base", "text-sm", "text-xs"],
            control: { type: 'select' }
        },
        uppercaseHeading: { control: 'boolean' }
    },
    args: {
        themeDark: true,
        textHeading: "Texto",
        sizeHeading: "text-5xl",
        uppercaseHeading: false
    }

};

export const Heade = {

}