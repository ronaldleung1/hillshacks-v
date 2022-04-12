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
  Link,
} from 'theme-ui'

import React from 'react'

import Faq from '../components/accordion'
import Nav from '../components/nav'
import Hero from '../components/hero'

const Index = props => (
  <>
    <Nav />
    <Hero />
    <Container as="section" mt={4} variant="copy" {...props}></Container>
    <Container id="about" as="section" py={4} variant="copy" {...props}>
      <Heading variant="headline" sx={{ fontSize: '40px' }}>
        This is not your typical hackathon.
      </Heading>
      <Text as="p" sx={{ fontSize: 2 }} mb={3}>
        <b>hillsHacks was born with a mission:</b> to show that computer science
        is something anyone can learn. It's more than memorizing technical
        jargon and stuffing code into machines. CS is for innovators, creators,
        problem solvers, artists, and <i>you</i>.
      </Text>
      <Text as="p" sx={{ fontSize: 2 }} mb={3}>
        Rather than leave you alone expecting a full-fledged product launch at
        the end of the day, we'll guide you through the learning process with{' '}
        <b>workshops</b> from Watchung Hills alumni. Plus, we'll provide you
        one-on-one <b>mentorship</b> and an opportunity to listen in and ask
        questions about tech during our <b>Panel Q&A</b> session. Deviating from
        the traditional hackathon, there will be a no-code{' '}
        <b>design challenge</b>, with a greater emphasis on ideas and how
        technology can be used for good. Participants can win generous cash{' '}
        <b>prizes</b>, too!
      </Text>
      <Text variant="lead">
        <b>
          This is the fifth iteration of hillsHacks, Watchung Hills' premier
          hackathon open to students grades 6 through 12.
        </b>
      </Text>
      <br />
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
          WebkitUserDrag: 'none',
        }}
      />
      <Grid sx={{ columnGap: 3 }} columns={[1, 2, 2]}>
        <Image
          src="/eventPhoto1.jpg"
          alt="Event Photo 2"
          sx={{
            boxShadow: 'card',
            borderRadius: 'extra',
            userDrag: 'none',
            WebkitUserDrag: 'none',
          }}
        />
        <Image
          src="/eventPhoto2.png"
          alt="Event Photo 3"
          sx={{
            boxShadow: 'card',
            borderRadius: 'extra',
            userDrag: 'none',
            WebkitUserDrag: 'none',
          }}
        />
      </Grid>
    </Container>
    <Container as="section" variant="copy" py={4} {...props}>
      <Card>
        <Heading variant="headline" sx={{fontSize: "40px"}}>Details</Heading>
        <br></br>
        <Text><b>Where:</b> Watchung Hills Regional High School (108 Stirling Rd, Warren, NJ 07059)</Text><br/><br/>
        <Text><b>When:</b> May 14th, 2022</Text><br/><br/>
        <Text><b>Cost:</b> There will be an entry fee of $10. Tickets can be purchased online or paid at the door.</Text><br/><br/>
        <Text><b>Who:</b> All middle and high school students are welcome to attend, regardless of experience!</Text>
      </Card>
    </Container>
    <Container id="faq" as="section" py={4} {...props}>
      <Heading variant="headline">FAQ</Heading>
      <Faq />
      <br />
    </Container>

    <Container
      id="schedule"
      as="section"
      sx={{ textAlign: 'center' }}
      py={4}
      {...props}
    >
      <Heading variant="headline" mb={4}>
        Schedule
      </Heading>
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
    <Container
      id="Sponsors"
      as="section"
      sx={{ textAlign: 'center' }}
      py={4}
      {...props}
    >
      <Heading variant="headline" mb={4}>
        Sponsors
      </Heading>
      <Text>Interested in sponsoring? Shoot us an email at <Link href="mailto:sponsor@hillshacks.com">sponsor@hillshacks.com</Link>!</Text>
    </Container>
    <Container as="section" py={4} {...props}>
      <Card>
        <Flex sx={{ flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <Heading as="h1" variant="headline">
              So...what are you waiting for?
            </Heading>
            <Heading variant="subtitle">
              Registration is free and only takes a minute!
            </Heading>
          </Box>
          <Box sx={{ alignSelf: 'center' }}>
            <Button
              variant="lg"
              as="a"
              target="_blank"
              mr={4}
              href="https://docs.google.com/forms/d/e/1FAIpQLSeEqpDhRwbn8WD1EXS8bAplyi_nqHJ0NdwdCSXQEPzcR5UYvQ/viewform?usp=sf_link"
            >
              Pre-Register Now
            </Button>
          </Box>
        </Flex>
      </Card>
    </Container>
    <footer sx={{ textAlign: 'center', padding: 4 }}>
      <Text as="p" mb={2} sx={{ fontSize: 1 }}>
        Previous years:{' '}
        <Link href="https://2021.hillshacks.com/" ml={2}>
          2021
        </Link>{' '}
        | <Link href="https://2020.hillshacks.com/">2020</Link> |{' '}
        <Link href="https://2019.hillshacks.com/">2019</Link> |{' '}
        <Link href="https://github.com/googol88/hillshacks-v">2018</Link>
      </Text>
      <Text as="p" mb={2} sx={{ fontSize: 1 }}>
        Created with &#x3C;3 by the Watchung Hills CS Club. See the{' '}
        <Link href="https://github.com/googol88/hillshacks-v">source</Link>.
      </Text>
      <Text as="p" sx={{ fontSize: 1, color: 'muted' }}>
        © Copyright 2022 hillsHacks
      </Text>
    </footer>
  </>
)

export default Index
