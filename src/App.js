import React, { Component } from "react";

import {
  Container,
  Background,
  Foreground,
  ThumbUp,
  Title,
  Description,
  Row,
  Button,
  FileUpload,
  Loading,
  Spinner
} from "./App.styles";
import Icon from "./Icon";

const clientId = "25ad7792313b146";
const Authorization = `Client-ID ${clientId}`;

const albumId = "xIOhTbo";

const nearestSquare = number => Math.ceil(Math.sqrt(number));

class App extends Component {
  state = {
    loading: false,
    images: []
  };

  constructor(props) {
    super(props);
    this.fileUpload = React.createRef();
  }

  async componentDidMount() {
    const images = await (await fetch(
      `https://api.imgur.com/3/album/${albumId}/images?cb=${+Date.now()}`,
      {
        method: "GET",
        headers: { Authorization }
      }
    )).json();

    if (images.success) {
      this.setState({
        images: images.data.map(({ link }) => link)
      });
    }
  }

  selectFile = () => {
    this.fileUpload &&
      this.fileUpload.current &&
      this.fileUpload.current.click();
  };

  uploadFile = async event => {
    const imageFile = event.currentTarget.files[0];
    if (imageFile) {
      this.setState({ loading: true });
      const formData = new FormData();
      formData.append("image", imageFile);

      const upload = await (await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: { Authorization },
        body: formData
      })).json();
      const verifyFormData = new FormData();
      verifyFormData.append("form-name", "thumbs");
      verifyFormData.append("imageId", upload.data.id);
      verifyFormData.append("imageDeleteHash", upload.data.deletehash);
      verifyFormData.append("imageUrl", upload.data.link);
      verifyFormData.append(
        "allowUrl",
        `https://thumbsupforjigar.tk/addToAlbum.html?url=${upload.data.link}`
      );

      fetch("/", {
        method: "POST",
        body: verifyFormData
      });

      if (upload.success) {
        this.setState({
          images: [...this.state.images, upload.data.link],
          loading: false
        });
      }
    }
  };

  render() {
    const width = nearestSquare(this.state.images.length) + 1;
    const template = Array.apply(null, Array(width))
      .map(() => "auto")
      .join(" ");

    return (
      <Container>
        <Background template={template}>
          {this.state.images.map(i => <ThumbUp key={i} src={i} />)}
        </Background>
        <Foreground>
          <Title>#thumbsupforjigar</Title>
          <Description>
            Let's throw our support behind Jigar, one thumb at a time!<br />Click
            below to upload.
          </Description>
          <Row>
            <Button onClick={this.selectFile}>
              <Icon icon="Upload" />
            </Button>
            <FileUpload
              innerRef={this.fileUpload}
              onChange={this.uploadFile}
              type="file"
            />
          </Row>
        </Foreground>
        {this.state.loading && (
          <Loading>
            <Spinner />
          </Loading>
        )}
      </Container>
    );
  }
}

export default App;
