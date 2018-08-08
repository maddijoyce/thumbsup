import React, { Component } from 'react';

import { Container, Background, Foreground, ThumbUp, Title, Description, Row, Button, FileUpload } from './App.styles';
import Icon from './Icon';

const clientId = '25ad7792313b146';
const Authorization = `Client-ID ${clientId}`;

const albumId = 'xIOhTbo';
const albumDeleteHash = 'SXgFnlgc75XYqIe';

class App extends Component {
  state = {
    images: [],
  };

  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
  }

  async componentDidMount() {
    const images = await (await fetch(`https://api.imgur.com/3/album/${albumId}/images?cb=${+Date.now()}`, {
      method: 'GET',
      headers: { Authorization },
    })).json();

    if (images.success) {
      this.setState({
        images: images.data.map(({ link }) => (link)),
      });
    }
  }

  selectFile = () => {
    this.fileUpload && this.fileUpload.current && this.fileUpload.current.click();
  };

  uploadFile = async (event) => {
    const imageFile = event.currentTarget.files[0];
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('album', albumDeleteHash);

      const upload = await (await fetch(`https://api.imgur.com/3/image`, {
        method: 'POST',
        headers: { Authorization },
        body: formData,
      })).json();

      if (upload.success) {
        this.setState({ images: [...this.state.images, upload.data.link] });
      }
    }
  };

  render() {
    const nearestSquare = Math.ceil(Math.sqrt(this.state.images.length));
    const template = Array.apply(null, Array(nearestSquare)).map(() => 'auto').join(' ');

    return (
      <Container>
        <Background template={template}>
          {this.state.images.map((i) => (<ThumbUp key={i} src={i} />))}
        </Background>
        <Foreground>
          <Title>#thumbsupforjigar</Title>
          <Description>Let's throw our support behind Jigar, one thumb at a time!<br />Drag your photo here, or click below, to upload.</Description>
          <Row>
            <Button onClick={this.selectFile} ><Icon icon="Upload" /></Button>
            <FileUpload innerRef={this.fileUpload} onChange={this.uploadFile} type="file" />
          </Row>
        </Foreground>
      </Container>
    );
  }
}

export default App;
