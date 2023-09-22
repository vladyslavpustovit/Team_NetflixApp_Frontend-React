import React from "react";
// import Lottie from "lottie-react";

function About() {
  return (
    <div className="bg-blue-200 my-5 w-full flex flex-col md:flex-row md:space-x-4 md:space-y-0 h-full">
      <div className="bg-sky-300 md:w-2/3 lg:w-3/4 flex flex-col items-center px-5">
        <h1 className="text-center text-1xl md:text-3xl py-10">About Us</h1>
        <div className="sm:border rounded">
          <img src="/assets/images/cancel1.png" alt="tree" className=""/>
          {/* <Lottie/> */}
          <p className="p-5">
            To be truly brilliant, an essay needs to utilise the right language.
            You could make a great point, but if it’s not intelligently
            articulated, you almost needn’t have bothered. Developing the
            language skills to build an argument and to write persuasively is
            crucial if you’re to write outstanding essays every time. In this
            article, we’re going to equip you with the words and phrases you
            need to write a top-notch essay, along with examples of how to
            utilise them. It’s by no means an exhaustive list, and there will
            often be other ways of using the words and phrases we describe that
            we won’t have room to include, but there should be more than enough
            below to help you make an instant improvement to your essay-writing
            skills. This article is suitable for native English speakers and
            those who are learning English at Oxford Royale Academy and are just
            taking their first steps into essay writing.
          </p>
        </div>
      </div>
      <div className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">left</div>
    </div>
  );
}

export default About;
