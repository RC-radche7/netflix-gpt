
const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[15%] px-24 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 w-1/4 text-white">{overview}</p>
      <div className=""> 
        <button className=" text-black p-2 px-12 text-xl rounded-lg bg-white hover:bg-opacity-80"> ▶Play</button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-7 text-xl bg-opacity-50 rounded-lg"> ℹ️More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
