import ZoomableImage from "@/components/ZoomableImage";

export default function AboutImages() {
  const images = [
    "/novarub-landing/nosotros-3.webp",
    "/novarub-landing/nosotros-2.webp",
    "/novarub-landing/nosotros-1.webp",
  ];

  return (
    <>
      {images.map((src, idx) => (
        <ZoomableImage
          key={idx}
          src={src}
          alt={`RuedasPro ${idx + 1}`}
          className={`${idx === 2 ? "sm:col-span-2" : ""} h-[200px]`}
        />
      ))}
    </>
  );
}
