import { Box, Container, List, ListItem, ListItemText, Typography, CircularProgress, ListItemIcon, Divider } from "@mui/material";
import MoodBadIcon from '@mui/icons-material/MoodBad';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterIcon from '@mui/icons-material/Water';
import Air from "@mui/icons-material/Air";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const ForecastPresentational = ({ forecast, loading, error }) => {
  return (
    <Container>
      <Box>
        {loading ? (
          <Box display={'flex'} alignItems={'center'} gap={2} mt={5}>
            <Typography>Carregando</Typography>
            <CircularProgress size={25} /> 
          </Box>
        ) : error ? (
          <Box 
            color={'#ffff'}
            padding={2}
            mt={5} display={'flex'} 
            alignItems={'center'}
            gap={1} 
            backgroundColor={'#DB4437'}
          >
            <MoodBadIcon /> 
            <Typography >{error}</Typography>
          </Box>
        ) : !forecast ? null : (
          <>
            <Container style={{
              marginTop: '2rem',
              border: '1px solid rgba(0,0,0,0.3',
              padding: 5, 
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
            }}>
              <Typography fontWeight={600} variant="h6">Resultados para {forecast.name}</Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <DeviceThermostatIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Temperatura: ${Math.round(forecast.main.temp)} °C`} />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <CloudQueueIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Clima: ${forecast.weather[0].description}`} />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <WaterIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Umidade: ${forecast.main.humidity}%`} />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <Air />
                    </ListItemIcon>
                    <ListItemText primary={`Velocidade do Vento: ${forecast.wind.speed} m/s`} />
                  </ListItem>
                </List>
            </Container>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ForecastPresentational;