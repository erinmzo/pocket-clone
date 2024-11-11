function MobileNavButton({ IsOpenMobileNav, ...props }: { IsOpenMobileNav: boolean; onClick: () => void }) {
  return (
    <div className="md:hidden">
      <button
        className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
        aria-label="Toggle site navigation"
        type="button"
        aria-expanded="false"
        data-headlessui-state="active"
        id="headlessui-popover-button-:R1epfja:"
        {...props}
      >
        {IsOpenMobileNav ? (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path d="M17 14l-5-5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path d="M5 6h14M5 18h14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default MobileNavButton;
