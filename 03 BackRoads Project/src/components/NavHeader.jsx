import logo from './../assets/logo.svg'
// eslint-disable-next-line react/prop-types
const NavHeader = ({toggle,setToggle}) => {
  
  return (
    <div className="nav-header">
      <img src={logo} className="nav-logo" alt="backroads" />
      <button type="button" className="nav-toggle" id="nav-toggle" onClick={()=>setToggle(!toggle)}>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  )
}
export default NavHeader
