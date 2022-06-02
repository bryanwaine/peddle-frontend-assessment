import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const DateTimeDisplay = ({ value, type }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ffffff',
        margin: '0 5px',
        borderRadius: '5px',
        padding: '20px 0 10px',
        width: '70px',
      }}
    >
      <Typography
        variant='bold'
        sx={{ color: '#000000', fontSize: '30px', margin: 0 }}
      >
        {value}
      </Typography>
      <Typography
        variant='regular'
        sx={{ color: '#000000', margin: 0, fontSize: '10px', fontWeight: 500 }}
      >
        {type}
      </Typography>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        margin: '10px 0',
      }}
    >
      <DateTimeDisplay value={days} type={'Days'} />
      <p></p>
      <DateTimeDisplay value={hours} type={'Hours'} />
      <p></p>
      <DateTimeDisplay value={minutes} type={'Minutes'} />
      <p></p>
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </Box>
  );
};

const EIGHT_DAYS_IN_MS = 8 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfter8Days = NOW_IN_MS + EIGHT_DAYS_IN_MS;

const CountDownTimer = () => {
  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfter8Days);

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountDownTimer;
