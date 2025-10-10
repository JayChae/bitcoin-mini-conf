export const isMobileRef = (setIsMobile: (isMobile: boolean) => void) => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  const handleMediaQueryChange = (e: MediaQueryListEvent) => {
    setIsMobile(!e.matches);
  };

  // 미디어 쿼리 변경 시 이벤트 등록
  mediaQuery.addEventListener("change", handleMediaQueryChange);

  return () => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange);
  };
};
