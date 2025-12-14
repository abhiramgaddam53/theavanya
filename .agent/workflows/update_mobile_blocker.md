---
description: Update MobileBlocker to lock scroll
---

1. Open `e:/next-js/theavanya/components/MobileBlocker.tsx`
2. Add a `useEffect` hook that depends on `isMobile`.
3. If `isMobile` is true, set `document.body.style.overflow = 'hidden'`.
4. Else, set it to `''`.
5. Clean up by setting it to `''` on unmount.
