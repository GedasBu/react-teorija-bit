import { Routes, Route } from "react-router-dom";
import Africa from "./Africa";
import America from "./America";
import Grizli from "./Grizli"

function Page() {
  return (
    <Routes>
      <Route path="/" element={<h2>Welcome home</h2>}>
        {" "}
      </Route>
      <Route path="/australia" element={<h2>Welcome to Australia</h2>}>
        {" "}
      </Route>
      <Route path="/america" element={<America></America>}>
        <Route path="bizon" element={<h2>101 bisons</h2>}></Route>{" "}
        <Route path="eagle" element={<h2>101 Eagles</h2>}></Route>{" "}
        <Route path="grizli/:count" element={<Grizli></Grizli>}></Route>{" "}
      </Route>
      <Route path="/africa" element={<Africa></Africa>}>
        <Route path="tigers" element={<h2>101 tiger</h2>}></Route>{" "}
        <Route path="lions" element={<h2>101 lions</h2>}></Route>{" "}
        <Route path="hiena" element={<h2>101 Hiena</h2>}></Route>{" "}
      </Route>

      <Route path="*" element={<h2>404 element not found</h2>}></Route>
    </Routes>
  );
}

export default Page;
