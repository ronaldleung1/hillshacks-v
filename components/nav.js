import { Flex, Box, NavLink } from 'theme-ui';
import ColorSwitcher from '../components/color-switcher';

const Nav = (props) => {
  return (
    <Flex as="nav">
      <Box sx={{flex: '1 1 auto'}}>
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
        <NavLink href="#!" p={2}>
          Blog
        </NavLink>
        <NavLink href="#!" p={2}>
          About
        </NavLink>
      </Box>
      <ColorSwitcher />
    </Flex>
  )
}

export default Nav;