import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RecruitDetailPage from "../../pages/RecruitDetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<RecruitDetailPage />} />
    </Routes>
  );
};

export default Router;
