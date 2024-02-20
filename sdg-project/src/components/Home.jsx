import React from "react";
import Nav from "./Nav";
import { FaRegUserCircle, FaRegBookmark, FaChevronDown, FaPlus, FaCamera, FaVideo, FaFileAlt, FaPencilAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <Nav />
      <div className="h-screen w-full">
        <div className="flex h-full mt-[64px] w-screen flex-row justify-around p-4">
          <div className="flex flex-col w-[20%] gap-4 border-2 border-blue-500 border-collapse border-t-[3rem] flex flex-col">
            <div className="flex flex-col items-center  p-4">
              <FaRegUserCircle className="text-[5rem] mb-4" />
              <p className="text-[22px] mb-2">User Name</p>
              <p className="text-[22px] mb-2 text-[#918484] ">User Bio</p>
              
            </div>

            <div className="h-0 w-full border border-black"/>

            <div className="h-[20%]">

                <div className="flex flex-row p-3">
                    <span className="flex justify-between w-full">
                        <p>Network</p>
                        <p className="text-[#0573D9]">Total</p>
                    </span>
                </div>

                <div className="flex flex-row p-3">
                    <span className="flex justify-between w-full">
                        <p className="font-bold">Manage your network</p>
                        <p className="text-[#0573D9]">Total</p>
                    </span>
                </div>


            </div>

            <div className="h-0 w-full border border-black"/>

            <div className="flex flex-row p-4 justify-between items-center w-[50%]">

                <FaRegBookmark />
                <p>Saved Items</p>
            </div>

            <div className="h-0 w-full border border-black"/>

            <div className="flex items-center gap-0 mt-4 ml-4">
              <select className="bg-transparent border-0 appearance-none">
                <option value="recents">Recents</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select><FaChevronDown />
            </div>

            <p className="ml-4 text-[#0077CD]">Groups</p>

            <div className="flex items-center gap-3 ml-4">
              <p>Events</p>
              <FaPlus />
            </div>

            <div className="flex items-center gap-0 mt-0 ml-4">
              <select className="bg-transparent border-0 appearance-none text-[#0077CD]">
                <option value="recents">Followed Hashtags</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select><FaChevronDown />
            </div>

            

    </div>

    <div className="w-[47%] border border-blue-500 h-full">
      <div className="h-[15%] w-full flex flex-col relative">
        <div className="flex-grow flex items-center justify-between p-2 z-10">
          <div className="flex items-center gap-2">
            <FaPencilAlt className="text-2xl" />
            <p>Start a post</p>
          </div>
          <div className="flex items-center gap-x-4">
            <FaCamera className="z-10 text-2xl" />
            <FaVideo className="z-10 text-2xl" />
            <FaFileAlt className="z-10 text-2xl" />
          </div>
        </div>
        <div className="bg-[#F3F6F8] p-2 z-10 h-[40%] flex items-center">
          <p>Write an article on workAble</p>
        </div>

        <div className="flex items-center justify-between w-full">
      <hr className="flex-grow border-gray-400" />
      <div className="flex items-center gap-2">
        <p>Sort By</p>
        <select className="border border-gray-400 rounded-md p-1">
          <option>Top</option>
          <option>Recent</option>
        </select>
        <FaChevronDown className="text-2xl" />
      </div>
    </div>

      </div>
    </div>


          <div className="w-[25%] h-52 border border-blue-500">

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;