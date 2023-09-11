const Posts = ({posts}) => {
    return (
      <div>
        <h1>Posts</h1>
        <ul className="postList">
          {
            posts.map((post) => {
              return (
                <li key={post.id}>
                  Post #{post.id} 
                  <p>{post.body}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  export default Posts