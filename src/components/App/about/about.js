import React from "react";
import "./about.css";
import {aboutData} from "./aboutData";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function About() {

  return (
    <>
      <div className="mt-10 px-5">
        <img
          src="/assets/images/vitalii-mazur-EH2AxIneZMw-unsplash.jpg"
          alt="os"
          className="h-[500px] w-full object-cover"
        />
      </div>
      
      <div className="h-full flex-row sm:flex " id="Container">
        <Tabs id="custom-animation" value="Who" className="flex flex-col pb-20">
          <TabsHeader className="py-10">
            {aboutData.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className="flex flex-row rounded">
                <h2 className="text-base font-semibold lg:text-xl">{label}</h2>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            className="flex flex-col lg:flex-row"
            animate={{
              initial: { y: 250 },
              mount: { y: 10 },
              unmount: { y: 250 },
            }}>
            {aboutData.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}
                className="flex text-2xl lg:p-10 lg:text-1xl justify-center items-center font-bold leading-relaxed lg:leading-loose"
                id="desc">
                <p>{desc}</p>
              </TabPanel>
            ))}

            {aboutData.map(({ value, src }) => (
              <TabPanel key={value} value={value} className="lg:p-10 ">
                <img src={src} alt="person" className="rounded-lg" />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}

export default About;
