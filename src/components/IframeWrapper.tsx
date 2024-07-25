import { BorderBeam } from "@/components/magicui/border-beam";

interface IframeWrapperProps {
  children: React.ReactNode;
}

const IframeWrapper: React.FC<IframeWrapperProps> = ({ children }) => (
  <div className="relative overflow-hidden rounded-[20px] w-[450px] h-[800px]">
    {/* Content container */}
    <div >
      <BorderBeam />
        {children}
      </div>
    </div>
);