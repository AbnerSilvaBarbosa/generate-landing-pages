function TextComponent({ text, themeDark }) {
    return (
        <div>
            <p dangerouslySetInnerHTML={{__html: text}} className={themeDark ? `bg-gray-800 font-bold text-white sm:text-sm break-words`: `bg-slate-100 font-bold sm:text-sm break-words` }></p>
        </div>
    )
}

export default TextComponent