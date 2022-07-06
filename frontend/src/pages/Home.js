import Leaderboard from '../components/Leaderboard/Leaderboard'
import Pie from "../components/Pie";
import { Flex } from '@chakra-ui/react'

const Home = () => {
    return (
        <>
            <Leaderboard />
            <Flex w="70%" h="100%" align="center" justify="center">
                <Pie chartID="pie-two" />
            </Flex>
        </>
    )
}

export default Home