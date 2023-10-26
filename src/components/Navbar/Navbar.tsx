import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      Navbar
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src='../img/en.png' alt='usd' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link to='/products/1'>Women</Link>
          </div>
          <div className='item'>
            <Link to='/products/2'>Men</Link>
          </div>
          <div className='item'>
            <Link to='/products/3'>Children</Link>
          </div>
        </div>
        <div className='center'>
          <Link to='/'>STORE TITLE</Link>
        </div>
        <div className='right'></div>
      </div>
    </div>
  );
};

export default Navbar;