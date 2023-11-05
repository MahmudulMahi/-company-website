import { useLoaderData } from "react-router-dom";
import Banner from "../../Layouts/Banner/Banner";
import ProudJourney from "../../Layouts/ProudJourney/ProudJourney";
import Solutionsecton from "../../Layouts/Solutionsecton/Solutionsecton";
import Techonologies from "../../Layouts/Techonologies/Techonologies";
import ChooseVisionary from "../../Layouts/chooseVisionary/ChooseVisionary";
import Contact from "../../Layouts/contact/Contact";





const Home = () => {

  return (
    <div >

      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Solutionsecton></Solutionsecton>
        <ChooseVisionary></ChooseVisionary>
        <Techonologies></Techonologies>
        <ProudJourney></ProudJourney>
        <Contact></Contact>
      </div>

    </div>
  );
};

export default Home;