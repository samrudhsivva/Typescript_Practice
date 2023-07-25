type profileProps = {
  myName: string;
  myContact: number;
  isGraduate: boolean;
  carDetails: { carName: string; cc: number }[];
  sex: "Male" | "Female";
  children: React.ReactNode;
  //children : string
  feedback?: string;
};
export const MyProfile = (props: profileProps) => {
  return (
    <>
      <ol>
        <li>{props.myName}</li>
        <li>{props.myContact}</li>
        <li>{props.isGraduate}</li>
        <li>
          <ul>
            <li>
              {props.carDetails.map((car) => {
                return (
                  <h4>
                    {car.carName} {car.cc}
                  </h4>
                );
              })}
            </li>
            <li>{props.sex}</li>
            <li>{props.feedback}</li>
          </ul>
        </li>
        <li>{props.children}</li>
      </ol>
    </>
  );
};
