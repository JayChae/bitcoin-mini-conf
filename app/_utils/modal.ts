export const handleModalRef = (onClose: () => void) => {
  document.body.style.overflow = "hidden";

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  document.addEventListener("keydown", handleEscape);

  return () => {
    document.body.style.overflow = "unset";
    document.removeEventListener("keydown", handleEscape);
  };
};
