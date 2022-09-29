import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Navbar = () => {

    return(
        <div>
            <DropdownButton variant='dark' id="dropdown-button" title="Menu" >
            <Dropdown.Item ><Link to='/' className={style.marginRight} >Home</Link></Dropdown.Item>
            <Dropdown.Item ><Link to='/categories' >categories</Link></Dropdown.Item>
            <Dropdown.Item ><Link to='/about'>About</Link></Dropdown.Item>
            </DropdownButton>            
        </div>
    )
}

export default Navbar;
