import { navItems } from './data'
// eslint-disable-next-line react/prop-types
const NavItems = ({navClass}) => {
  return (
    <>
      {navItems.map((item) => (
        <li key={item}>
          <a href={`#${item.toLowerCase()}`} className={`${navClass}-link`}>
            {item}
          </a>
        </li>
      ))}
    </>
  )
}
export default NavItems
