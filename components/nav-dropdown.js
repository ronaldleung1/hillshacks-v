import { Flex, Box, NavLink, Text } from 'theme-ui';

const NavDropdown = ({label, ...props}) => {
  return (
    <>
      <Text></Text>
      <Flex as="nav" sx={{flexDirection: "column"}}>
        {props.children}
      </Flex>
    </>
  )
}

export default NavDropdown;