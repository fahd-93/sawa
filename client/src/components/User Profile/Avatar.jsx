import React, { Component } from 'react';

class Avatar extends Component{
    state={
        file: {
            name: "1.png"
        }
    };
    handleImageChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file);

    };
    render() {

        return(
            <div className="avatar-upload">
                <div className="avatar-edit">
                    <input type='file' id="imageUpload"
                           accept=".png, .jpg, .jpeg"
                    onChange={ e => this.handleImageChange(e)}/>
                    <label htmlFor="imageUpload"/>
                </div>
                <div className="avatar-preview">
                    <div style={{backgroundImage: `url(/png/${this.state.file.name})`}}/>
                </div>
            </div>
        )
    }
}


export default Avatar;