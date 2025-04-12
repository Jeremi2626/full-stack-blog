import Image from "./Image"

const Comment = () => {
  return (
    <div className='p-4 bg-gray-50 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
            <Image 
             src="userImg.jpeg" 
             className="w-10 h-10 rounded-full object-cover" 
             w="40"/>
            <span className="text-lg font-medium">John Doe</span>
            <span className="text-gray-500">2 days ago</span>
        </div>
        <div className="mt-4">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugit nam perferendis vero ipsam. Vitae, magni? Consectetur,
                quasi earum iste itaque maxime ullam totam in quis esse. 
                Cupiditate nisi voluptatum non!
            </p>
        </div>
    </div>
  )
}

export default Comment