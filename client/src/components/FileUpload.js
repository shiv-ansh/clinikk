import React, { Component } from 'react'
import axios from "axios";
import './FileUpload.css';
export class FileUpload extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null,
        }

    }

    // onChangeHandler function
    onChangeHandler = (event) => {

        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })

    }

    // onClickHandler function
    onClickHandler = () => {

        const data = new FormData();
        data.append("file", this.state.selectedFile);

        axios.post("http://localhost:5000/upload", data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })

    }


    render() {
        return (
            <div>

                <div className="container mt-5">
                    <div className="row">

                        <div className="col-md-12">
                            <form id="#">




                                <div className="form-group files color my-5">
                                    <label className="h5 text-success">Upload Customer data </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={this.onChangeHandler}
                                        accept=".csv, .xlsx"
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                    onClick={() => this.onClickHandler()}
                                >
                                    Upload
                                </button>



                            </form>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FileUpload
