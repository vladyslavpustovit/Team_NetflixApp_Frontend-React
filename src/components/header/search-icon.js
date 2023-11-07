const SearchIcon = (props) => {
    const {openSearch, setOpenSearch} = props;
    return (
        <div className={`p-2 text-inherit lg:hidden ${openSearch ? 'bg-neutral-800' : 'bg-neutral-900'}`}
             onClick={() => setOpenSearch(!openSearch)}>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
        </div>
    )
}

export default SearchIcon;