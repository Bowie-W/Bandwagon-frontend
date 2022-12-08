import ProfilePic from "../assests/images/frank-ava.jpg";

export default function AvatarModal({handleModal}) {


    // onsubmit function for posting

    // onSubmit={(event) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     const file = event.target.image.value;
    //     console.log(file);
    //     formData.append("image", file);

    //     const config = {
    //       headers: { "content-type": "multipart/form-data" },
    //     };

    //     console.log(formData);

    //     axios
    //       .post(
    //         "http://localhost:5050/profile/customize",
    //         formData,
    //         config
    //       )
    //       .then((response) => {
    //         console.log(response);
    //         handleModal();
    //       })
    //       .catch((err) => console.log(err));
    //   }}
  return (
    <div className="absolute h-screen w-screen top-0 left-0 bg-black-50 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white-50 h-1/2 w-1/5 flex flex-col items-center">
      <div className="flex justify-end w-full pr-3">
            <button onClick={handleModal}>X</button>
        </div>
        <img
          className="w-40 h-40 object-cover rounded-full mt-5"
          src={ProfilePic}
          alt="profile pic"
        />
        <div>
          <form
            method="POST"
            action="http://localhost:5050/profile/customize"
            encType="multipart/form-data"
            className="flex flex-col justify-center"
          >
            <input  className=" pl-20 my-5 " type="file" name="image"></input>
            <input className="text-center" type="submit" onClick={handleModal}></input>
          </form>
        </div>
      </div>
    </div>
  );    
}
