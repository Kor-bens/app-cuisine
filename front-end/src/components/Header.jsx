import './Header.css';

function Header({ children }) {
  return (
    <>
    <div id="header" className="h-1">
    { children }
    </div>
    </>
  )
}
export default Header