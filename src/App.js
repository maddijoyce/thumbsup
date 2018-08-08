import React, { Component } from 'react';
import glam from 'glamorous';
import { keyframes } from 'glamor';

import Icon from './Icon';

const Container = glam.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const Background = glam.div({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 98,
});

const ThumbUp = glam.div({
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'block',
}, ({ src }) => ({
  backgroundImage: `url(${src})`,
}));


const Foreground = glam.div({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: 5,
  color: 'white',
  textAlign: 'center',
  maxWidth: 750,
  width: '98%',
  position: 'relative',
  zIndex: 99,
  padding: '20px 5px',
});

const Title = glam.h1({
  fontWeight: '300',
  fontSize: 48,
  letterSpacing: 1,
});

const Description = glam.p({
  fontWeight: '200',
  fontSize: 22,
  lineHeight: 1.6,
});

const Row = glam.div({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'center',
});

export const shadowFade = keyframes({
  '0%': { boxShadow: '0 0 4px 2px rgba(41, 182, 246, 0)' },
  '40%': { boxShadow: '0 0 4px 2px rgba(41, 182, 246, 0.8)' },
  '90%': { boxShadow: '0 0 4px 2px rgba(41, 182, 246, 0)' },
});

const Button = glam.button({
  '&:focus': {
    animation: `${shadowFade} 0.4s 1 ease-in-out`,
    outline: 'none',
  },
  alignItems: 'center',
  background: 'none',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1.5rem',
  letterSpacing: '1px',
  margin: '0.6rem',
  textTransform: 'uppercase',
  border: '2px solid white',
  color: 'white',
  borderRadius: '50%',
  padding: '1.4rem',
});

class App extends Component {
  render() {
    const images = [
      'https://picsum.photos/600',
      'https://picsum.photos/601',
      'https://picsum.photos/602',
      'https://picsum.photos/603',
      'https://picsum.photos/604',
      'https://picsum.photos/605',
      'https://picsum.photos/606',
      'https://picsum.photos/607',
      'https://picsum.photos/608',
    ]

    return (
      <Container>
        <Background>
          {images.map((i) => (<ThumbUp src={i} />))}
        </Background>
        <Foreground>
          <Title>#thumbsupforjigar</Title>
          <Description>Let's throw our support behind Jigar, one thumb at a time!<br />Drag your photo here, or click below, to upload.</Description>
          <Row>
            <Button><Icon icon="Upload" /></Button>
          </Row>
        </Foreground>
      </Container>
    );
  }
}

export default App;
