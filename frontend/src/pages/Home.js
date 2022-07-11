import Leaderboard from '../components/Leaderboard/Leaderboard'
import Pie from "../components/Pie";
import { Flex } from '@chakra-ui/react'
import PieMobile from '../components/PieMobile';

const Home = () => {
    return (
        <>
            <Leaderboard visibility={['hidden', 'hidden', 'hidden', 'visible']} />
            <Flex w={["100%", "100%", "100%", "70%"]} h={["80%", "100%"]} mt={["25%", "0%"]} align="center" justify="center" px={[3, 10]}>
                <Pie chartID="pie-pc" />
                <PieMobile chartID="pie-mobile" />
            </Flex>
        </>
    )
}

export default Home