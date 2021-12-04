/** @jsxRuntime classic */
/** @jsx jsx */
import { 
  jsx,
  Box,
  Heading,
  Text,
  Button, 
  Image,
  Container,
  Grid,
  Card,
  Flex,
  Link
} from 'theme-ui';
import Nav from "../components/nav";
import Hero from "../components/hero";
import React from 'react';

const Index = (props) => (
  <>
    <Nav />
    <Hero />

    <Container id="about" as="section" py={4} variant="copy" {...props}>
      <Heading variant="headline" sx={{fontSize: "40px"}}>This is not your typical hackathon.</Heading>
      <Text as="p" sx={{fontSize: 2}} mb={3}><b>hillsHacks was born with a mission:</b> to show that computer science is something anyone can learn. It's more than memorizing technical jargon and stuffing code into machines. CS is for innovators, creators, problem solvers, artists, and <i>you</i>.</Text>
      <Text as="p" sx={{fontSize: 2}} mb={3}>Rather than leave you alone expecting a full-fledged product launch at the end of the day, we'll guide you through the learning process with <b>workshops</b> from Watchung Hills alumni. Plus, we'll provide you one-on-one <b>mentorship</b> and an opportunity to listen in and ask questions about tech during our <b>Panel Q&A</b> session. Deviating from the traditional hackathon, there will be two tracks: <b>code</b> and <b>no-code</b>, with a greater emphasis on ideas and how technology can be used for good. Participants can win generous cash <b>prizes</b>, too!</Text>
      <Text variant="lead"><b>This is the fifth iteration of hillsHacks, Watchung Hills' premier hackathon open to students grades 6 through 12.</b></Text>
      <br/>
    </Container>
    <Container as="section" py={4} variant="copy" {...props}>
      <Image
        src="/eventPhoto.jpg"
        alt="Event Photo 1"
        mb={2}
        sx={{
          boxShadow: 'card',
          borderRadius: 'extra',
          userDrag: 'none',
          WebkitUserDrag: 'none'
        }}
      />
      <Grid sx={{columnGap: 3}} columns={[1, 2, 2]}>
        <Image
          src="/eventPhoto1.jpg"
          alt="Event Photo 2"        
          sx={{
            boxShadow: 'card',
            borderRadius: 'extra',
            userDrag: 'none',
            WebkitUserDrag: 'none'
          }}
        />
        <Image
          src="/eventPhoto2.png"
          alt="Event Photo 3"
          sx={{
            boxShadow: 'card',
            borderRadius: 'extra',
            userDrag: 'none',
            WebkitUserDrag: 'none'
          }}
        />
      </Grid>
    </Container>
    <Container id="faq" as="section" py={4} {...props}>
      <Heading variant="headline">FAQ</Heading>
      <Grid sx={{columnGap: 4}} columns={[1, null, 2]}>
        <Box>
          <h2>Why come to hillsHacks?</h2>
          <p>Can you spend a day without using some form of technology developed in the last 5 years? It would probably be difficult - technology has completely changed the way we live our lives. Regardless of your experience, you will learn something new at hillsHacks about how computer science is being used all around us - often in things we take for granted! All students grade 6 and up are welcome.</p>
        </Box>
        <Box>
          <h2>Where will the event take place?</h2>
          <p>hillsHacks is returning as a fully in-person event at Watchung Hills Regional High School!</p>
        </Box>
        <Box>
          <h2>When will hillsHacks be?</h2>
          <p>The event will take place on <b>Sunday, February 6th</b> (exact time TBD). We've got an action-packed schedule ahead, so sign up now! {/*(see below for details)*/}</p>
        </Box>
        <Box>
          <h2>How much does this cost?</h2>
          <p>hillsHacks is completely free!</p>
        </Box>
        <Box>
          <h2>What if I don’t know anything about coding or computer science?</h2>
          <p>No problem! We highly encourage beginners to come, and our workshops will give you opportunities to learn about fundamental CS concepts. After creating an idea as part of the no-code hackathon track, you'll be ready to implement it on your own!</p>
        </Box>
        <Box>
          <h2>I’m an expert at coding. What do I get out of this event?</h2>
          <p>Participate in the traditional hackathon track or take a look at some of our advanced workshops! Also, we recommend you to actively engage during our Panel Q&A session (this applies to beginners too!)</p>
        </Box>
        <Box>
          <h2>Can I work as a team?</h2>
          <p>Absolutely! As part of the hackathon you can work solo or in teams of up to four individuals. Teams will be formed prior to the event, so make sure all members sign up!</p>
        </Box>
        <Box>
          <h2>When will registrations open?</h2>
          <p>We will shortly be rolling out the full event registration, but for now you can pre-register so we can notify you when it opens!</p>
        </Box>
        {/*<Box>
          <h2>When do I have to register by?</h2>
          <p>The signup form will remain open until <b>June 4th</b> at noon. This is so we can get a better feel of who will be attending.</p>
        </Box>*/}
      </Grid>
      <br/>
    </Container>
    <Container id="schedule" as="section" sx={{textAlign: "center"}} py={4} {...props}>
      <Heading variant="headline" mb={4}>Schedule</Heading>
      <Text>Coming soon! Check back later for details.</Text>
      {/*<Container variant="copy" sx={{textAlign: "left"}}>
        <Event
          from="1:00" to="1:30"
          name="Opening Ceremony and Panel Discussion"
          description="hillsHacks begins with the opening ceremony, where we'll introduce the theme of the hackathon and go over the schedule for the rest of the event. In the panel discussion, our CS experts will be ready to answer any questions you have about computer science in high school, college, or even in the workplace."
        />
        <Grid gap={4} my={4} columns={[1, null, 2]}>
          <Event
            from="1:30" to="2:15"
            name="Foundational Principles of Computer Science"
            speaker="Jared Pincus"
            description="Computer science is, at its core, a toolset and mindset for modeling and solving problems. In this workshop, we will explore concepts, questions, truths, and areas of theory which comprise this discipline. Get an early look at the principles taught in every collegiate CS curriculum, and learn what it means to think like a computer scientist."
          />
          <Event
            from="2:15" to="3:00"
            name="Estimating Pi using Python"
            speaker="Matt Carbone"
            description="Python is a flexible programming language that can be extremely efficient when implemented properly. In this workshop, we will run through a 'hello world' style example of how one can use Python to compute the constant pi via Monte Carlo sampling."
          />
          <Event
            from="3:05" to="3:50"
            name="Game Console Emulation"
            speaker="Calvin Khiddee-Wu"
            description="Emulators are typically a type of software which allow a host machine to behave like another. In this workshop, we will develop the fundamentals required to start an emulation project by exploring introductory computer system architecture. We will use the GameBoy as a reference to deepen our understanding."
          />
          <Event
            from="3:50" to="4:35"
            name="Web Scraping"
            speaker="James Narayanan"
            description="We’ll first introduce basic Python concepts needed to understand web scraping, then go into Beautiful Soup (a popular web scraping parsing library). We’ll be going through some of the key components of the API, then go into some useful examples that will give ideas for projects to do in the future. If time allows, we’ll also try to go into saving data with Pandas and displaying it with either JavaScript, Matplotlib, or other software."
          />
        </Grid>
        <Event
          mb={4}
          from="4:35" to="4:55"
          name="Presentations"
          description="Present your pitch as part of the hackathon event. Prizes will be awarded to the best projects!"
        />
        <Event
          from="4:55" to="5:00"
          name="Closing Ceremony"
          description="hillsHacks wraps up with an announcement of the winners and distribution of prizes!"
        />
      </Container>*/}
    </Container>
    <Container as="section" py={4} {...props}>
      <Card>
        <Flex sx={{flexWrap: 'wrap'}}>
          <Box sx={{flex: '1 1 auto'}}>
            <Heading as="h1" variant="headline">So...what are you waiting for?</Heading>
            <Heading variant="subtitle">Registration is free and only takes a minute!</Heading>
          </Box>
          <Box sx={{alignSelf: "center"}}>
          {/*<Button variant="lg" as="a" target="_blank"  mr={4}
  href="https://docs.google.com/forms/d/e/1FAIpQLScEaeNmtv_REsOml_Odf0YShWCTSifJbTEXVpzvAyvCXTrzMw/viewform?usp=sf_link">Register Now</Button>*/}
          <Button variant="lg" mr={4}>Registration Opens 12/1</Button>
          </Box>
        </Flex>
      </Card>
    </Container>
    <footer sx={{textAlign: "center", padding: 4}}>
      <Text as="p" mb={2} sx={{fontSize: 1}}>Created with &#x3C;3 by hillsHacks. See the <Link href="https://github.com/googol88/hillshacks-v">source</Link>.</Text>
      <Text as="p" sx={{fontSize: 1, color: "muted"}}>© Copyright 2022 hillsHacks</Text>
    </footer>
  </>
)

export default Index;