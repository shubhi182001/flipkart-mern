import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider className="App">
      <Header/>
      <Box style={{marginTop:54}}>
        <Home/>
      </Box>
    </DataProvider>
  );
}

export default App;
