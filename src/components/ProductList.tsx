import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return (
        <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/24712934/pexels-photo-24712934/free-photo-of-den-va-tr-ng-b-d-dan-ba-ng-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-red-500 text-red-500 w-max py-2 px-4 text-xs hover:bg-red-500 hover:text-white">Add to purchase</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/24712934/pexels-photo-24712934/free-photo-of-den-va-tr-ng-b-d-dan-ba-ng-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-red-500 text-red-500 w-max py-2 px-4 text-xs hover:bg-red-500 hover:text-white">Add to purchase</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/1416971/pexels-photo-1416971.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/24712934/pexels-photo-24712934/free-photo-of-den-va-tr-ng-b-d-dan-ba-ng-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-red-500 text-red-500 w-max py-2 px-4 text-xs hover:bg-red-500 hover:text-white">Add to purchase</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/3178767/pexels-photo-3178767.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/24712934/pexels-photo-24712934/free-photo-of-den-va-tr-ng-b-d-dan-ba-ng-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-red-500 text-red-500 w-max py-2 px-4 text-xs hover:bg-red-500 hover:text-white">Add to purchase</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/24712934/pexels-photo-24712934/free-photo-of-den-va-tr-ng-b-d-dan-ba-ng-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw" //25% of width
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-red-500 text-red-500 w-max py-2 px-4 text-xs hover:bg-red-500 hover:text-white">Add to purchase</button>
            </Link>
        </div>
    );
};

export default ProductList

//[#35C7A]