import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
   const { data, isLoading, errorMessage } = useOpenWeather({
      key: '2c5537d25374c6991242c64f41f61294',
      lat: '23.777176',
      lon: '90.399452',
      lang: 'en',
      unit: 'metric', // values are (metric, standard, imperial)
   });
   const customStyles = {
      fontFamily: 'Helvetica, sans-serif',
      gradientStart: '#0181C2',
      gradientMid: '#04A7F9',
      gradientEnd: '#4BC4F7',
      locationFontColor: '#FFF',
      todayTempFontColor: '#FFF',
      todayDateFontColor: '#B5DEF4',
      todayRangeFontColor: '#B5DEF4',
      todayDescFontColor: '#B5DEF4',
      todayInfoFontColor: '#B5DEF4',
      todayIconColor: '#FFF',
      forecastBackgroundColor: '#FFF',
      forecastSeparatorColor: '#DDD',
      forecastDateColor: '#777',
      forecastDescColor: '#777',
      forecastRangeColor: '#777',
      forecastIconColor: '#4BC4F7',
   };
   return (
      <div className='App'>
         <h3>Weather</h3>
         <ReactWeather
            theme={customStyles}
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Dhaka"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
         />
      </div>
   );
};

export default Weather;