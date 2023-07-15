import { toast } from "react-toastify";

export default function SingleColor({ index, color }) {
  const { hex, weight } = color;

  async function saveToClickboard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Copied to clipboard.");
      } catch (error) {
        toast.error("Failed to copy to clipboard.");
      }
    } else {
      toast.error("Clickboard not accessible.");
    }
  }
  return (
    <article
      style={{ background: `#${hex}` }}
      className={index < 10 ? "color" : "color color-light"}
      onClick={saveToClickboard}
    >
      <p className="percent">{weight}%</p>
      <p className="hex">#{hex}</p>
    </article>
  );
}
