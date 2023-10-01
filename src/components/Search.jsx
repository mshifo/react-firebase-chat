

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" name="search" placeholder="Find a user..." />
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/15666565/pexels-photo-15666565/free-photo-of-young-woman-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search