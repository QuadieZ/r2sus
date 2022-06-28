import { Box } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Class from './pages/Class';
import Home from './pages/Home';

function App() {
  return (
    <Box w="100vw" h="100vh" bgGradient="linear(to-b, brand.secondary, brand.primary)" pos="absolute" top={0} right={0}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<Class />} />
      </Routes>
    </Box>
  );
}

export default App;
