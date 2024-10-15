export default function Header() {
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-600",
    "text-yellow-500",
  ];

  const coloredText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className={colors[index % colors.length]}>
        {char}
      </span>
    ));
  };
  return (
    <>
      <h1 className="text-5xl font-bold text-center text-black mt-12">
        THE INCREDIBLE
      </h1>
      <h2 className="text-5xl font-semibold text-center text-gray-400 text mt-0">
        {coloredText("COLOR")} BUZZER
      </h2>
    </>
  );
}
