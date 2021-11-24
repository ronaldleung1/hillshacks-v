import { Flex, Box, NavLink } from 'theme-ui';
import ColorSwitcher from '../components/color-switcher';
import NavDropdown from '../components/nav-dropdown';

const Nav = (props) => {
  return (
    <Flex as="nav">
      <Box sx={{flex: '1 1 auto', margin: '2'}}>
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
        <NavLink href="#!" p={2}>
          About
        </NavLink>
        <NavDropdown label="Previous Years">
          <NavLink href="#!">
            2020 
          </NavLink>
          <NavLink href="#!">
            2019
          </NavLink>
          <NavLink href="#!">
            2018 
          </NavLink>
          <NavLink href="#!">
            2017
          </NavLink>
        </NavDropdown>
      </Box>
      <ColorSwitcher />
    </Flex>
  )
}

export default Nav;