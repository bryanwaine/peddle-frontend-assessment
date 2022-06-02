import { Box } from '@mui/material';

const FooterDome = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '39.5rem',
        left: '11rem',
        background: 'transparent',
        width: '1000px',
        height: '200px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          borderRadius: '50%',
          width: '1500px',
          height: '1500px',
          background:
            'transparent linear-gradient(180deg, rgba(112, 112, 112, 0.2) 0%,rgba(0, 0, 0, 1) 100%)',
          opacity: 0.8,
          webkitBackdropFilter: 'blur(27px)',
          mozBackdropFilter: 'blur(27px)',
          backdropFilter: 'blur(27px)',
          position: 'absolute',
          left: '-250px',
          top: '10px',
          border: '1px solid #ffffff',
        }}
      />
    </Box>
  );
};

const LeftTransDiv = () => {
  return (
    <Box
      sx={{
        width: '60%',
        height: '30rem',
        background:
          'transparent linear-gradient(180deg, rgba(127, 30, 123, 0.1) 0%, rgba(127, 30, 123, 0.1) 100%)',
        opacity: 0.9,
        webkitBackdropFilter: 'blur(16px)',
        mozBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
        boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.20)',
        position: 'absolute',
        left: '0',
        top: '7rem',
        zIndex: 1,
      }}
    />
  );
};

const LeftWhiteDiv = () => {
  return (
    <Box
      sx={{
        width: '15rem',
        height: '20rem',
        background:
          ' transparent linear-gradient(180deg, rgba(127, 30, 123, 1) 0%, rgba(25, 7, 59, 1) 100%)',
        filter: 'blur(5px)',
        position: 'absolute',
        left: '31rem',
        top: '11rem',
        zIndex: 0,
      }}
    />
  );
};

const RightTransDiv = () => {
  return (
    <Box
      sx={{
        width: '45%',
        height: '22rem',
        background:
          'transparent linear-gradient(180deg, rgba(127, 30, 123, 0.1) 0%, rgba(127, 30, 123, 0.1) 100%)',
        opacity: 0.9,
        webkitBackdropFilter: 'blur(16px)',
        mozBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
        boxShadow: '-2px 2px 5px 1px rgba(0,0,0,0.20)',
        position: 'absolute',
        right: '0',
        top: '60rem',
        zIndex: 1,
      }}
    />
  );
};

const RightWhiteDiv = () => {
  return (
    <Box
      sx={{
        width: '13rem',
        height: '18rem',
        background:
          ' transparent linear-gradient(180deg, rgba(33, 63, 114, 1) 0%, rgba(25, 7, 59, 1) 100%)',
        filter: 'blur(5px)',
        position: 'absolute',
        right: '15rem',
        top: '62rem',
        zIndex: 0,
      }}
    />
  );
};

const BottomTransDiv = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '21rem',

        background:
          'transparent linear-gradient(180deg, rgba(127, 30, 123, 0.1) 0%, rgba(127, 30, 123, 0.1) 100%)',
        opacity: 0.9,
        webkitBackdropFilter: 'blur(16px)',
        mozBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
        boxShadow: '-2px 2px 5px 1px rgba(0,0,0,0.20)',
        position: 'absolute',
        right: '0',
        top: '95rem',
        zIndex: 100,
      }}
    />
  );
};

const BrownDiv = () => {
  return (
    <Box
      sx={{
        width: '25rem',
        height: '15rem',
        background:
          ' transparent linear-gradient(180deg, #7F4129 0%, rgba(25, 7, 59, 1) 100%)',
        filter: 'blur(5px)',
        position: 'absolute',
        right: '5rem',
        top: '98rem',
        zIndex: 0,
      }}
    />
  );
};

export {
  FooterDome,
  LeftTransDiv,
  LeftWhiteDiv,
  RightTransDiv,
  RightWhiteDiv,
  BottomTransDiv,
  BrownDiv,
};
