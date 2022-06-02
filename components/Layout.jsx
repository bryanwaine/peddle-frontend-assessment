import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import metricks from '../public/metricks_white.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/Theme';

const Layout = ({
  children,
  title,
  description,
  showContactForm,
  showTranslateLogo,
  translateX,
  blog,
  about,
}) => {
  const router = useRouter();

  return (
    <Box sx={{ backgroundImage: 'url(Path_1.png)', backgroundSize: 'cover' }}>
      <Head>
        <title>{title ? `Metricks | ${title}  ` : `Metrics`}</title>
        <link rel='icon' type='image/x-icon' href='/metricks_thumb.jpg' />
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <AppBar
            position='static'
            elevation={0}
            sx={{
              width: '100%',
              height: '5rem',
              background: 'transparent',
            }}
          >
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Box
                sx={{ flex: 1, padding: '0 0 0 50px', cursor: 'pointer' }}
                className={`logo ${translateX}`}
                onClick={() => router.push('/comingsoon')}
              >
                <Image src={metricks} width={120} height={80} alt='Metricks' />
              </Box>

              {/* NAV BUTTONS */}
              <Box
                sx={{
                  flex: 2,
                  display: 'flex',
                  justifyContent: 'end',
                  padding: '0 50px 0 0',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  variant='medium'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: about && 'rgba(255, 0, 247, 1)',
                  }}
                  onClick={() => router.push('/about')}
                >
                  about us
                </Typography>
                <Typography
                  variant='medium'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: blog && 'rgba(255, 0, 247, 1)',
                  }}
                  onClick={() => router.push('/blog')}
                >
                  blog
                </Typography>
                <Typography
                  variant='medium'
                  sx={{
                    background: theme.palette.button.blue,
                    height: '40px',
                    boxShadow: '0px 0px 10px #09090991',
                    borderRadius: '50px',
                    opacity: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 20px',
                  }}
                  onClick={() => {
                    showContactForm(true);
                    showTranslateLogo(true);
                  }}
                >
                  contact us
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              minHeight: '38rem',
            }}
          >
            {children}
          </Box>
          <AppBar
            position='static'
            elevation={0}
            sx={{
              width: '100%',
              background: 'transparent',
            }}
          >
            <Toolbar
              sx={{
                display: 'flex',
                height: '100%',
              }}
            >
              <Box sx={{ flex: 0.5 }} />
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                  padding: '20px',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '30%',
                    cursor: 'pointer',
                    color: '#eeeeee',
                  }}
                >
                  <YouTubeIcon />
                  <FacebookIcon />
                  <LinkedInIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '60%',
                    cursor: 'pointer',
                  }}
                >
                  <Typography
                    variant='regular'
                    sx={{
                      color: '#eeeeee',
                    }}
                  >
                    Terms of services
                  </Typography>
                  <Typography
                    variant='regular'
                    sx={{
                      color: '#eeeeee',
                    }}
                  >
                    Privacy policy
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '80%',
                  }}
                >
                  <Typography
                    variant='regular'
                    sx={{
                      color: '#eeeeee',
                    }}
                  >
                    Copyright 2021 @ Peddle Technologies. All Rights Reserved.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 0.5 }} />
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </CssBaseline>
    </Box>
  );
};

export default Layout;
