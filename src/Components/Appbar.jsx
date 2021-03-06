import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Container, Text, Button } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';

const Appbar = () => {

    const navigate = useNavigate();

    // ! States
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem("anime-facts-jwt-token")));
    },[])

    function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("anime-facts-jwt-token");
        navigate("/login");
    }

    return (
        <Box boxShadow="sm" py="2">
            <Container maxW="container.xl" display="flex">
                <Link to="/">
                <Text fontSize="2xl" color="red.500"
                fontWeight="600">
                    AnimeFacts
                </Text>
                </Link>

                {!currentUser &&
                <Box ml="auto">
                    <Link to="/login">
                    <Button>Login</Button>
                    </Link>
                </Box>}

                {currentUser &&
                <Box ml="auto">
                <Menu>
                <MenuButton as={Button}>
                    Settings
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={handleLogout} color="red.500">Logout</MenuItem>
                </MenuList>
                </Menu>
                </Box>}
            </Container>
        </Box>
    );
}
 
export default Appbar;