import AppHeader from "./components/header";
import React from "react";
import { Route, Switch } from "react-router-dom";

import AppHome from "./components/home/home";
import AppAbout from "./components/about/about";
import AppExperience from "./components/experience/experience";
import AppTeaching from "./components/teaching/teaching";
import ApprResearch from "./components/research/research";
import AppProjects from "./components/projects/projects";
import AppPublications from "./components/publications/publications";
import Resume from "./components/about/resume";
import WorkExperience from "./components/about/workexperience";
import Education from "./components/about/education";
import AwardsAndHonours from "./components/about/awardsandhonours";

function App() {
  return (
    <>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={AppHome} />
        <Route exact path="/about" component={AppAbout} />
        <Route path="/about/resume" component={Resume} />
        <Route path="/about/workexperience" component={WorkExperience} />
        <Route path="/about/education" component={Education} />
        <Route path="/about/AwardsAndHonours" component={AwardsAndHonours} />
        <Route path="/experience" component={AppExperience} />
        <Route path="/teaching" component={AppTeaching} />
        <Route path="/research" component={ApprResearch} />
        <Route path="/projects" component={AppProjects} />
        <Route path="/publications" component={AppPublications} />
      </Switch>
    </>
  );
}

export default App;
