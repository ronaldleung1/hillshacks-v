import { Box, Image, Container, Heading, Button } from 'theme-ui';
import { backgroundImage } from './background-image';

const Hero = props => (
  <Box 
    bg="sunken" 
    sx={{
      width: '100%',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `${backgroundImage}, radial-gradient(ellipse at center bottom, #4F3714, #1B1A18)`,
      /*filter: "drop-shadow(0px 0px 16px rgba(255, 214, 0, .1))",
      WebkitFilter: "drop-shadow(0px 0px 16px rgba(255, 214, 0, .1))",*/
      /*style='filter: drop-shadow(0px 0px 16px rgba(255, 214, 0, .1)); WebkitFilter: drop-shadow(0px 0px 16px rgba(255, 214, 0, .1))'*/
    }}
    {...props}
  >
    {/*<Image
      src="/mountains.svg"
      alt="hillsHacks Logo"
      sx={{
        position: 'absolute',
        width: ['300px', '400px', '500px', '600px'],
        
        userDrag: 'none',
        WebkitUserDrag: 'none'
      }}
    />*/}
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
      <Heading mt={16} variant="subtitle" color="white"><b>Reaching New Heights</b></Heading>
      <Heading variant="subtitle" color="white">February 6, 2022</Heading>
      <Button variant="lg" as="a" target="_blank" my={2}
    href="https://docs.google.com/forms/d/e/1FAIpQLSeEqpDhRwbn8WD1EXS8bAplyi_nqHJ0NdwdCSXQEPzcR5UYvQ/viewform?usp=sf_link">Pre-Register Now!</Button>
    </Container>
  </Box> 
)

export default Hero;