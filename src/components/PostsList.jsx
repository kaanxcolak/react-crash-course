import Post from './Post';
import NewPost from './NewPost';
import classess from './PostsList.module.css';


function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classess.posts}>
                <Post author="Maximilian" body="React.js is awesome!" />
                <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>

    );

}

export default PostsList;