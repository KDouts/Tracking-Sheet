import Tabs from "../tabs/Tabs";
import Header from "../header/Header";
import Buttons from "../buttons/Buttons";
import Router from "../router/Routes"

function App() {
  return (
    <>
      <div>
        <Header />
        <Buttons />
        <Tabs />
        This is the homepage
      </div>
    </>
  );
}

export default App;
