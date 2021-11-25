import { Flex, Box, NavLink, Text } from 'theme-ui';
import { ChevronDown } from 'react-feather';

const NavDropdown = ({ label, ...props }) => {
  return (
    <>
      <NavLink p={2} sx={{cursor: "pointer"}}>
        Previous Years{" "}<ChevronDown style={{verticalAlign: "middle"}} size={16} />
        <Box as="nav" sx={{display: "flex", flexDirection: "column", position: "absolute", transformOrigin: "top-right", right: 0}}>
          {props.children}
        </Box>
      </NavLink>
    </>
  )
}

export default NavDropdown;