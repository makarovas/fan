import React, { Component } from 'react'
import { firebase } from '../../firebase';
import FileUploader from 'react-firebase-file-uploader';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class Fileuploader extends Component {
	state = {
		name: '',
		isUploading: false,
		fileURL: '',
	}

	handleUploadStart = () => {
		this.setState({
			isUploading: true
		})
	}

	handleUploadError = (error) => {
		this.setState({
			isUploading: false
		})
		console.log(`some error ${error}`)

	}

	handleUploadSuccess = (filename) => {
		this.setState({
			isUploading: false,
			name: filename
		});
		firebase.storage()
			.ref(this.props.dir)
			.child(filename)
			.getDownloadURL()
			.then(url => {
				this.setState({
					fileURL: url
				});

			})
	}

	upLoadAgain = () => {
		console.log('uploading')
	}
	static getDerivedStateFromProps(props, state) {
		if (props.defaultImg) {
			return state = {
				name: props.defaultImgName,
				fileURL: props.defaultImg
			}
		}
		return null
	}


	render() {
		return (
			<div>
				{!this.state.fileURL ?
					<div>
						<div className='label_inputs'>{this.props.tag}</div>
						<FileUploader
							accept='image/*'
							name='image'
							randomizeFilename
							storageRef={firebase.storage().ref(this.props.dir)}
							onUploadStart={this.handleUploadStart}
							onUploadError={this.handleUploadError}
							onUploadSuccess={this.handleUploadSuccess}
						// onProgress={this.handleUploadProgress}
						/>
					</div>
					: null}
				{this.state.isUploading ?
					<div
						className='progress'
						style={{
							textAlign: 'center',
							margin: '30px 0'
						}}>
						<CircularProgress
							thickness={7}
							style={{ color: '#98c5e9' }}
							size={70} />
					</div>
					: null}
				{
					this.state.fileURL ?
						<div className='image_upload_container'>
							<img
								style={{
									width: '100%'
								}}
								src={this.state.fileURL}
								alt={`${this.state.name}`} />
							<div className="remove"
								onClick={this.upLoadAgain()} >
								Remove	</div>

						</div>
						: null
				}
			</div>
		)
	}
}


// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }