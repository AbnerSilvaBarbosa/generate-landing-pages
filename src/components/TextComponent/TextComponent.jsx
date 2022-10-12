function TextComponent({ text, themeDark }) {
    return (
        <div>
            <p className={themeDark ? `bg-gray-800 text-white text-sm `: `bg-slate-100 font-bold text-sm` }>{text}</p>
        </div>
    )
}

export default TextComponent