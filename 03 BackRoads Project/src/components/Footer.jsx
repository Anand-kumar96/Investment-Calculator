import NavIcons from './NavIcons'
import NavItems from './NavItems'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <NavItems navClass={'footer'} />
      </ul>
      <ul className="footer-icons">
        <NavIcons navClass={'footer'} />
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved By Anand.
      </p>
    </footer>
  )
}
export default Footer
