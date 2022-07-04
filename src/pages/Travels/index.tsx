import React from "react";
import { Link } from "react-router-dom";
import { MdCircle, MdLocalShipping } from "react-icons/md";

import { CardTravel, ContainerTravels, MainContainer } from "./styles";
import { DefaultPalettColors } from "../../assets/colors";

import { EnumStatusTravel, travels } from "../../mocks";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Travels: React.FC = () => {
  return (
    <MainContainer>
      <Header
        icon={
          <MdLocalShipping
            color={DefaultPalettColors.travel.orange}
            size={24}
          />
        }
        label={"Viagens"}
      />
      <ContainerTravels>
        {travels.map((travel) => (
          <Link
            to={"/expenses"}
            style={{
              textDecoration: "none",
              height: 100,
              width: "100%",
            }}
          >
            <CardTravel>
              <div>
                <span>Viagem</span>
                <span>{travel.number}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span>{travel.origin}</span>
                <span>{travel.destiny}</span>
              </div>
              <MdCircle
                size={16}
                color={
                  travel.status === EnumStatusTravel.finished
                    ? DefaultPalettColors.travel.green
                    : DefaultPalettColors.travel.orange
                }
              />
            </CardTravel>
          </Link>
        ))}
      </ContainerTravels>
      <Footer>
        <div>
          <MdCircle color={DefaultPalettColors.travel.green} />
          <span>Concluído</span>
        </div>
        <div>
          <MdCircle color={DefaultPalettColors.travel.orange} />
          <span>Em andamento</span>
        </div>
      </Footer>
    </MainContainer>
  );
};

export default Travels;
