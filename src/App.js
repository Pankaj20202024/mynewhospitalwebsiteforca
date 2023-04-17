import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TreatmentMainPage from "./component/treatment/TreatmentMainPage";
import TreatmentDetailsContainer from "./component/treatment/TreatmentDetailsContainer";
import MedicalIssueContainer from "./component/treatment/MedicalIssueContainer";
import MentalHealthContainer from "./component/treatment/MentalHealthContainer";
import TestContainer from "./component/treatment/TestContainer";
import CareAndSupportContainer from "./component/treatment/CareAndSupportContainer";
import SurgicalProcedureContainer from "./component/treatment/SurgicalProcedureContainer";
import FoundationMain from "./component/foundation/FoundationMain";
import Branch1 from "./component/foundation/Branch1";
import Branch2 from "./component/foundation/Branch2";
import Branch3 from "./component/foundation/Branch3";
import Branch4 from "./component/foundation/Branch4";
import Branch5 from "./component/foundation/Branch5";
import MoreDetailsOfCurativeTreatment from "./component/treatment/MoreDetailsOfCurativeTreatment";
import MoreDetailsOfPalliativeTreatment from "./component/treatment/MoreDetailsOfPalliativeTreatment";
import MoreDetailsOfPreventativeTreatment from "./component/treatment/MoreDetailsOfPreventativeTreatment";
import AboutWebsite from "./component/about/AboutWebsite";

import Event from "./component/event/Event";
import Carrer from "./component/carrer/Carrer";
import Donate from "./component/donate/Donate";

function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Treatment" element={<TreatmentMainPage />} />
          <Route
            path="TreatmentDetail"
            element={<TreatmentDetailsContainer />}
          />
          <Route path="Test" element={<TestContainer />} />
          <Route path="MedicalIssue" element={<MedicalIssueContainer />} />
          <Route path="MentalHealth" element={<MentalHealthContainer />} />
          <Route path="CareAndSupport" element={<CareAndSupportContainer />} />
          <Route
            path="SurgicalProcedure"
            element={<SurgicalProcedureContainer />}
          />
          <Route
            path="CurativeMoreDetails"
            element={<MoreDetailsOfCurativeTreatment />}
          />
          <Route
            path="PalliativeMoreDetails"
            element={<MoreDetailsOfPalliativeTreatment />}
          />
          <Route
            path="PreventativeMoreDetails"
            element={<MoreDetailsOfPreventativeTreatment />}
          />

          <Route path="Foundations" element={<FoundationMain />} />
          <Route path="Branch1" element={<Branch1 />} />
          <Route path="Branch2" element={<Branch2 />} />
          <Route path="Branch3" element={<Branch3 />} />
          <Route path="Branch4" element={<Branch4 />} />
          <Route path="Branch5" element={<Branch5 />} />

          <Route path="About" element={<AboutWebsite />} />

          <Route path="Event" element={<Event />} />
  
          <Route path="Carrer" element={<Carrer />} />
          <Route path="Donate" element={<Donate />} />
          <Route path="Search" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

