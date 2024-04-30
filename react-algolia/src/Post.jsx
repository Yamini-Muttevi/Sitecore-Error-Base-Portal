

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
       <span className="summy-span" >Summary:</span> <p className="text-muted">Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.</p>
          </div>
      </div>
   

 ) }
 

 
