import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../css/Screens.scss";
import Services from "../ServicesData";
import Skills from "./Skills";
import Education from "./Education";
import Certificates from "./Certificates";
import { useState } from "react";
import { Helmet } from "react-helmet";

const SCE = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
        <TabList>
          <Tab>Skills</Tab>
          <Tab>Educations</Tab>
          {/* <Tab>Certifications</Tab> */}
        </TabList>

        <TabPanel>
          <Helmet>
            <title>Skills - Chhavi Paliwal</title>
          </Helmet>
          <Skills skills={Services.skills} />
        </TabPanel>
        <TabPanel>
          <Helmet>
            <title>Educations - Chhavi Paliwal</title>
          </Helmet>
          <Education educations={Services.education} />
        </TabPanel>
        {/* <TabPanel>
          <Helmet>
            <title>Certifications - Chhavi Paliwal</title>
          </Helmet>
          <Certificates certifications={Services.certificates} />
        </TabPanel> */}
      </Tabs>
    </>
  );
};

export default SCE;
