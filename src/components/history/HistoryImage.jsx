import ZoomableImage from "@/components/ZoomableImage";

export default function HistoryImage() {
  const historyImage = "/novarub-landing/historia.webp";

  return (
    <ZoomableImage
      src={historyImage}
      alt="Historia de la empresa"
      className="aspect-[16/9]"
    />
  );
}
