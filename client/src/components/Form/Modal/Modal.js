import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";
import youtubeIcon from "../../../assets/ytIconColor.svg";
import facebookIcon from "../../../assets/fbIconColor.svg";
import twiterIcon from "../../../assets/tIconColor.svg";

import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
// import twiterIcon from '../../../assets';

class Modal extends Component {
  // state = {
  //   showNOt: this.props.condition
  // };
  state = {
    showNOt: this.props.condition,
    src: this.props.sorce,
    crop: {
      aspect: 1,
      width: 10,
      x: 0,
      y: 0
    }
  };

  clickOn = () => {
    const th = this;
    // Detect all clicks on the document
    document.addEventListener("click", function (event) {
      // If user clicks inside the element, do nothing
      if (event.target.closest(".modal-contents2")) return;

      th.props.hideModal();
    });
  };
  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image, pixelCrop) => {
    this.imageRef = image;

    // Make the library regenerate aspect crops if loading new images.
    const { crop } = this.state;

    if (crop.aspect && crop.height && crop.width) {
      this.setState({
        crop: { ...crop, height: null }
      }, () => {

        this.makeClientCrop(crop, pixelCrop);
      });
    } else {
      this.makeClientCrop(crop, pixelCrop);
    }
  };

  onCropComplete = (crop, pixelCrop) => {
    // console.log(crop)
    this.makeClientCrop(crop, pixelCrop);
  };
  componentDidMount() {
    // this.makeClientCrop(crop, pixelCrop);
  }
  onCropChange = crop => {
    this.setState({ crop });
  };

  async makeClientCrop(crop, pixelCrop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        pixelCrop,
        "newFile.jpeg"
      );

      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, pixelCrop, fileName) {
    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    const base64Image = canvas.toDataURL('image/jpeg');

    return new Promise((resolve, reject) => {


      resolve(base64Image);

    });
  }
  sendImgInProps = () => {

    this.props.setFile(this.state.croppedImageUrl);
    this.props.hideModal();
  }
  showImg = () => {
    // console.log(this.refs.imagePicker1.files[0]);
  }
  render() {
    const { condition } = this.props;
    const { crop, croppedImageUrl, src } = this.state;


    return (
      <div>
        {condition && (
          <div className="bg-modal2" onClick={this.clickOn}>
            <div className="modal-contents2 App">


              <div>

                <button className="selectImageButton" onClick={this.sendImgInProps}>Select</button>
              </div>
              {this.props.sorce && (
                <ReactCrop
                  src={this.props.sorce}
                  crop={crop}
                  // disabled={true}
                  maxWidth={100}
                  onImageLoaded={this.onImageLoaded}
                  onComplete={this.onCropComplete}
                  onChange={this.onCropChange}
                />
              )}


            </div>
          </div>
        )}
      </div>
    );

  }
}

export default Modal;
