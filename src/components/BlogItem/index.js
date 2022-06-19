import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails
  return (
    <li>
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="item-cont">
          <img src={imageUrl} alt={`item${id}`} className="item-image" />
          <diV className="info-cont">
            <p className="topic">{topic}</p>
            <p>{title}</p>
            <div className="author-info">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p>{author}</p>
            </div>
          </diV>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
