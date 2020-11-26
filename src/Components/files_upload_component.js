import React, { Component } from "react";
import axios from "axios";

class files_upload_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCollection: "",
    };
  }

  onFileChange = (e) => {
    console.log(e.target.files);
    this.setState({
      imgCollection: e.target.files,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // console.log(Object.keys(this.state.imgCollection));

    for (const key of Object.keys(this.state.imgCollection)) {
      formData.append("imgCollection", this.state.imgCollection[key]);
    }

    axios
      .post("http://localhost:4000/api/upload-images", formData)
      .then((res) => {
        console.log(res.data);
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <h3>React Multiple File Upload</h3>
            <div className="form-group">
              <input
                type="file"
                multiple
                name="imgCollection"
                onChange={this.onFileChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default files_upload_component;
