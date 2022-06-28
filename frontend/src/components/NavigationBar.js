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
        <Flex w="100vw" bg="bg.light" pos="absolute" justify="space-between" px={12} py={4}>
            <Flex align="center" gap={10}>
                <Text fontWeight="semibold" fontSize="lg" color="content.primary">R2SUS</Text>
                <NavigationSearchBar />
            </Flex>
            <Flex align="center" gap={12}>
                {paths.map(el => (
                    <Link to={el.route}><Text fontWeight="medium" fontSize="sm" color="content.primary">{el.name}</Text></Link>
                ))}
                <Link to="/profile"><ProfileIcon boxSize={6} color="content.primary" /></Link>
            </Flex>
        </Flex >)
}

export default NavigationBar