"use client";

export default function PinContainer({
  showPinContainer,
  pinError,
  setShowPinContainer,
  handelePinSubmit,
  setPinError,
}) {
  return (
    showPinContainer && (
      <div className="z-[100] bg-[#141414] flex-col min-h-screen absolute left-0 top-0 justify-center flex items-center right-0">
        <div>
          <span className="cursor-pointer absolute top-[50px] right-[40px]"></span>
        </div>
        <h1 className="text-gray-400 font-bold text-[16px] mb-4">
          Profile Lock is currently ON
          {pinError ? (
            <h2>Wrong PIN. Please try again</h2>
          ) : (
            <h2>Enter your PIN</h2>
          )}
        </h1>
      </div>
    )
  );
}
