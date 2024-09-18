import React from "react";
import Image from "next/image";

const Page: React.FC = () => {
  return (
    <>
      <div className="justify-center md:h-[678px] h-[700px] my-4 mt-6">
        <div className="text-center flex justify-center">
          <p className=" w-3/4 md:w-1/4 ">
            Hey there, my name is <strong>VTJesus</strong>! This website serves
            as proof of my capabilities as a developer. I am using{" "}
            <strong>React with Typescript</strong>
            <br /> <br />I wanted to build a website that showcased what I am
            capable of. I hope you find this website interesting because I had
            alot of fun building it.. <br />
            <br /> Check out my Gitub  in the footer!
          </p>
        </div>
        <div className="md:w-1/5 w-2/4 mx-auto">
          <Image
            src="https://sccy794tycp3utm5.public.blob.vercel-storage.com/about/W+NIKE+AIR+MAX+1-W27nYpBAHHTKiCTFfuOT7uqLsK0WQW.png"
            alt="W Nike Air Max 1"
            width={1000}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
