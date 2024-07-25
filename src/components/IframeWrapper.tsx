import { BorderBeam } from "@/components/magicui/border-beam";

interface IframeWrapperProps {
  children: React.ReactNode;
}

const IframeWrapper: React.FC<IframeWrapperProps> = ({ children }) => (
  <div className="relative overflow-hidden rounded-[20px] w-[450px] h-[700px]">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
    
    {/* 3D effect layers */}
    <div className="absolute inset-0 bg-black opacity-50 filter blur-md"></div>
    <div className="absolute inset-1 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[18px]"></div>
    
    {/* Content container */}
    <div className="relative z-10 w-full h-full bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-black/80 rounded-[19px] shadow-lg overflow-hidden
                    transform perspective-1000 hover:scale-[1.02] transition-all duration-300 ease-out">
      <BorderBeam />
      
      {/* White background for input areas */}
      <div className="absolute inset-x-4 top-[200px] bottom-4 bg-white/10 rounded-lg filter blur-sm"></div>
      
      {/* Iframe container */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  </div>
);