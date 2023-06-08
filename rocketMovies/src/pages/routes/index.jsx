import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./app.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  )
}