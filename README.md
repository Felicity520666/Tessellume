# Tessellume

## About This Project

This is an interactive tessellation art piece built with [p5.js](https://p5js.org/). A grid of arc-based tiles responds to your mouse — hovering triggers smooth rotations, and clicking recolors nearby tiles. The result is a living, breathing pattern inspired by Truchet tiles.

## How It Works

The canvas fills your browser window with a grid of square tiles. Each tile draws a pair of quarter-circle arcs in one of two orientations, creating continuous flowing curves across the grid. When your cursor passes over a tile, it performs a full eased rotation. Clicking sends a color ripple outward from the point of contact.

## Interaction

- **Hover** over tiles to trigger spin animations
- **Click** anywhere to recolor tiles near the cursor
- **Resize** the browser window — the grid adapts automatically

## Running Locally

No build step required. Just open `index.html` in a browser:

```bash
# macOS
open index.html

# or use any local server
python3 -m http.server 8000
```

Then visit `http://localhost:8000` if using a server.

## Online Demo
Feel free to check out the live demo [here](https://felicity520666.github.io/Tessellume/)

## Project Structure

```
Tessellume/
├── index.html   — Entry point, loads p5.js and scripts
├── sketch.js    — Setup, draw loop, interaction handlers
├── tile.js      — Tile class (rendering, animation state)
├── easing.js    — Easing functions for smooth animation
└── README.md
```

## Dependencies

- [p5.js 1.9.0](https://p5js.org/) (loaded via CDN)

## Color Palette

The palette draws from deep ocean blues through warm terracotta tones:

| Swatch | RGB |
|--------|-----|
| Deep navy | 9, 54, 108 |
| Ocean blue | 17, 80, 135 |
| Teal | 7, 112, 134 |
| Cyan | 8, 148, 159 |
| Seafoam | 90, 190, 175 |
| Terracotta | 178, 124, 111 |
| Amber | 216, 138, 102 |
| Rose | 176, 96, 109 |
| Plum | 132, 63, 82 |
| Mauve | 169, 130, 144 |

## Project Screenshot

![Screenshot of Tessellume](screenshot.png)

## Creator
Hello everyone! I'm [Felicity](https://github.com/Felicity520666)! I love coding and creating in my free time. This project was inspired by the beauty of patterns and thr elegance of art. I hope you enjoy interacting with it as much as I enjoyed making it!