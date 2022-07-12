import { Heading, Stack } from '@chakra-ui/react'
import { CardItem } from '../components/CardItem'
import { EmptyState } from '../components/EmptyState'

const mockClassData = [
    {
        name: 'Class1',
        goal: "1",
        details: 'Class Details. Class Details.',
        coin: "20"
    },
    {
        name: 'Class2',
        goal: "1",
        details: 'Class Details. Class Details. ',
        coin: "20"
    },
    {
        name: 'Class3',
        goal: "1",
        details: 'Class Details. Class Details.',
        coin: "20"
    },
    {
        name: 'Class4',
        goal: "1",
        details: 'Class Details. Class Details. ',
        coin: "20"
    },
    {
        name: 'Class5',
        goal: "1",
        details: 'Class Details. Class Details.',
        coin: "20"
    },
    {
        name: 'Class6',
        goal: "1",
        details: 'Class Details. Class Details. ',
        coin: "20"
    },
    {
        name: 'Class7',
        goal: "1",
        details: 'Class Details. Class Details.',
        coin: "20"
    },
    {
        name: 'Class8',
        goal: "1",
        details: 'Class Details. Class Details. ',
        coin: "20"
    },
    {
        name: 'Class9',
        goal: "1",
        details: 'Class Details. Class Details.',
        coin: "20"
    },
    {
        name: 'Class10',
        goal: "1",
        details: 'Class Details. Class Details. ',
        coin: "20"
    }
]
const Class = () => {
    return (
        <Stack w="100%" h="95%" px={[5, 5, 5, 12]} py={8} >
            <Heading>Class</Heading>
            <Stack overflow="scroll">
                {mockClassData.map(el => (
                    <CardItem {...el} />
                ))}
            </Stack>
        </Stack>
    )
}

export default Class