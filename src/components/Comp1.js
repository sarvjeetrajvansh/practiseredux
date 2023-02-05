import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCount } from "../utils/counterSlice";
import Body from "./Body";

const Comp1 = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  dispatch(setCount(Number(id)));
  return (
    <>
      <p className=" flex items-center justify-center bg-slate-50 text-3xl text-blue-900 font-extrabold ">
        Comp : {id}
      </p>
      <Body />
    </>
  );
};
export default Comp1;
