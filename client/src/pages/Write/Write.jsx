import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import axios from 'axios';
import './Write.scss';
const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context)

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;

            try {
                await axios.post('/upload', data);
            } catch (err) {
                console.log(err);
            }

        }
        try {
            const response = await axios.post('/posts', newPost);
            window.location.replace('/post/' + response.data._id);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='write'>
            {file &&
            <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
            }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" style={{cursor:'pointer'}}>
                    <i className="fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" onChange={(e)=>setFile(e.target.files[0])} style={{display:'none'}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Share your thoughts...' className="writeInput writeText" onChange={(e)=>setDesc(e.target.value)} ></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}

export default Write
