C-BRIDGE static landing — photo assets
=======================================

hero-mark.jpg   — hero photo (brand mark on a cream wall, oak/pistachio panel).
logo-mark.jpg   — small badge shown next to the header wordmark (book-cover mock).
mobile-mark.jpg — compact circular mark shown only on mobile header (<=720px).

All three are wired up via <img> tags with an onerror fallback, so if a
file is ever missing the layout still degrades gracefully instead of
showing a broken-image icon.
