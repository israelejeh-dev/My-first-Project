import HerePage from "../components/landingPagecomponent/herePage";
import AboutLanding from "../components/landingPagecomponent/aboutLanding";
import More from "../components/servicePagecomponent/more";

export default function Landing({ go }) {
  return (
    <>
      <HerePage go={go} />
      <AboutLanding go={go} />
      <More />
    </>
  );
}
