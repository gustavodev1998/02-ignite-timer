import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />

        {/* Outlet posiciona os elementos especificos de cada pagina */}
        <Outlet />
      </LayoutContainer>
    </div>
  );
}
