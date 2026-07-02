import { useEffect } from "react";
import App from "../App";

export default function Home() {
  useEffect(() => { document.title = "Ethos Bakery | Home"; }, []);
  return <App />;
}
