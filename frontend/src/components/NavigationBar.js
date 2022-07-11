import React from 'react'
import {
    Text,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { Link, useLocation } from "react-router-dom";
import { ProfileIcon } from './icons/ProfileIcon';
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import Leaderboard from './Leaderboard/Leaderboard';

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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const location = useLocation();
    const btnRef = React.useRef()
    const isHome = location.pathname === '/'
    console.log(location)
    return (
        <>
            <Flex w="100vw" bg="bg.light" pos="fixed" justify="space-between" px={12} h="10vh" border="1px" borderColor="border.light" display={['none', 'none', 'none', 'flex']}>
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
            </Flex >
            <Flex w="100vw" bg="bg.light" pos="fixed" justify="space-between" px={isHome ? 2 : 6} h="10vh" border="1px" borderColor="border.light" display={['flex', 'flex', 'flex', 'none']} align="center">
                <Text fontWeight="semibold" fontSize="xl" color="content.primary" ml={isHome ? 6 : 0}><Link to="/">R2SUS</Link></Text>
                <Flex align="center" gap={1}>
                    {isHome && <><Button bg="none" _hover={{ bg: 'none' }} _active={{ bg: 'none' }} ref={btnRef} onClick={onOpen} p={0}><Image src="/star.png" boxSize={7} /></Button>
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton zIndex={10} />
                                <DrawerBody>
                                    <Leaderboard />
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer></>}
                    <Menu>
                        <MenuButton><Button w={7} bg="none" p={0}><HamburgerIcon boxSize={6} /></Button></MenuButton>
                        <MenuList zIndex={999}>
                            {paths.map(path => (
                                <Link to={path.route} key={path.name}> <MenuItem zIndex={100}>{path.name}</MenuItem></Link>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </>
    )
}

export default NavigationBar