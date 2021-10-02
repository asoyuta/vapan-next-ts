import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'

const Header = () => {
  return (
    <header>
      <div className="img">
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
      </div>
      <nav>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
        <Link href="">
          <a>Menu B</a>
        </Link>
        <Link href="">
          <a>Menu C</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
