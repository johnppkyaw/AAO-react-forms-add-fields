const Comments = ({comments, setComments}) => {

  return (
    <div>
      <label htmlFor='comments'>Comments:</label>
      <textarea
        id='comments'
        name='comments'
        onChange={e => setComments(e.target.value)}
        value={comments}
      />
    </div>
  )
}


export default Comments;
