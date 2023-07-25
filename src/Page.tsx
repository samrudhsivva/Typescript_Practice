import { Heading } from "./heading";

type pageProps = {
  children: React.ReactNode;
};
export const Page = (props: pageProps) => {
  return <>{props.children}</>;
};
