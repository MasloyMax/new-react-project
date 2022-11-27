import stylePost from './Post.module.css'

const Post = () => {
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
            <div>
                <div>
                    <p className={stylePost.post_text}>Posts</p>
                </div>
                <div >
                    <button>like</button>
                </div>
            </div>
        </div>
    )
}

export default Post