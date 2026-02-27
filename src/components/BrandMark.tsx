export const BrandMark = () => {
  return (
    <div 
      className="p-6 flex items-center gap-3"
      role="banner"
    >
      <div 
        className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-green text-dark-900 font-black tracking-tight flex-shrink-0"
        aria-hidden="true"
      >
        <span className="text-lg leading-none">C</span>
        <span
          aria-hidden="true"
          className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full border border-dark-800 bg-dark-900"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight text-light-100">
          Cryptory
        </span>
        <span className="text-[11px] uppercase font-semibold text-brand-green/90">
          Portfolio
        </span>
      </div>
    </div>
  );
};
