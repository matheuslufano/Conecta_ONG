import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
            className="writeImg"
            src="https://mega.ibxk.com.br/2021/03/24/24093417684033.jpg?ims=fit-in/800x500"
            alt="" 
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder="Tell your story..." t
                    ype="text" 
                    className="writeInput writeText"
                ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
