import { Image, Flex, Text } from '@chakra-ui/react'

export const EmptyState = () => {
    return (
        <Flex w="100%" h="100%" align="center" justify="center" flexDir="column" gap={10} p={5}>
            <Image src="/empty.png" h={["70vw", "50vh"]} w={["70vw", "50vh"]} bg="bg.light" borderRadius="full" p={[5, 10]} objectFit="contain" />
            <Text fontWeight="medium" fontSize="3xl" color="content.contrast" textAlign="center">This Feature is coming soon! Stay tune :)</Text>
        </Flex>
    )
}