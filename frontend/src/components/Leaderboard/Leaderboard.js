import { Stack } from "@chakra-ui/react"
import { Ranking } from "./Ranking"

const Leaderboard = () => {
    return (
        <Stack w="30%" h="90%" bg="bg.light" right={0} pos="absolute" overflowX="hidden" overflowY="scroll" py={5}>
            <Ranking />
        </Stack>
    )
}

export default Leaderboard