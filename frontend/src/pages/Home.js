import Leaderboard from '../components/Leaderboard/Leaderboard'
import Pie from "../components/Pie";
import { Flex, Heading, HStack, Image, Stack } from '@chakra-ui/react'
import PieMobile from '../components/PieMobile';

const Home = () => {
    return (
        <>
            <Leaderboard visibility={['hidden', 'hidden', 'hidden', 'visible']} />

            <Stack w={["100%", "100%", "100%", "70%"]} h={["80%", "100%"]} mt={["15%", "0%"]} align="center" justify="center" px={[3, 10]} py={[0, 10]}>
                <HStack w="100%" justify="space-between" px={[3, 5]}>
                    <HStack gap={1}>
                        <Image src="/sus.png" height="5vh" />
                        <Stack >
                            <Heading fontSize="xs">SUS Coin</Heading>
                            <Heading fontSize="xs">12</Heading>
                        </Stack>
                    </HStack>
                    <Heading>Faculty</Heading>

                </HStack>
                <Pie chartID="pie-pc" />
                <PieMobile chartID="pie-mobile" />
                <HStack w="100%" bg="bg.light" px={5} py={3} mx={[3, 5]} borderRadius={10} justify="space-between">
                    <Heading fontSize="md">Faculty of Engineering</Heading>
                    <Heading fontSize="md">12 000</Heading>
                </HStack>
            </Stack>
        </>
    )
}

export default Home