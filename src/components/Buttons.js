import { useContext } from "react";
import { PageContext } from "../PageContext";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdSkipPrevious,
} from "react-icons/md";

const Buttons = () => {
  const { page, setPage } = useContext(PageContext);
  const handleNext = () => setPage(page + 1);
  const handlePrev = () => setPage((curr) => curr - 1);
  const handleFirst = () => setPage(1);

  return (
    <div className="flex justify-center">
      {page > 2 ? (
        <button
          onClick={handleFirst}
          className="p-3 text-center border rounded-xl shadow text-2xl hover:text-slate-700 hover:bg-white text-white bg-slate-700 mr-2 dark:bg-stone-900 dark:border-slate-900 dark:text-indigo-400 dark:hover:bg-slate-700"
        >
          <span className="flex items-center">
            <MdSkipPrevious />
          </span>
        </button>
      ) : (
        ""
      )}
      {page > 1 ? (
        <>
          <button
            onClick={handlePrev}
            className="p-3 border text-center rounded-xl shadow text-2xl hover:text-white hover:bg-slate-700 dark:bg-zinc-900 dark:border-slate-900 dark:text-indigo-400 dark:hover:bg-slate-700"
          >
            <span className="flex items-center">
              <MdNavigateBefore />
              Previous
            </span>
          </button>
          <span className="p-3 border rounded-lg shadow text-2xl mx-3 text-sky-600 dark:bg-zinc-900 dark:border-slate-900 dark:text-indigo-400 ">
            {page}
          </span>
        </>
      ) : (
        ""
      )}
      <button
        onClick={handleNext}
        className="p-3 border  text-center rounded-xl shadow text-2xl hover:text-white hover:bg-slate-700 dark:bg-zinc-900 dark:border-slate-900 dark:text-indigo-400 dark:hover:bg-slate-700"
      >
        <span className="flex items-center">
          Next <MdNavigateNext />
        </span>
      </button>
    </div>
  );
};

export default Buttons;
