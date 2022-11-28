import stylePost from './Post.module.css'
import CreatePost from "./CreatePost/CreatePost";

const Post = (props:any) => {
    let createPosts = props.text.map((a:any) => <CreatePost text={a.text}/>)
    return (
        <div className={stylePost.post_block}>
            <div>
                <div>
                    <textarea placeholder={'Введи текст сюда'}/>
                </div>
                <button className={stylePost.button}>send</button>
            </div>
            <div>
                <h2 className={stylePost.title_post}>My post</h2>
            </div>
            <div className={stylePost.create_post}>
                {createPosts}
            </div>
        </div>
    )
}

export default Post