import { useState } from "react";
import { ZoomIn, X } from "lucide-react";

interface ZoomableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export default function ZoomableImage({ src, alt, className = "", ...rest }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsZoomed(true)}
        className={`relative rounded-lg overflow-hidden cursor-pointer group ${className}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="object-cover transition-transform group-hover:scale-105 w-full h-full"
          {...rest}
        />
        <div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="flex items-center gap-2 text-black bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            <ZoomIn className="w-4 h-4" />
            Ampliar
          </span>
        </div>
      </div>

      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false);
              }}
              className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative h-[80vh]">
              <img src={src} alt="Imagen ampliada" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
