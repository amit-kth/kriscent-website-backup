export function scrollToSection(sectionId: string, offsetPixels: number = 100): void {
  const section = document.getElementById(sectionId);

  if (section) {
    // Get the top position of the section relative to the viewport
    const sectionRect = section.getBoundingClientRect();
    const absoluteTop = window.scrollY + sectionRect.top - offsetPixels;

    // Scroll to the section smoothly with offset
    window.scrollTo({
      top: absoluteTop,
      behavior: 'smooth'
    });
  }
}