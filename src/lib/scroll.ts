/**
 * Smoothly scrolls to a section by its element ID,
 * offset by the fixed navigation height.
 */
export const scrollToSection = (sectionId: string, offset = 80): void => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: elementPosition - offset,
    behavior: 'smooth',
  });
};
