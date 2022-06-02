import React, { useEffect, useState } from 'react';

import * as Yup from 'yup';
import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Layout from '../components/Layout';
import CountDownTimer from '../components/CountDownTimer';
import ContactForm from '../components/ContactForm';
import { theme } from '../components/Theme';
import { Blue70, Brown120, Purple100 } from '../components/Globes';
import { FooterDome } from '../components/BlurredDivs';

const Comingsoon = () => {
  const [showContact, setShowContact] = useState(false);
  const [translateLogo, setTranslateLogo] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    setShowComingSoon(true);
  }, []);

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
    <Layout
      title='Coming Soon'
      showContactForm={setShowContact}
      showTranslateLogo={setTranslateLogo}
      translateX={translateLogo}
    >
      <Box sx={{ display: 'flex' }} className={`comingSoon ${showComingSoon}`}>
        <Box sx={{ flex: 1 }} />
        <Box
          sx={{
            flex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px 0 0 0',
          }}
        >
          <Typography
            variant='bold'
            sx={{ textTransform: showContact ? 'lowercase' : 'uppercase' }}
          >
            something awesome is coming soon
          </Typography>
          <Typography variant='regular' sx={{ padding: '0 22px' }}>
            Your all-in-one affiliate marketing tracking software&nbsp;
            <strong>track, automate&nbsp;</strong>and
            <br />
            <strong>optimize&nbsp;</strong>your campaigns.
          </Typography>

          {/* Count Down Timer */}

          <CountDownTimer />

          {/* Waiting List Form */}

          <form
            onSubmit={() => alert('submitted')}
            style={{
              positon: 'relative',
              width: '70%',
              margin: '0 auto',
              padding: 10,
            }}
          >
            <Box>
              <List
                style={{
                  width: '100%',
                  margin: '-20px auto 0',
                  padding: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Waiting List First and Last Name */}

                <Box
                  sx={{
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <ListItem sx={{ margin: '0 0 2rem 0' }}>
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
                          label='First Name...'
                          inputProps={{ type: 'text' }}
                          error={Boolean(errors.firstName)}
                          helperText={errors.firstName?.message}
                          {...field}
                          sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none',
                              borderBottom: '1px solid #aaaaaa',
                              borderRadius: 0,
                            },
                          }}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem sx={{ margin: '0 0 2rem 0' }}>
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
                          label='Last Name...'
                          inputProps={{ type: 'text' }}
                          error={Boolean(errors.lastName)}
                          helperText={errors.lastName?.message}
                          {...field}
                          sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none',
                              borderBottom: '1px solid #aaaaaa',
                              borderRadius: 0,
                            },
                          }}
                        />
                      )}
                    />
                  </ListItem>
                </Box>

                {/* Waiting List Email Input and Button */}

                <Box
                  sx={{
                    width: '90%',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    background: '#ffffff',
                    borderRadius: '50px',
                    margin: '-10px 0',
                  }}
                  className={`input ${showContact}`}
                >
                  <ListItem
                    sx={{
                      height: '100%',
                      padding: '0 0 0px 10px',
                      margin: '0 0 40px 0',
                    }}
                  >
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
                          label='Enter your email address...'
                          inputProps={{ type: 'email' }}
                          error={Boolean(errors.email)}
                          helperText={errors.email?.message}
                          {...field}
                          sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none',
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
                      width: '60%',
                      height: '100%',
                      margin: '0 -5px 0 0',
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
                        fontSize: '8.5px',
                        textTransform: showContact ? 'lowercase' : 'uppercase',
                      }}
                    >
                      join our waiting list
                    </Button>
                  </ListItem>
                </Box>
              </List>
            </Box>
          </form>
        </Box>
        <Box sx={{ flex: 1 }} />
      </Box>

      {/* Purple globe */}

      <Purple100 showContact={showContact} />

      {/* Blue globe */}

      <Blue70 showContact={showContact} />

      {/* Brown globe */}

      <Brown120 showContact={showContact} />

      {/* Footer Dome */}

      <FooterDome />

      {/* Contact Form */}

      <ContactForm
        showContact={showContact}
        setShowContact={setShowContact}
        translateLogo={translateLogo}
        setTranslateLogo={setTranslateLogo}
      />
    </Layout>
  );
};

export default Comingsoon;
