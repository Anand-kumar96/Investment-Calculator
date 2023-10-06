import logo from '../assets/investment-calculator-logo.png'
const Header = () => {
  return (
    <header className="my-8 text-center">
      <img className="w-20 h-20 mx-auto" src={logo} alt="" />
      <h1 className="my-4 font-bold text-2xl text-white mx-auto">
        Investment Calculator
      </h1>
    </header>
  )
}

export default Header
