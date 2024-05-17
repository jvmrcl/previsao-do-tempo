import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import ForecastPresentational from './presentational/ForecastPresentational';

const ForecastContainer = ({ city, weatherKeyAPI }) => {
  const [data, setData] = useState({ forecast: null, loading: false, error: null });

  const fetchWeather = useCallback(async () => {
    if (!city) return;
    setData(prevData => ({ ...prevData, loading: true }));

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKeyAPI}&units=metric&lang=pt_br`
      const resp = await axios.get(url);  
      setTimeout(() => {
        return setData({ forecast: resp.data, loading: false, error: null });
      }, 1000);
    }catch(error) {
      if (error.response && error.response.status === 404) 
        setTimeout(() => {
          return setData({ forecast: null, loading: false, error: "Cidade não encontrada!" });
        }, 1000);
    }
  }, [city, weatherKeyAPI]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return <ForecastPresentational {...data} />;
};

export default ForecastContainer;