import "./App.css";
import BannerSec from "./BannerSec";
import Footer from "./Footer";
import Header from "./Header";
import TaskBoard from "./taskBoard/TaskBoard";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center justify-center">
        <BannerSec></BannerSec>
        <TaskBoard></TaskBoard>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
