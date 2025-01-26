import { useEffect, useState } from "react";

type UseLazyLoadProps = { imagesUrl: string[] };

export function useLazyLoad({ imagesUrl }: UseLazyLoadProps) {
  let [isLoading, setIsLoading] = useState(true);

  async function cacheImages(images: Array<string>) {
    setIsLoading(true);
    const promises = await images.map((url) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(null);
        image.onerror = () => reject(null);
      });
    });

    await Promise.all(promises);
    setIsLoading(false);
  }

  // Load images before starting website
  useEffect(() => {
    cacheImages(imagesUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
  };
}
