import { BorderBeam } from "@/components/magicui/border-beam";

const IframeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative rounded-xl overflow-hidden">
    <BorderBeam />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-50"></div>
    <div className="relative z-10 p-1">
      {children}
    </div>
  </div>
);