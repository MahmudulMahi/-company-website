import Banner from "../../Layouts/Banner/Banner";
import Solutionsecton from "../../Layouts/Solutionsecton/Solutionsecton";
import ChooseVisionary from "../../Layouts/chooseVisionary/ChooseVisionary";





const Home = () => {
  return (
    <div >

      <Banner></Banner>
      <div className="max-w-max mx-auto">
        <Solutionsecton></Solutionsecton>
        <ChooseVisionary></ChooseVisionary>
      </div>

    </div>
  );
};

export default Home;