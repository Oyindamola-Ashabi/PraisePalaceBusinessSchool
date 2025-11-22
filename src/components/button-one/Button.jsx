import { Link } from "react-router-dom"
import './Button.css'

const Button = ({title, link, type = 'primary'}) => {
  return (
    <div>
      <Link to={link}> <button className={type}>{title}</button></Link>
    </div>
  )
}

export default Button