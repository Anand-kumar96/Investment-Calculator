import { navLink } from './data'
// eslint-disable-next-line react/prop-types
const NavIcons = ({navClass}) => {
  return (
    <>
      {navLink.map((link, index) => (
        <li key={index}>
          <a
            href={`https://www.${link}.com`}
            target="_blank"
            className={`${navClass}-link`}
            rel="noreferrer"
          >
            <i className={`fab fa-${link}`}></i>
          </a>
        </li>
      ))}
    </>
  )
}
export default NavIcons
