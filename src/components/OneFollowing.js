
const OneFollowing = (props) => {
  return (
    <div className='oneFollowong'>
      <span>{props.userName}</span>
      <span>{props.email}</span>
      <span>{props.tag}</span>
      <span>총시간</span>
      <button className={props.fa} onClick={props.followHandler(props.email)}></button>
    </div>
  )
}

export default OneFollowing;