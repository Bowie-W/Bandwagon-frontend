import Tracks from '../components/Tracks'
import Equipment from '../components/Equipment'

export default function Profile (){

    return(
        <div className="">
            <div className="leftbar">
                <img alt="profile pic"/>
                <div className="name/shortdescriptionbox">
                    <div className="name">
                        Name
                    </div>
                    <div className="short descript">
                        short description
                    </div>
                </div>
                <div className="fuller description">
                    Fuller description Placeholder
                </div>
            </div>
            <div className="bottombar">
                <Tracks />
                <Equipment />
                
            </div>
        </div>
    )

}