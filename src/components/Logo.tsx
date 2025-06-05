import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = 'h-8' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image 
        src="/logo.png"
        alt="Mely Logo"
        width={32}
        height={32}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
