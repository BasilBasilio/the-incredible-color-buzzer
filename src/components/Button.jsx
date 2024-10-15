export default function Button({ handleClick, children }) {
  return (
    <button
    className="w-40 h-12 flex items-center justify-center rounded font-bold bg-gray-400 hover:bg-red-500 text-white transition-all"
    onClick={handleClick}
    >
      {children}
    </button>
  )
}