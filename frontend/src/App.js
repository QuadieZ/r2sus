import { Box } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';

import { Home, Class, Activity, Marketplace, About, Profile } from './pages'

function App() {
  return (
    <Box w="100vw" h="100vh" bgGradient="linear(to-b, brand.secondary, brand.primary)" pos="absolute" top={0} right={0}>
      <NavigationBar />
      <Box w="100vw" h="100%" pt="10vh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
