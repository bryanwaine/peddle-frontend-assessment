/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Repository = ({
  avatar,
  name,
  description,
  stars,
  issues,
  created_at,
  login,
  url
}) => {
  const dateDifference = (date) => {
    const date1 = new Date(date);
    const date2 = new Date();

    // To calculate the time difference of two dates
    const Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    //To display the final no. of days (result)
    return Difference_In_Days.toFixed();
  };

  return (
    <Card
      raised
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '15rem',
        width: '100%',
        padding: '1rem',
      }}
    >
      {/* Repository Avatar */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 3rem 0 0',
        }}
      >
        <img
          src={avatar}
          width={200}
          height={200}
          alt={login}
          style={{ borderRadius: '.5rem' }}
        />
      </Box>
      {/* Repository Details */}
      <Box
        sx={{
          flex: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='regular'
          sx={{
            fontSize: '2rem',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          <a href={url} target="_blank" rel="noreferrer">{name}</a>
          
        </Typography>
        <Typography
          variant='regular'
          sx={{
            fontSize: '.9rem',
            fontWeight: '300',
            margin: '.5rem 0',
          }}
        >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', margin: '.5rem 0' }}>
          <Typography
            variant='regular'
            sx={{
              borderRadius: '.2rem',
              background: '#000000',
              color: '#ffffff',
              width: '6rem',
              margin: '0 1rem 0 0',
              padding: '.5rem',
              fontSize: '.7rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Stars:&nbsp;{stars}
          </Typography>
          <Typography
            variant='regular'
            sx={{
              borderRadius: '.2rem',
              background: '#000000',
              color: '#ffffff',
              width: '6rem',
              margin: '0 1rem 0 0',
              padding: '.5rem',
              fontSize: '.7rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Issues:&nbsp;{issues}
          </Typography>
          <Typography
            variant='regular'
            sx={{
              borderRadius: '.2rem',
              margin: '0 1rem 0 0',
              padding: '.5rem',
              fontSize: '.7rem',
            }}
          >
            Submitted&nbsp;
            {dateDifference(created_at)}&nbsp;
            {dateDifference(created_at) < 1
              ? `days`
              : dateDifference(created_at) > 1
              ? `days`
              : `day`}
            &nbsp;ago by&nbsp;
            <span
              style={{
                background: '#dddddd',
                padding: '.2rem .3rem',
              }}
            >
              {login}
            </span>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default Repository;
