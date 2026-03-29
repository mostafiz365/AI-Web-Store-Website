import { Suspense, useState } from "react";
import "./App.css";
import AiModels from "./Components/AiModels/AiModels";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SelectedCarts from "./Components/SelectedCarts/SelectedCarts";

const fetchAiModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

function App() {
  const aiModelsPromise = fetchAiModels();
  const [activeTab, setActiveTab] = useState("models");

  const [subscribeCart, setSubscribeCart] = useState([]);

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box bg-transparent justify-center">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          onClick={() => setActiveTab("models")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${subscribeCart.length})`} 
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "models" && (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <AiModels aiModelsPromise={aiModelsPromise} subscribeCart={subscribeCart} setSubscribeCart={setSubscribeCart}></AiModels>
        </Suspense>
      )}

      {
        activeTab === 'cart' && <SelectedCarts subscribeCart={subscribeCart} setSubscribeCart={setSubscribeCart}></SelectedCarts>
      }

      

      <Footer></Footer>
    </>
  );
}

export default App;
