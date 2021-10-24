import { useEffect, useRef } from 'react'

interface Props {
  lowResUrl: string,
  highResUrl: string
}

const FastImage: React.FC<Props> = ({ lowResUrl, highResUrl }) => {
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const img = new Image();
    img.src = imgRef!.current!.dataset!.src!;

    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      imgRef!.current!.src! = imgRef!.current!.dataset!.src!;
    };
  }, [])


  return (
    <img ref={imgRef} alt="" src={lowResUrl} data-src={highResUrl}></img>
  )
}

export default FastImage
