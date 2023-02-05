import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../utils/counterSlice";
const Body = () => {
  const counter = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" flex flex-col p-4 m-8 items-center justify-center border border-lg  bg-slate-50 border-slate-300 shadow-md shadow-slate-200 rounded-md min-h-full md:flex-row md:space-x-4 md:space-y-0">
        <button
          className=" p-2 bg-green-400 w-20 rounded-md text-center font-bold text-cyan-200 text-3xl shadow-sm shadow-green-50 hover:bg-green-500 hover:text-green-50  "
          onClick={() => {
            dispatch(incrementCount());
          }}
        >
          +
        </button>
        <Link to={"/comp/" + counter} key={counter}>
          <p className="p-4 m-8 bg-slate-50 text-3xl text-blue-400 font-extrabold w-20 flex items-center justify-center">
            {counter}
          </p>
        </Link>
        <button
          className=" p-2 bg-red-400 w-20 rounded-md text-center font-bold text-pink-200 text-3xl shadow-sm shadow-red-100 hover:bg-red-500 hover:text-pink-50 "
          onClick={() => {
            dispatch(decrementCount());
          }}
        >
          -
        </button>
      </div>
    </>
  );
};
export default Body;
