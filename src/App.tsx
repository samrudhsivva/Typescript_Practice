import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Close } from "./components/Close";
import { Administrator } from "./components/Admins";
import { Users } from "./Users";
import { Status } from "./status";
import { Heading } from "./heading";
import { Page } from "./Page";
import { Details } from "./components/myDetails";
import { MyProfile } from "./components/myProfile";
import { Signature } from "./components/Signature";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Container } from "./components/styles";

function App() {
  let UserList = [
    { firstName: "user", lastName: "1" },
    { firstName: "user", lastName: "2" },
  ];
  return (
    <div className="App">
      {
        <>
          <Greet name={"samrudh"} notificationsCount={10} isLoggeIn={false} />
          <Administrator firstName="SAMADMIN" lastName="SIVVA" />
          <Status status="Success" />
          <Heading>This is the Heading PlaceHolder</Heading>
          <Page>
            <Heading children={"HE_MAN"}></Heading>
          </Page>
          <Users usersList={UserList} />
          <Close device="Iphone" name="samrudh" />
          <Details name="Temmu" number={234343235} />

          <MyProfile
            myName={"Samrudh Sivva"}
            myContact={9063821769}
            isGraduate={true}
            carDetails={[
              { carName: "MERCEDES", cc: 1500 },
              { carName: "AUDI", cc: 2500 },
            ]}
            sex={"Male"}
          >
            <Signature></Signature>
          </MyProfile>
          <Button
            handleCick={(e, id) => {
              console.log("button clicked", e, id);
            }}
          />
          <Input value="Samrudh" handleChange={(event) => console.log(event)} />
          <Container style={{ backgroundColor: "yellow", color: "green" }} />
        </>
      }
    </div>
  );
}

export default App;
