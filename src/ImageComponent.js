import React from "react";
import kat1 from './kat1.png';
import kat2 from './kat2.png';
import kat3 from './kat3.png';


export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <img
          className="small"
          src={kat1}
          onClick={this.handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute"  }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={kat1}
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}
