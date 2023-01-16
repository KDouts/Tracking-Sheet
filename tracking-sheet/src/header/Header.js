import NavBar from 'react-bootstrap/Navbar'

function Header() {
    return (
        <div>
            <NavBar className='justify-content-end' expand='lg' style={{ backgroundColor: "gray", borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', color: 'white' }}>
                <div>
                    Hello *Customer Name*
                </div>
            </NavBar>
        </div>
    )
}

export default Header;