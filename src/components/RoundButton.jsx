export default function RoundButton({ color, size , children, onClick }) {
    return (
      <button
        className={`${size} ${color} rounded-full flex items-center justify-center text-white font-bold`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  