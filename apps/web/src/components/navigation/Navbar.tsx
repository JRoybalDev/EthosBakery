import { useNavigate } from 'react-router-dom';

interface NavItem {
  label: string;
  url: string;
}

interface NavbarProps {
  navDirectory: NavItem[];
}

function Navbar({ navDirectory }: NavbarProps) {
  const navigate = useNavigate();

  const handleRedirect = (url: string) => {
    if (url.startsWith('#')) {
      const el = document.querySelector(url);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(url);
    }
  };
  
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between px-11 py-4 [background:color-mix(in_oklab,var(--ivory)_82%,transparent)] [backdrop-filter:blur(12px)]'>
      {/* Left Nav (LOGO) */}
      <span className='font-serif font-semibold text-2xl leading-1' onClick={() => handleRedirect('/')}>Ethos</span>

      {/* Right Nav */}
      <div className="flex items-center gap-8">
        {navDirectory.map((navItem, idx) => (
          <div key={idx} onClick={() => handleRedirect(navItem.url)} className={`text-sm underline-none cursor-pointer duration-300 ${navItem.url === '/order' ? "rounded-full bg-primary px-5.5 py-2.5 font-semibold tracking-[0.04em] text-white transition hover:bg-purple-deep" : "font-medium text-muted-ink hover:text-plum-ink"}`}>
            {navItem.label}
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Navbar
