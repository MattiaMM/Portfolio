## 2024-03-24 - Mobile Navigation Accessibility
**Learning:** A "hidden md:hidden" class pattern means the element is always hidden. When implementing mobile toggles, ensure the element is visible on mobile breakpoints (`flex` or `block`) and hidden on desktop (`md:hidden`).
**Action:** Always verify mobile navigation visibility by checking responsiveness classes, and ensure `aria-controls` points to the correct element ID for accessibility.
