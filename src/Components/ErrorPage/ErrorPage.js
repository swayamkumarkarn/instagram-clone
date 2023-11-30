import { useRouteError } from "react-router-dom";
import insta_logo from '../../images/logoinsta.png';
import "./ErrorPage.css";
import SearchComponent from "../SearchComponent/SearchComponent";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="error__page">
      <img className="error__logo" src={insta_logo} />

      <SearchComponent/>

      <div className="error__text">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {/* <i>{error.statusText || error.message}</i> */}
        </p>
      </div>
    </div>
  );
}
