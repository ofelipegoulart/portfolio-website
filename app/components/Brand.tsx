export default function Brand() {
  return (
    <div
      className="brand flex items-center space-x-3 cursor-pointer group"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(); }}
    >
      <img
        src="brand.png"
        alt="Felipe Goulart"
        className="w-9 h-9"
      />

      <span
        className="brand-name font-semibold text-lg tracking-tight transition-colors"
        style={{ color: '#1f2937' }}
      >
        Felipe Goulart
      </span>
    </div>
  );
}