import { PostItemInterface } from "../../types/interface";

// PostItem 컴포넌트입니다.
interface itemInterface {
  post: PostItemInterface;
}
const PostItem = (props: itemInterface) => {
  const { post } = props;

  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
