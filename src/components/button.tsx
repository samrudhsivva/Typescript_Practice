import { ButtonHTMLAttributes } from "react";

type buttonProps = {
  handleCick: (event: React.MouseEvent<HTMLButtonElement> , id : number) => void;
};
export const Button = (props: buttonProps) => {
  return (
    <>
      <button onClick={(event)=>props.handleCick(event,3)}>Click</button>
    </>
  );
};
