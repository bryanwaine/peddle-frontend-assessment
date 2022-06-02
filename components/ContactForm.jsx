import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { yupResolver } from '@hookform/resolvers/yup';

import { theme } from '../components/Theme';

const ContactForm = ({
  showContact,
  setShowContact,
  translateLogo,
  setTranslateLogo,
}) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('firstName is required')
      .min(2, 'firstName is not valid'),
    lastName: Yup.string()
      .required('lastName is required')
      .min(2, 'lastName is not valid'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is not valid'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    control,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <Box
      sx={{
        position: 'absolute',
        background:
          'transparent linear-gradient(180deg,rgba(28, 12, 40, 0.1) 0%,rgba(0, 0, 0, 1) 100%)',
        webkitBackdropFilter: 'blur(17px)',
        mozBackdropFilter: 'blur(17px)',
        BackdropFilter: 'blur(17px)',
        minHeight: '52rem',
        top: 0,
        left: 0,
        width: '84rem',
      }}
      className={`contact ${showContact}`}
    >
      <Box
        sx={{
          position: 'relative',
          top: 0,
          left: '48vw',
          width: '43rem',
          minHeight: '52rem',
          background:
            'transparent linear-gradient(180deg, rgba(33, 0, 69, 1) 0%, rgba(12, 1, 35, 1) 100%) 0% 0% no-repeat padding-box',
          opacity: 1,
        }}
      >
        <form
          onSubmit={() => alert('submitted')}
          style={{
            width: '80%',
            margin: '0 auto',
            padding: '40px 0 0 0',
          }}
        >
          <Box>
            <List
              style={{
                width: '100%',
                margin: '20px auto 0',
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
            >
              <ListItem
                sx={{
                  margin: '0 0 22px 0',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant='regular'
                  style={{
                    margin: '0',
                    fontSize: '25px',
                    fontWeight: 500,
                  }}
                >
                  Hey, we are still in the works, <br /> but you can send us a
                  message!
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  margin: '0 0 22px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  zIndex: 1,
                }}
              >
                <Typography variant='regular' style={{ margin: '0 0 .5rem 0' }}>
                  First Name
                </Typography>
                <Controller
                  name='firstName'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      InputProps={{
                        style: {
                          color: '#ffffff',
                          fontFamily: 'Poppins',
                          fontSize: '10px',
                          color: '#666666',
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: '#ffffff',
                          fontFamily: 'Poppins',
                          fontSize: '10px',
                          color: '#666666',
                        },
                      }}
                      variant='outlined'
                      fullWidth
                      id='firstName'
                      label='Enter your First Name...'
                      inputProps={{ type: 'text' }}
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName?.message}
                      {...field}
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: '1px solid #ffffff',
                          borderRadius: '10px',
                          background: '#ffffff',
                          height: ' 3.5rem',
                        },
                      }}
                    />
                  )}
                />
              </ListItem>
              <ListItem
                sx={{
                  margin: '0 0 22px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
              >
                <Typography variant='regular' style={{ margin: '0 0 .5rem 0' }}>
                  Last Name
                </Typography>
                <Controller
                  name='lastName'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      InputProps={{
                        style: {
                          color: '#ffffff',
                          fontFamily: 'Poppins',
                          fontSize: '10px',
                          color: '#666666',
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: '#ffffff',
                          fontFamily: 'Poppins',
                          fontSize: '10px',
                          color: '#666666',
                        },
                      }}
                      variant='outlined'
                      fullWidth
                      id='lastName'
                      label='Enter Your Last Name...'
                      inputProps={{ type: 'text' }}
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName?.message}
                      {...field}
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: '1px solid #ffffff',
                          borderRadius: '10px',
                          background: '#ffffff',
                          height: ' 3.5rem',
                        },
                      }}
                    />
                  )}
                />
              </ListItem>

              <ListItem
                sx={{
                  margin: '0 0 22px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
              >
                <Typography variant='regular' style={{ margin: '0 0 .5rem 0' }}>
                  Email Address
                </Typography>
                <Controller
                  name='email'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      InputProps={{
                        style: {
                          color: '#666666',
                          borderColor: '#ffffff',
                          fontFamily: 'Poppins',
                          fontSize: '10px',
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: '#666666',
                          fontFamily: 'Poppins',
                          fontSize: '10px',
                        },
                      }}
                      variant='outlined'
                      fullWidth
                      id='email'
                      label='Enter Your Email Address...'
                      inputProps={{ type: 'email' }}
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                      {...field}
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: '1px solid #ffffff',
                          borderRadius: '10px',
                          background: '#ffffff',
                          height: ' 3.5rem',
                        },
                      }}
                    />
                  )}
                />
              </ListItem>
              <ListItem
                sx={{
                  margin: '0 0 22px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
              >
                <Typography variant='regular' style={{ margin: '0 0 .5rem 0' }}>
                  Tell Us What You Need Help With:
                </Typography>
                <Controller
                  name='email'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      InputProps={{
                        style: {
                          color: '#666666',
                          borderColor: '#ffffff',
                          fontFamily: 'Poppins',
                          fontSize: '10px',
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: '#666666',
                          fontFamily: 'Poppins',
                          fontSize: '10px',
                        },
                      }}
                      multiline={true}
                      minRows={5}
                      variant='outlined'
                      fullWidth
                      id='email'
                      label='Enter a topic like "Channel Problem..."'
                      inputProps={{ type: 'email' }}
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                      {...field}
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: '1px solid #ffffff',
                          borderRadius: '10px',
                          background: '#ffffff',
                        },
                      }}
                    />
                  )}
                />
              </ListItem>
              <ListItem
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  width: '30%',
                  margin: '0 0 0 20px',
                  borderRadius: '50px',
                  background: theme.palette.button.blue,
                  boxShadow: '-2px 0px 5px 1px rgba(0,0,0,0.50) ',
                }}
              >
                <Button
                  fullWidth
                  variant='text'
                  type='submit'
                  sx={{
                    color: '#ffffff',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                  }}
                >
                  send now
                </Button>
              </ListItem>
            </List>
          </Box>
        </form>

        {/* Blue globe */}
        <Box
          sx={{
            position: 'absolute',
            top: '11rem',
            left: '24rem',
            height: '80px',
            width: '120px',
            borderRadius: '60px 60px 0 0',
            backgroundImage:
              'linear-gradient(177deg, rgba(33, 63, 114, 1) 0%,rgba(12, 1, 35, 0.5) 75%,  rgba(12, 1, 35, 1) 100%)',
            backgroundSize: '120px 100px',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
            zIndex: 0,
          }}
        />
      </Box>

      {/* Round White Button */}
      <Box
        sx={{
          position: 'absolute',
          top: '20px',
          left: '46vw',
          width: '60px',
          height: '60px',
          borderRadius: '50px',
          background: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.button.blue,
          cursor: 'pointer',
        }}
        onClick={() => {
          setShowContact(!showContact);
          setTranslateLogo(!translateLogo);
        }}
      >
        <ArrowForwardIcon />
      </Box>
    </Box>
  );
};

export default ContactForm;
