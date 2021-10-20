import Header from "../Header";

const Layout = (props: any) => {
  const { children } = props;

  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  )
}

export default Layout;