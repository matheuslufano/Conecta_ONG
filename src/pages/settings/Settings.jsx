import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://mega.ibxk.com.br/2021/03/24/24093417684033.jpg?ims=fit-in/800x500" 
              alt="" 
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Your Name"/>
          <label>E-mail</label>
          <input type="text" placeholder="your E-mail"/>
          <label>Password</label>
          <input type="text" placeholder="Your Password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
        <Sidebar/>
    </div>
  )
}
