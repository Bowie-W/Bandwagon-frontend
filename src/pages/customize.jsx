import Tracks from '../components/Tracks'
import Equipment from '../components/Equipment'

export default function Customize (){

    return(
        <div className="">
            <form className="leftbar">
                <img alt="profile pic"/>
                <div className="name/shortdescriptionbox">
                    <textarea className="name">
                        Name
                    </textarea >
                    <textarea  className="short descript">
                        short description
                    </textarea >
                </div>
                <textarea  className="fuller description">
                    Fuller description Placeholder
                </textarea>
            </form>
            <div className="bottombar">
                <Tracks />
                <Equipment />
                
            </div>
        </div>
    )

}