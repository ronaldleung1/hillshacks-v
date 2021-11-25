import { Flex, Box, NavLink, Text } from 'theme-ui';
import { ChevronDown } from 'react-feather';

const NavDropdown = ({ label, ...props }) => {
  return (
    <>
      <NavLink p={2}>Previous Years{" "}<ChevronDown style={{verticalAlign: "middle"}} size={16} /></NavLink>
      <Flex as="nav" sx={{flexDirection: "column"}}>
        {props.children}
      </Flex>
    </>
  )
}

export default NavDropdown;