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
    }}
    {...props}
  >
    <Container as="section" py={5} variant="copy" sx={{position: 'relative'}} {...props}>
      <Image
        src="/logo-v.png"
        alt="hillsHacks Logo"
        width={500}
        sx={{
          userDrag: 'none',
          WebkitUserDrag: 'none',
        }}
      />
      <Heading my={2} variant="subtitle" color="white" sx={{textShadow: "0 0 32px #000"}}><b>Reaching New Heights</b></Heading>
      <Heading my={2} variant="subtitle" color="white" sx={{textShadow: "0 0 32px #000"}}>May 14th, 2022</Heading>
      <Text mt={2} mb={4} sx={{display: "block", textShadow: "0 0 32px #000"}} color="white">In-Person, Watchung Hills Regional High School</Text>
      <Button variant="lg" as="a" target="_blank" my={2}
    href="https://docs.google.com/forms/d/e/1FAIpQLSeEqpDhRwbn8WD1EXS8bAplyi_nqHJ0NdwdCSXQEPzcR5UYvQ/viewform?usp=sf_link">Pre-Register Now!</Button>
    </Container>
  </Box> 
)

export default Hero;