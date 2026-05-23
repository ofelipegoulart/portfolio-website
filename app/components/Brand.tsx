export default function Brand() {
  return (
    <div className="flex items-center space-x-3 cursor-pointer group">
      <img
        src="brand.png"
        alt="Felipe Goulart"
        className="w-9 h-9"
      />
      <span className="font-semibold text-lg tracking-tight transition-colors"
        style={{ color: '#1f2937' }}
      >Felipe Goulart</span>
    </div>
  );
}