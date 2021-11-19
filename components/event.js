import { Card, Heading, Text } from 'theme-ui';

const Event = ({ from, to, name, speaker, description, ...props }) => {
  return (
    <Card {...props}>
      <Text color="muted">{from}-{to}</Text>
      <Heading as="h2" mb={speaker ? 1 : 2} variant="subheadline">{name}</Heading>
      {speaker && <Heading as="h3" mb={2} sx={{fontSize: 2, fontWeight: "normal"}}>{speaker}</Heading>}
      {description && <Text as="p">{description}</Text>}
    </Card>
  )
}

export default Event;
