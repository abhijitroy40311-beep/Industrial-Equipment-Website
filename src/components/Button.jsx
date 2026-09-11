import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  className = '', 
  onClick,
  type = 'button',
  icon: Icon
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium text-sm transition-all duration-200 rounded-sm";
  
  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white shadow-sm hover:shadow",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
    outlineWhite: "border-2 border-white text-white hover:bg-white hover:text-orange-600",
    white: "bg-white text-orange-600 hover:bg-slate-100 shadow-sm",
    whatsapp: "bg-[#25D366] hover:bg-[#20b858] text-white shadow-sm"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} onClick={onClick}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} onClick={onClick} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined}>{content}</a>;
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
