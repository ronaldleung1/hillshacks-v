import { Box, Image, Container, Heading, Button } from 'theme-ui';

const Hero = ({ label, ...props }) => (
  <Box 
    bg="sunken" 
    sx={{
      width: '100%',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: theme => `radial-gradient(${theme.colors.slate}, ${theme.colors.darkless})`
    }}
  >
    <Image
      src="/hexagons.svg"
      alt="hillsHacks Logo"
      sx={{
        position: 'absolute',
        width: ['300px', '400px', '500px', '600px'],
        left: `-${4}em`,
        top: [4, 4, 2],
        transform: 'rotate(180deg)',
        userDrag: 'none',
        WebkitUserDrag: 'none'
      }}
    />
    <Image
      src="/hexagons.svg"
      alt="hillsHacks Logo"
      sx={{
        position: 'absolute',
        width: ['300px', '400px', '500px', '600px'],
        right: `-${4}em`,
        bottom: [4, 4, 2],
        userDrag: 'none',
        WebkitUserDrag: 'none'
      }}
    />
    <Container as="section" py={6} variant="copy" sx={{position: 'relative'}} {...props}>
      <Image
        src="/logo.png"
        alt="hillsHacks Logo"
        width={600}
        sx={{
          userDrag: 'none',
          WebkitUserDrag: 'none'
        }}
      />
      <Heading mt={16} variant="subtitle" color="white">There's never been a better time to build. <b>And the world has never needed it more than now.</b></Heading>
      <Heading variant="subtitle" color="white">June 5, 2021</Heading>
      {/*<Button variant="lg" as="a" target="_blank" my={2}
    href="https://docs.google.com/forms/d/e/1FAIpQLScEaeNmtv_REsOml_Odf0YShWCTSifJbTEXVpzvAyvCXTrzMw/viewform?usp=sf_link">Register</Button>*/}
      <Button variant="lg" my={2}>Registration Opens 12/1</Button>
    </Container>
  </Box> 
)

export default Hero;