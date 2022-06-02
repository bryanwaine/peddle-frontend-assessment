import { Box } from '@mui/material';

const Blue70 = ({ showContact }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '15rem',
        left: '75vw',
        height: '70px',
        width: '70px',
        borderRadius: '50px',
        backgroundImage:
          'linear-gradient(177deg, rgba(33, 63, 114, 1) 0%,rgba(12, 1, 35, 0.5) 75%,  rgba(12, 1, 35, 1) 100%)',
        backgroundSize: '100px 100px',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
      }}
      className={`blueDiv ${showContact}`}
    />
  );
};

const Blue150 = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '12rem',
        right: '2rem',
        height: '150px',
        width: '150px',
        borderRadius: '80px',
        backgroundImage:
          'linear-gradient(177deg, rgba(33, 63, 114, 1) 0%,rgba(12, 1, 35, 0.5) 75%,  rgba(12, 1, 35, 1) 100%)',
        backgroundSize: '150px 150px',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
      }}
    />
  );
};

const Purple100 = ({ showContact }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '8rem',
        left: '10rem',
        height: '100px',
        width: '100px',
        borderRadius: '50px',
        backgroundImage:
          'linear-gradient(177deg, rgba(127, 30, 123, 1) 0%, rgba(12, 1, 35, 0.3) 75%, rgba(12, 1, 35, 1) 100%)',
        backgroundSize: '100px 100px',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
      }}
      className={`purple100 ${showContact}`}
    />
  );
};


const Brown120 = ({ showContact }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '36.5rem',
        left: '30vw',
        height: '120px',
        width: '120px',
        borderRadius: '60px',
        backgroundImage:
          'linear-gradient(177deg, #7F4129 0%, rgba(12, 1, 35, 1) 100%)',
        backgroundSize: '120px 120px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        opacity: 0.8,
      }}
      className={`brown120 ${showContact}`}
    />
  );
};

export { Blue70, Blue150, Purple100, Brown120 };
