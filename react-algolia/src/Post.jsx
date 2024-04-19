

export const Post = ({ post}) => {
  
  
    return (
       <div className="post-card">
      <span className="post-card-category">{post.fields.exception['en-US']}</span>
      <span className="post-card-title">{post.fields.resolution['en-US']}</span>
     
    </div>
 ) }