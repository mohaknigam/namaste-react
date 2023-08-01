import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { data, status, statusText } = err;
  return (
    <div className="errorDiv">
      <h1 className="errorMessage">{data}</h1>
      <h1>{status + " : " + statusText}</h1>
    </div>
  );
};

export default Error;
