

export const Post = ({ post}) => {
  
  
    return (
  
      <div className="row">
          <div className="col-md-6 how-img">
        
              <img src="ExceptionSitecore.png" className="rounded-circle img-fluid" alt=""/>
          </div>
          <div className="col-md-6">
              <h4></h4>

          <span className="summy-span">Exception:</span> <h5 className="heading">{post.fields.exception['en-US']}</h5>
       <span className="summy-span" >Resolution: </span><h5 className="subheading">{post.fields.resolution['en-US']}</h5>
       <span className="summy-span" >Summary:</span> <p className="text-muted"></p>
          </div>
      </div>
   

 ) }
 

 
