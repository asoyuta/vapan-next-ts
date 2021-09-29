import {Header, Footer} from './index'

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
