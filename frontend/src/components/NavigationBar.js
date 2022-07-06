import { Text, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { ProfileIcon } from './icons/ProfileIcon';
import { Search2Icon } from '@chakra-ui/icons'

const paths = [
    {
        name: 'Class',
        route: '/class'
    },
    {
        name: 'Activity',
        route: '/activity'
    },
    {
        name: 'Marketplace',
        route: '/marketplace'
    },
    {
        name: 'About Us',
        route: '/about'
    },
]

const NavigationSearchBar = () => {
    return (
        <InputGroup size="sm">
            <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color="content.primary" ml={2} />}
            />
            <Input borderRadius="full" size="sm" borderColor="content.primary" borderWidth="1.5px" focusBorderColor="brand.primary" _focus={{ borderWidth: "1px" }} />
        </InputGroup>
    )
}

const NavigationBar = () => {
    return (
        <Flex w="100vw" bg="bg.light" pos="fixed" justify="space-between" px={12} h="10vh" border="1px" borderColor="border.light">
            <Flex align="center" gap={10}>
                <Link to="/"><Text fontWeight="semibold" fontSize="xl" color="content.primary">R2SUS</Text></Link>
                <NavigationSearchBar />
            </Flex>
            <Flex align="center" gap="5vw">
                {paths.map(el => (
                    <Link to={el.route} key={el.name}><Text fontWeight="medium" fontSize="md" color="content.primary" _hover={{ letterSpacing: 1, transition: '0.3s' }}>{el.name}</Text></Link>
                ))}
                <Link to="/profile"><ProfileIcon boxSize={7} color="content.primary" /></Link>
            </Flex>
        </Flex >)
}

export default NavigationBar