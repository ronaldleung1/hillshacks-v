import { Flex, Box, NavLink } from 'theme-ui';
import ColorSwitcher from '../components/color-switcher';
import NavDropdown from '../components/nav-dropdown';

const Nav = props => {
  return (
    <Box
      as="header"
      sx={{
        backgroundColor: "backgroundTransparent",
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: "1px solid",
        borderBottomColor: "border",
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <Flex sx={{maxWidth: "layout", mx: "auto", alignItems: "center"}} {...props}>
        <Box sx={{flex: '1 1 auto', justifyContent: "", margin: '3'}}>
          <NavLink href="#!" p={2}>
            Register
          </NavLink>
          <NavLink href="#!" p={2}>
            About
          </NavLink>
          <NavLink href="#!" p={2}>
            FAQ
          </NavLink>
          <NavLink href="#!" p={2}>
            Schedule
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
        <ColorSwitcher mr={3}/>
      </Flex>
    </Box>
  )
}

export default Nav;