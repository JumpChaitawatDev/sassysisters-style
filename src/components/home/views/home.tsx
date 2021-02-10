import React from "react";

type UsehomeProps = {};
type ReturnTypeUsehome = ReturnType<typeof usehome>;
function usehome(props: UsehomeProps) {
  const {} = props;
  return {};
}

type homeViewProps = ReturnTypeUsehome & {};
let HomeView: React.FC<homeViewProps> = ({}) => {
  return <>homeView 2</>;
};

type homeProps = UsehomeProps & Omit<homeViewProps, keyof ReturnTypeUsehome>;
let Home: React.FC<homeProps> = ({ ...others }) => {
  const home = usehome({});
  return <HomeView {...home} {...others} />;
};

export default Home;
