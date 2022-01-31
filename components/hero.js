import { Box, Image, Container, Text, Heading, Button } from 'theme-ui';
import { backgroundImage } from './background-image';
import { mountains } from './mountains';

const Hero = props => (
  <Box 
    bg="sunken" 
    sx={{
      width: '100%',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `${mountains}, ${backgroundImage}, radial-gradient(ellipse at center bottom, #4F3714, #1B1A18)`,
      backgroundPosition: 'center bottom, left top',
      backgroundRepeat: 'repeat-x, repeat',
      backgroundSize: '600px, auto, auto',
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
    <Container as="section" py={5} variant="copy" sx={{position: 'relative'}} {...props}>
      <Image
        src="/logo.png"
        alt="hillsHacks Logo"
        width={600}
        sx={{
          userDrag: 'none',
          WebkitUserDrag: 'none'
        }}
      />
      <Heading my={2} variant="subtitle" color="white"><b>Reaching New Heights</b></Heading>
      <Heading my={2} variant="subtitle" color="white">May 14th, 2022</Heading>
      <Text mt={2} mb={4} sx={{display: "block"}}color="white">In-Person, Watchung Hills Regional High School</Text>
      <Button variant="lg" as="a" target="_blank" my={2}
    href="https://docs.google.com/forms/d/e/1FAIpQLSeEqpDhRwbn8WD1EXS8bAplyi_nqHJ0NdwdCSXQEPzcR5UYvQ/viewform?usp=sf_link">Pre-Register Now!</Button>
    </Container>
  </Box> 
)

export default Hero;