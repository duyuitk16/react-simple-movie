const Button = ({ onClick, className, children, full = false, bgColor = "primary", type = "button" }) => {
  let bgClassName = "bg-primary"
  switch (bgColor) {
    case "secondary":
      bgClassName = "bg-secondary"
      break;
    default:
      break;
  }
  return (
    <button type={type} onClick={onClick} className={`${full ? 'w-full' : ''} px-6 py-3 mt-auto font-semibold rounded-lg ${bgClassName} ${className} `}>{children}</button>
  )
}

export default Button