

function Heading({themeDark,textHeading,sizeHeading,uppercaseHeading}) {

  return (
    <div className={uppercaseHeading ? `uppercase`: ``} >
      <h1 className={themeDark ? `bg-gray-800 text-white lg:p-0 md:py-0   ${sizeHeading}  `: ` bg-slate-100 lg:p-0 md:py-0   ${sizeHeading} `}>{textHeading}</h1>
    </div>
  );
}

export default Heading;