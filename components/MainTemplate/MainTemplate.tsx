import Header from "../Header";

const MainTemplate = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainTemplate;