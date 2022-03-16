import Buttons from "./components/Buttons";
import Gallery from "./components/Gallery";
import ThemeSwitch from "./components/ThemeSwitch";
import PageContextProvider from "./PageContext";

function App() {
  return (
    <>
      <div className="w-screen h-screen max-h-screen flex flex-col justify-between pb-4 overflow-hidden dark:bg-slate-500">
        <h1 className="text-7xl text-center italic text-slate-700 drop-shadow-lg  my-10 dark:text-slate-300 ">
          Photo Gallery
        </h1>
        <PageContextProvider>
          <Gallery />
          <Buttons />
        </PageContextProvider>
      </div>
      <ThemeSwitch />
    </>
  );
}

export default App;
