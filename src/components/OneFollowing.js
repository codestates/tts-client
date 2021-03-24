
const OneFollowing = (props) => {
  return (
    <div className='oneFollowong'>
      <span>{props.userName}</span>
      <span>{props.email}</span>
      <span>{props.tag}</span>
      <button className={props.fa + ' followBtn'} onClick={props.followHandler(props.email)}></button>
    </div>
  )
}

export default OneFollowing;