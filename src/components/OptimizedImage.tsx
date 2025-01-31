import { useEffect, useRef } from "react";

interface Props {
  lowResUrl: string;
  highResUrl: string;
}

/**
 * This image replaces lowResUrl with highResUrl.
 * Preloading of lowResUrl image should be done at parent page.
 */
const OptimizedImage: React.FC<Props> = ({ lowResUrl, highResUrl }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imgRef!.current!.dataset!.src!;

    img.onload = () => {
      imgRef!.current!.src! = imgRef!.current!.dataset!.src!;
    };
  }, []);

  return <img ref={imgRef} alt="" src={lowResUrl} data-src={highResUrl}></img>;
};

export default OptimizedImage;
