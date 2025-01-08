import {PostInfo} from '../PostInfo';
import './PostList.css';

export const PostList = ({ postList }) => {
  return (
    <div className="PostList">
      {postList.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
