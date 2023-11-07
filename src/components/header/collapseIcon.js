const CollapseIcon = (props) => {
    const {openNav, setOpenNav} = props;
    return (
        <div className={`p-2 text-inherit lg:hidden ${openNav ? 'bg-neutral-800' : 'bg-neutral-900'}`}
             onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            )}
        </div>
    )
}

export default CollapseIcon;