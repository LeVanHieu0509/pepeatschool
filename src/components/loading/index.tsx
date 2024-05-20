import PulseLoader from "./pulse-loader";
import { LoadingWrapper } from "./styled";

interface LoadingFixedProps {
  loading: boolean;
  color?: string;
  top?: number;
  isOverlap?: boolean;
  isFullContent?: boolean;
}

const LoadingSection = ({
  loading = true,
  color,
  isFullContent = false,
  isOverlap = false,
  top = 0,
}: LoadingFixedProps) => {
  return loading ? (
    <LoadingWrapper
      isFullContent={isFullContent}
      isOverlap={isOverlap}
      top={top}>
      <PulseLoader loading color={color} />
    </LoadingWrapper>
  ) : null;
};

export default LoadingSection;
