import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import GlobalStyles from '../theme/GlobalStyles';
import Navigation from '../components/Navigation/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StyledMain = styled.main`
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const Layout = ({ children, title }) => {
  useLayoutEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-out-quad',
      });
    }, 1500);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {title ? `${title} | Freelance Concept` : `Freelance Concept`}
        </title>
        <meta name="description" content="Agencja WWW" />
        <html lang="pl" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <StyledMain className="bg-color">{children}</StyledMain>
      </ThemeProvider>
    </>
  );
};

export default Layout;
