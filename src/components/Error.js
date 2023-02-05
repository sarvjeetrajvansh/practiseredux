import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div>Code fatt gaya</div>
      <p>{error.message}</p>
      <p>{error.status}</p>
    </>
  );
};
export default Error;
