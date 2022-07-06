import { Image, Flex, Text } from '@chakra-ui/react'

export const EmptyState = () => {
    return (
        <Flex w="100%" h="100%" align="center" justify="center" flexDir="column" gap={10}>
            <Image src="/empty.png" height="60%" bg="bg.light" borderRadius="full" p={10} />
            <Text fontWeight="medium" fontSize="3xl" color="content.contrast">This Feature is coming soon! Stay tune :)</Text>
        </Flex>
    )
}