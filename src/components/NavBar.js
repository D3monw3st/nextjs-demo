const NavBar = ({header}) => {
    return (
        <nav>
            <div className="logo">
                <h1>
                    {header}
                </h1>
            </div>
        </nav>
    );
}

export default NavBar;