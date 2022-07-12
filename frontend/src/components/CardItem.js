import { Flex, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"

export const CardItem = (props) => {
    const { name, goal, details, coin } = props
    return (
        <HStack h="25%" w="100%" bg="bg.light" border="1px" borderColor="brand.primary" px={3} py={3} gap={3} cursor="pointer">
            <Image src={'https://picsum.photos/400/400'} height="100%" />
            <Stack w="100%">
                <HStack w="100%" justify="space-between">
                    <Text fontSize="xs">SDGs {goal}</Text>
                    <HStack >
                        <Image src="/sus.png" height="3vh" />
                        <Heading fontSize="xs">{coin}</Heading>
                    </HStack>
                </HStack>
                <Heading fontSize="lg">{name}</Heading>
                <Text fontSize="sm">{details}</Text>
            </Stack >
        </HStack >
    )
}