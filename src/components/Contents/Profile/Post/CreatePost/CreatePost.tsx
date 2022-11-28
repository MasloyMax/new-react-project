import stylePost from './CreatePost.module.css'

const CreatePost = (props:any) => {
    return (
        <div className={stylePost.post_block}>
            <div className={stylePost.create_post}>
                <div>
                    <p className={stylePost.post_text}>{props.text}</p>
                </div>
                <div >
                    <button>like</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost