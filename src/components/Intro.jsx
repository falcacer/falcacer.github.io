import React from "react";
import Button from "./Button.jsx";
import resume from "../../public/Resume.pdf";
import Social from "./Social.jsx";

export default function Intro() {
  return (
    <div className="flex flex-wrap py-20 space-x-10 justify-center space-y-10">
      <div className="grid grid-cols-1 gap-3 text-center border-2 rounded-lg p-5">
        <img
          src="./assets/perfil.jpg"
          alt="perfil"
          className="object-cover w-32 h-32 mx-auto rounded-full"
        />
        <p classNameName="text-base md:text-xl mb-3 font-medium">
          Francisco Alcacer
        </p>
        <h1 class="text-gray-500 text-sm">Rosario, Argentina</h1>
        <Social />
      </div>
      <div className=" grid gap-8">
        <h1 className="flex text-4xl font-light dark:text-white  justify-center">
          Software Engineer
        </h1>
        <p classNameName="flex text-sm max-w-xl mb-6 font-bold justify-center">
          Computer Science student interested in enhancing knowledge related to
          my area. <br /> I aspire to expand my horizons by being part of
          projects that increase my interpersonal,
          <br /> academic and work skills.
        </p>
        <div className="flex justify-center">
        <Button
          title={"Download CV"}
          path={resume}
          download={"Francisco Alcacer- Resume"}
        />
        </div>
      </div>
    </div>
  );
}

{
  /* <div classNameName="flex items-center justify-center flex-col text-center pt-20 pb-6">
<h1 classNameName="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Francisco Alcacer</h1>
<p classNameName="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
<p classNameName="text-sm max-w-xl mb-6 font-bold">
  Computer Science student interested in enhancing knowledge related to my
  area. I aspire to expand my horizons by being part of projects that
  increase my interpersonal, academic and work skills.
</p>
<Button title={"Download CV"} path={resume} download={"Francisco Alcacer- Resume"}/>
</div> */
}

// <div className="flex flex-col items-center p-20">
// <div className="max-w-screen-md px-10 py-6 mx-4 rounded-lg shadow md:mx-auto border-1 mb-10">
//   <div className="flex flex-col items-start w-full m-auto sm:flex-row">
//     <div className="flex mx-auto sm:mr-10 sm:m-0">
//       <div className="items-center justify-center w-20 h-20 m-auto mr-4 sm:w-32 sm:h-32 grid grid-cols-1 gap-5">
//         <img
//           src="./assets/perfil.jpg"
//           className="object-cover w-20 h-20 mx-auto rounded-full sm:w-32 sm:h-32"
//         />
//           <h1 class="text-gray-500 text-sm">Rosario, Argentina</h1>
//           <Social></Social>
//       </div>
//     </div>
//     <div className="flex flex-col pt-6 mx-auto my-auto sm:pt-0 sm:mx-0">
//       <div className="flex flex-col mx-auto sm:flex-row sm:mx-0 p-2">
//         <h1 className="flex pr-4  text-xl font-light dark:text-white sm:text-3xl">
//           Francisco Alcacer
//         </h1>
//       </div>
//       <p classNameName="text-sm max-w-xl mb-6 font-bold">
//         Computer Science student interested in enhancing knowledge related
//         to my area. I aspire to expand my horizons by being part of
//         projects that increase my interpersonal, academic and work skills.
//       </p>
//     </div>
//   </div>
//   <div className="w-full pt-5"></div>
// </div>
// <Button title={"Download CV"}></Button>
// </div>
