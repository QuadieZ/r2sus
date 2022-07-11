import { Stack } from "@chakra-ui/react"
import { Ranking } from "./Ranking"

const Leaderboard = (props) => {
    const { ...rest } = props
    return (
        <Stack w={["100%", "100%", "100%", "30%"]} h="90%" bg="bg.light" right={0} pos="absolute" overflowX="hidden" overflowY="scroll" py={5} {...rest}>
            <Ranking />
        </Stack>
    )
}

export default Leaderboard