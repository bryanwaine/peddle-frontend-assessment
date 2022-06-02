import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography } from '@mui/material';

import Layout from '../components/Layout';
import dots from '../public/dots.png';
import ContactForm from '../components/ContactForm';
import {
  BottomTransDiv,
  BrownDiv,
  LeftTransDiv,
  LeftWhiteDiv,
  RightTransDiv,
  RightWhiteDiv,
} from '../components/BlurredDivs';
import { Blue150, blue150 } from '../components/Globes';

const About = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [translateLogo, setTranslateLogo] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowAbout(true);
  }, []);

  return (
    <Layout
      title='About Us'
      showContactForm={setShowContact}
      showTranslateLogo={setTranslateLogo}
      translateX={translateLogo}
      contactUs
      about
      id='top'
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', padding: '0 ' }}
        className={`about ${showAbout}`}
      >
        {/* Left Transparent Div */}

        <LeftTransDiv />

        {/* Left White Div */}

        <LeftWhiteDiv />

        {/* Right Transparent Div */}

        <RightTransDiv />

        {/* Right White Div */}

        <RightWhiteDiv />

        {/* Blue globe */}

        <Blue150 />

        {/* Top Section */}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            width: '100%',
            zIndex: 100,
            padding: '1rem 0 0 0',
          }}
        >
          <Box sx={{ width: '100%', height: '10rem' }} />
          <Box
            sx={{
              display: 'flex',
              zIndex: 100,
              justifyContent: 'start',
              alignItems: 'center',
              width: '65%',
              padding: '0 0 0 4rem',
            }}
          >
            <div
              style={{
                height: '.01rem',
                background: '#ffffff',
                width: '4rem',
                margin: '0 -1.5rem 0 0',
              }}
            />
            <Typography
              variant='regular'
              sx={{
                fontSize: '3rem',
                zIndex: 1,
                textTransform: 'uppercase',
                fontSize: '0.8rem',
              }}
            >
              About us
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', width: '60%', padding: '0 0 0 2rem' }}>
            <Typography
              variant='regular'
              sx={{
                fontSize: '3rem',
                zIndex: 1,
                textAlign: 'left',
                fontWeight: 300,
              }}
            >
              Built for Saas <br /> and E-commerce
            </Typography>
          </Box>
          <Box
            style={{
              width: '35%',
              display: 'flex',
              margin: '2rem 0 0 0',
              padding: '0',
            }}
          >
            <Typography
              variant='regular'
              sx={{
                fontSize: '0.8rem',
                textAlign: 'left',
                lineHeight: '1.5rem',
              }}
            >
              Our tools are easy to set up and use with a user
              <br />
              friendly dashboard that enables you to set up, <br />
              launch, automate and manage multi-affiliate
              <br /> campaigns in 5 minutes
            </Typography>
          </Box>
        </Box>

        {/* Mid Section */}

        <Box
          sx={{ display: 'flex', justifyContent: 'center', margin: '6rem 0' }}
        >
          <Typography
            variant='regular'
            sx={{
              fontSize: '2.5rem',
              fontWeight: 400,
              textAlign: 'left',
              width: '70%',
            }}
          >
            Metricks was developed because just like
            <br /> you, we needed a product that could give
            <br /> us&nbsp;<strong>good value.</strong>
          </Typography>
        </Box>

        {/* Last Section */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              margin: '0 0 0 13rem',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', margin: '0 0 1rem 0' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                  }}
                >
                  <Typography
                    variant='regular'
                    sx={{
                      color: '#ffffff',
                      fontSize: '0.6rem',
                      margin: '0 0 .3rem .5rem',
                    }}
                  >
                    01
                  </Typography>
                  <div
                    style={{
                      height: '.01rem',
                      background: '#ffffff',
                      width: '3rem',
                      margin: '0 -1.5rem 0 0',
                    }}
                  />
                </Box>
                <Typography
                  variant='regular'
                  sx={{
                    fontSize: '3rem',
                    zIndex: 1,
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                  }}
                >
                  why us?
                </Typography>
              </Box>
              <Typography
                variant='regular'
                sx={{
                  fontSize: '0.8rem',
                  textAlign: 'left',
                  lineHeight: '1.5rem',
                  margin: '0 0 1rem 0',
                }}
              >
                We pride ourselves in our ability to innovate and
                <br /> create world-class tools that provide reliable and
                <br /> efficient touchpoints between advertisers and
                <br /> affiliates.
              </Typography>
            </Box>

            <Box>
              <Image src={dots} width={200} height={80} alt='dots' />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
              zIndex: 100,
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'start',
                margin: '0 0 1rem 0',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
              >
                <Typography
                  variant='regular'
                  sx={{
                    color: '#ffffff',
                    fontSize: '0.6rem',
                    margin: '0 0 .3rem .5rem',
                  }}
                >
                  02
                </Typography>
                <div
                  style={{
                    height: '.01rem',
                    background: '#ffffff',
                    width: '3rem',
                    margin: '0 -1.5rem 0 0',
                  }}
                />
              </Box>
              <Typography
                variant='regular'
                sx={{
                  fontSize: '3rem',
                  zIndex: 1,
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                }}
              >
                growing with you
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                zIndex: 100,
                margin: '0 5rem 0 0',
              }}
            >
              <Typography
                variant='regular'
                sx={{
                  fontSize: '0.8rem',
                  textAlign: 'left',
                  lineHeight: '1.5rem',
                  margin: '0 0 1rem 0',
                }}
              >
                Leveraging the best technology, we have developed an all-in-
                <br />
                one affiliate marketing tracking software, a genius tool to help
                <br /> you track, automate and optimize your influencer
                campaigns,
                <br /> all from one dashboard.
              </Typography>
              <Typography
                variant='regular'
                sx={{
                  fontSize: '0.8rem',
                  textAlign: 'left',
                  lineHeight: '1.5rem',
                  margin: '0 0 1rem 0',
                }}
              >
                Our team of experts are constantly brainstorming, testing and
                <br />
                developing new solutions with only one thing in mind - your
                <br />
                business growth. Your success is our success and by giving you
                <br /> the tools you need to scale, we grow as well.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: '20rem',
            margin: '20rem 0 0 0',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              zIndex: 100000,
              padding: '0 0 0 5rem',
            }}
          >
            <Typography
              variant='regular'
              sx={{
                fontSize: '2rem',
                textAlign: 'left',
                zIndex: 1000,
                fontWeight: 400,
                margin: '0 0 1rem 0',
              }}
            >
              Got a Question?
            </Typography>
            <Typography
              variant='regular'
              sx={{
                fontSize: '0.8rem',
                textAlign: 'left',
                lineHeight: '1.5rem',
                margin: '0 0 1rem 0',
              }}
            >
              See how Metricks can help your business grow with best Affiliate
              Marketing Tracking <br />
              Software.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                align: 'center',
                color: 'rgba(255, 0, 247, 1)',
              }}
            >
              <Typography
                variant='regular'
                sx={{
                  fontSize: '0.8rem',
                  textAlign: 'left',
                  lineHeight: '1.5rem',
                  margin: '0 .3rem 1rem 0',
                  fontWeight: 500,
                  color: 'rgba(255, 0, 247, 1)',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  router.push('#top');
                  setShowContact(!showContact);
                  setTranslateLogo(!translateLogo);
                }}
              >
                Contact Us
              </Typography>
              <ArrowForwardIcon
                sx={{ fontSize: '1rem', margin: '.2rem 0 0 0' }}
              />
            </Box>
          </Box>
        </Box>

        {/* Bottom Transparent Div */}

        <BottomTransDiv />

        {/* Brown Div */}

        <BrownDiv />

        {/* Contact Form */}

        <ContactForm
          showContact={showContact}
          setShowContact={setShowContact}
          translateLogo={translateLogo}
          setTranslateLogo={setTranslateLogo}
        />
      </Box>
    </Layout>
  );
};

export default About;
