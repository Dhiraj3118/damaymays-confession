import { db, storage } from './firebase';
import React, { useState } from 'react'
import firebase from 'firebase'

const Memes = () => {

    const [imageAsFile, setImageAsFile] = useState('');
    const [caption, setCaption] = useState('');
    const [uploading, setUploading] = useState(false);

    const handleUpload = (e) => {
        const img = e.target.files[0];
        setImageAsFile(img);
    }

    const handleFireBaseUpload = (e) => {
        e.preventDefault()

        if (imageAsFile === '') {
            alert('Choose an image to upload!');
        }

        else if (imageAsFile.type === 'image/png' || imageAsFile.type === 'image/jpg' || imageAsFile.type === 'image/jpeg') {
            setUploading(true);
            const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);

            uploadTask.on('state_change',
                (snapshot) => {
                    console.log(snapshot);
                },
                (err) => {
                    console.log(err);
                },
                () => {
                    storage.ref('images').child(imageAsFile.name).getDownloadURL()
                        .then(url => {
                            db.collection('memes').add({
                                url: url,
                                caption: caption,
                                timestamp: firebase.firestore.Timestamp.now()
                            })
                            setCaption('');
                            setImageAsFile('');
                            document.getElementsByTagName('form')[0].reset();
                            setUploading(false);
                        })
                }
            )
        }

        else {
            alert("Only .jpg/.jpeg and .png files are supported");
        }

    }


    return (
        <div className="meme-dashboard">
            <form className="meme-form">
                <input type="file" id="img" accept="image/png, image/jpeg, image/jpg" onChange={handleUpload} />
                <input type="text" id="caption" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
                <button onClick={handleFireBaseUpload} disabled={uploading}>{uploading ? 'Uploading' : 'Submit'}</button>
            </form>
        </div>
    )
}
export default Memes;