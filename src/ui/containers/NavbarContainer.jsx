import React
  // , { useState } 
  from 'react';
import { Button, Image, Icon, HyperLink } from '../components/atoms';
import Divider from '../components/atoms/Divider';

const NavbarContainer = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <Button className='btn btn-link d-md-none rounded-circle mr-3' id='sidebarToggleTop'>
        <Icon className='fa fa-bars' />
      </Button>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <HyperLink className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" dataToggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
            <Image className="img-profile rounded-circle" imageUrl="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
          </HyperLink>
          
          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <HyperLink className="dropdown-item">
              <Icon className='fa-user fa-sm fa-fw mr-2 text-gray-400' />
              Profile
            </HyperLink>
            <Divider className='dropdown-divider' />
            <HyperLink className="dropdown-item" href="#" dataToggle="modal" data-target="#logoutModal">
              <Icon className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
              Logout
            </HyperLink>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarContainer;
