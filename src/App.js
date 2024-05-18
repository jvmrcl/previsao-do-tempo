import { useRef, useState } from 'react'
import Forecast from './components/Forecast';

import { Container, FormControl, IconButton, Box, Input, Link, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import RoomIcon from '@mui/icons-material/Room';

const App = () => {
  const [city, setCity] = useState();
  const refCity = useRef();

  const captureCity = (e) => {
    e.preventDefault();

    const value = refCity.current.childNodes[1].value
    
    // Filters input to prevent blanks from being typed or malicious scripts from being inserted.
    const regex = /^$|^.*(<\s*script\s*>)|^.*(<\s*\/\s*script\s*>).*$/;

    if(regex.test(value.trim())) 
      return alert("Informe o nome de uma cidade!");
    setCity(value);
    
    // Selects the input element and resets its value after searching.
    refCity.current.childNodes[1].value = null;
  }

  return (
    <Container maxWidth='sm' sx={{marginTop: 4}}>
      <Box maxWidth='100%' marginBottom={5}>
        <FormControl sx={{width: '100%'}}>
          <Input
            ref={refCity}
            type='text'
            placeholder='Por qual cidade você gostaria de pesquisar?'
            aria-label='Input destinado a obter o nome da cidade'
            startAdornment={
              <IconButton edge='start'>
                <RoomIcon />
              </IconButton>
            }
            endAdornment={
              <IconButton edge='end' onClick={captureCity}>
                <Search /> 
              </IconButton>
            }
          />
          <Forecast city={city} weatherKeyAPI={process.env.REACT_APP_WEATHER_KEY_API} />
        </FormControl>
      </Box>
      <Link textAlign={'center'} href="https://github.com/jvmrcl" target="_blank" rel="noopener noreferrer">
        <Typography variant="body1" color="inherit">
          © 2024 Criado por João Marcon. Todos os direitos reservados.
        </Typography>
      </Link>
    </Container>
  )
}

export default App
