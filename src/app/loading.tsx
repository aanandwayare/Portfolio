export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111315]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 p-[2px] animate-spin-slow">
          <div className="flex items-center justify-center w-full h-full bg-[#111315] rounded-[14px]">
            <span className="font-heading font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-copper-300 to-copper-500">
              AW
            </span>
          </div>
        </div>
        <p className="text-xs font-mono text-muted-foreground animate-pulse">
          Initializing Executive Experience...
        </p>
      </div>
    </div>
  );
}
