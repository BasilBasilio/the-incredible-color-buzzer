import { Link } from 'react-router-dom'

export default function ButtonLink({ to, handleClick, color, children }) {
    return (
      <Link 
        to={to}
        className={`w-48 h-12 flex items-center justify-center rounded font-bold ${color} text-white transition-all`}
        onClick={handleClick}
        >
          {children}
      </Link>
    );
  }