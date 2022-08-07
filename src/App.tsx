import { Navbar } from "./components/Navbar";
import { Router } from "./router";
import { RecoilRoot } from "recoil";
import { Loading } from "./components/Loading";
import { ReactElement, Suspense } from "react";

function App(): ReactElement {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Router />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
