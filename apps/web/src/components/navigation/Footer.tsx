
function Footer() {
  return (
    <footer className="bg-plum-ink text-[oklch(0.86_0.01_300)] pt-12 px-5 pb-8 md:pt-18 md:px-11 md:pb-9">
      <div className="max-w-280 my-0 mx-auto grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-8 md:gap-10">
        <div>
          <div className="flex items-center gap-2.75 mb-4">
            <img src="/logos/Ethos-White-512.png" className="w-18 h-18" />
          </div>
          <p className="text-sm leading-[1.7] text-[oklch(0.72_0.012_300)] max-w-75 m-0">
            Bread, pastry & coffee, made with intention. Baked fresh daily
            across Los Angeles.
          </p>
        </div>
        <div>
          <p className="text-[12px] tracking-[0.2em] uppercase text-[oklch(0.66_0.04_298)] mb-4 font-semibold">
            Visit
          </p>
          <p className="text-sm leading-[1.9] text-[oklch(0.78_0.012_300)] m-0">
            Silver Lake
            <br />
            Venice
            <br />
            Mon-Sun · 7am-6pm
          </p>
        </div>
        <div>
          <p className="text-[12px] tracking-[0.2em] uppercase text-[oklch(0.66_0.04_298)] mb-4 font-semibold">
            Connect
          </p>
          <p className="text-sm leading-[1.9] text-[oklch(0.78_0.012_300)] m-0">
            Instagram
            <br />
            hello@ethosbakery.la
            <br />
            (323) 555-0119
          </p>
        </div>
      </div>
      <div className="max-w-280 mt-12 mx-auto mb-0 pt-6 border-t border-t-[oklch(0.36_0.02_300)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12.5px] text-[oklch(0.62_0.012_300)]">
        <span>© 2026 Ethos Bakery · Los Angeles, CA · Not a Real Business ·</span>
        <div className="flex items-center gap-3">
          <span>Property of JRoybalDev</span>
          <div className="flex items-center gap-2.5">
            <a href="https://github.com/jroybaldev" target="_blank" rel="noopener noreferrer" className="hover:text-white duration-300 hover:scale-115 cursor-pointer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/jroybaldev" target="_blank" rel="noopener noreferrer" className="hover:text-white duration-300 hover:scale-115 cursor-pointer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://jroybal.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white duration-300 hover:scale-115 cursor-pointer" aria-label="Website">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
