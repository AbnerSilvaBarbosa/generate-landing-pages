

function Heading({themeDark,textHeading,sizeHeading,uppercaseHeading}) {

  return (
    <div className={uppercaseHeading ? `uppercase`: ``} >
      <h1 className={themeDark ? `bg-gray-800 text-white ${sizeHeading}  md:text-3xl sm:text-sm`: `bg-slate-100 ${sizeHeading} md:text-3xl sm:text-sm `}>{textHeading}</h1>
    </div>
  );
}

export default Heading;