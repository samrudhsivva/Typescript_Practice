type statusProps = {
  status: "Error" | "Loading" | "Success";
};
export const Status = (props: statusProps) => {
  if (props.status === "Error") {
    return <h1>Error while getting status</h1>;
  } else if (props.status === "Loading") {
    return <h1>Loading status</h1>;
  } else if (props.status === "Success") {
    return <h1>Success getting status</h1>;
  } else {
    return <h1> another code</h1>;
  }
};
