import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

export function DefaultLayout() {
  const { cycles } = useContext(CyclesContext);

  return (
    <div>
      <LayoutContainer maxSize={cycles.length}>
        <Header />

        {/* Outlet posiciona os elementos especificos de cada pagina */}
        <Outlet />
      </LayoutContainer>
    </div>
  );
}
