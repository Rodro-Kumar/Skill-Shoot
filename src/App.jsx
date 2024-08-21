import About from "./Component/About";
import Banner from "./Component/Banner";
import Company from "./Component/Company";
import Course from "./Component/Course";
import Discount from "./Component/Discount";
import Exist from "./Component/Exist";
import Pricing from "./Component/Pricing";
import Subscribe from "./Component/Subscribe";

function App() {
  return (
    <>
      <div>
        <Banner />
        <Company />
        <Discount />
        <Exist />
        <Course />
        <About />
        <Subscribe />
        <Pricing />
      </div>
    </>
  );
}

export default App;
