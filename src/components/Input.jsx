import attach from '../img/attach.png'
import image from '../img/image.png'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={attach} alt="" />
        <input style={{display:"none"}} type="file" id="file" />
        <label htmlFor="file">
          <img src={image} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input