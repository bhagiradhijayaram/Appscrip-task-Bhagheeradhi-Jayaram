import { TailSpin } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <TailSpin height="50" width="50" color="#0b69ff" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
