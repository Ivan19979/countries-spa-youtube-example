import { Info } from "./Info";
import { useDetails } from "./use-details";

export const CountryDetails = ({ name = "", navigate }) => {
  const { currentCountry, status, err } = useDetails(name);

  return (
    <>
      {status === "loading" && <h2>Loading ...</h2>}
      {err && <h2>{err}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};
