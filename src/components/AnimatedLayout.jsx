import { Outlet } from "react-router-dom";
import FadeWrapper from "./FadeWrapper";

export default function AnimatedLayout() {
  return (
    <FadeWrapper>
      <Outlet />
    </FadeWrapper>
  );
}
