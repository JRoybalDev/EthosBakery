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
    <div className='sticky top-0 z-50 flex items-center px-11 justify-between [background:color-mix(in_oklab,var(--ivory)_82%,transparent)] [backdrop-filter:blur(12px)]'>
      {/* Left Nav (LOGO) */}
      <div className='w-18 pb-2 hover:cursor-pointer'>
        <img className='object-cover' src='/logos/Ethos-PurpleDeep-512.png' onClick={() => handleRedirect('/')}/>
      </div>

      {/* Right Nav */}
      <div className='py-4 '>
        <div className="flex items-center gap-8">
        {navDirectory.map((navItem, idx) => (
          <div key={idx} onClick={() => handleRedirect(navItem.url)} className={`text-sm underline-none cursor-pointer duration-300 ${navItem.url === '/order' ? "rounded-full bg-primary px-5.5 py-2.5 font-semibold tracking-[0.04em] text-white transition hover:bg-purple-deep hover:scale-105" : "font-medium text-muted-ink hover:text-plum-ink hover:scale-105"}`}>
            {navItem.label}
          </div>
        ))}
      </div>
      </div>
      
    </div>
  )
}

export default Navbar
