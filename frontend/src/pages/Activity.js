import { Heading, Stack } from '@chakra-ui/react'
import { CardItem } from '../components/CardItem'
import { EmptyState } from '../components/EmptyState'

const mockActivityData = [
    {
        name: 'Activity1',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    },
    {
        name: 'Activity2',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    }, {
        name: 'Activity3',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    }, {
        name: 'Activity4',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    }, {
        name: 'Activity5',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    }, {
        name: 'Activity6',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    }, {
        name: 'Activity7',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    }, {
        name: 'Activity8',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    }, {
        name: 'Activity9',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    }, {
        name: 'Activity10',
        goal: "1",
        details: 'Activity Details. Activity Details',
        coin: "50"
    },
]
const Activity = () => {
    return (<Stack w="100%" h="95%" px={[5, 5, 5, 12]} py={8} >
        <Heading>Activity</Heading>
        <Stack overflow="scroll">
            {mockActivityData.map(el => (
                <CardItem {...el} />
            ))}
        </Stack>
    </Stack>)
}

export default Activity