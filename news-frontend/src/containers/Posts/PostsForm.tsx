import {FormEvent, useRef, useState} from "react";
import { PostnNews} from "../../types.ts";

const PostsForm = ()=>{

    const inputRef = useRef<HTMLInputElement>(null);
    const [filename, setFilename] = useState('');
    const [stateForm, setStateForm] = useState<PostnNews>({title: '', content: '', image: null});

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFilename(e.target.files[0].name);
        } else {
            setFilename('');
        }
        const {name, files} = e.target;
        const value = files && files[0] ? files[0] : null;
        setStateForm((prev:PostnNews)=>({
            ...prev,
            [name]: value,
        }));
    };

    const activateInput = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const onSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log(stateForm);
        // setStateForm({author: '', message: '', image: null})
        // dispatch(addMessage(stateForm));
        // dispatch(fetchMessage());
    }


    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="container">
                    <h3 className='my-4'>Add New Post</h3>
                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input type="text" className="form-control" name='author' placeholder='Author'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea className="form-control" rows={3}></textarea>
                    </div>
                    <div>
                        <input
                            style={{display: 'none'}}
                            type="file"
                            name="image"
                            onChange={onFileChange}
                            ref={inputRef}
                        />
                        <div>
                            <input type="text" readOnly value={filename} onClick={activateInput} />
                            <button className='btn btn-dark' onClick={activateInput}>Browse</button>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        save
                    </button>
                </div>
            </form>
        </>
    )
}

export default PostsForm;