import Tracks from '../components/Tracks'
import Gear from '../components/Gear'

export default function Customize (){

    return(<div
        className=""
        style={{
        //   backgroundImage: `url(${BackPic})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="flex h-screen">
          <div className="leftbar w-1/4 h-3/4 bg-red-500 items-center mt-5 ml-5 rounded">
            <div className="flex justify-center">
              <img
                className="w-30 h-30 object-cover"
                // src={ProfilePic}
                alt="profile pic"
              />
            </div>
  
            <h2 className="w-full h-1/8 text-center text-4xl py-4">Frank Ocean</h2>
            
            <div className="flex flex-col align-center">
              <p className="text-center">placeholderChip</p>
              <p className="text-center">placeholderChip</p>
              <p className="text-center">placeholderChip</p>
              <p className="text-center">placeholderChip</p>
            </div>
          </div>
          <div className="w-3/4 h-3/4 bg-blue-500 mt-5 mx-5">
            <div className="flex justify-around py-5 bg-white">
              <button>Tracks</button>
              <button>Gear</button>
              <button>Connections</button>
            </div>
          </div>
        </div>
      </div>
    )

}