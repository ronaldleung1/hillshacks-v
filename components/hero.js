import { Box, Image, Container, Heading, Button } from 'theme-ui';
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
        width={600}
        sx={{
          userDrag: 'none',
          WebkitUserDrag: 'none',
          marginBottom: '-64px',
        }}
      />
      <Heading mt={16} variant="subtitle" color="white" sx={{textShadow: "0 0 16px #000"}}><b>Reaching New Heights</b></Heading>
      <Heading variant="subtitle" color="white" sx={{textShadow: "0 0 16px #000"}}>Spring 2022</Heading>
      <Button variant="lg" as="a" target="_blank" my={2}
    href="https://docs.google.com/forms/d/e/1FAIpQLSeEqpDhRwbn8WD1EXS8bAplyi_nqHJ0NdwdCSXQEPzcR5UYvQ/viewform?usp=sf_link">Pre-Register Now!</Button>
    </Container>
  </Box> 
)

export default Hero;