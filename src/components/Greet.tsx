type GreetProps = {
  name: string;
  notificationsCount: number;
  isLoggeIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <>
      <h1>
        {props.isLoggeIn
          ? `Hey ${props.name}, Good Morning , you've ${props.notificationsCount} notifications!!!`
          : `Welcome Guest`}
      </h1>
    </>
  );
};
