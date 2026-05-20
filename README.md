# Course Catalog Explorer

> Client-side course data browser with dynamic multi-attribute filtering, sorting, and detail inspection. Zero-dependency vanilla stack — ingest JSON, navigate instantly, no backend required.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML-5-E34F26?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-3-1572B6?style=flat-square&logo=css3)
![Bundle](https://img.shields.io/badge/bundle-5KB-0ABF53?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-9742FF?style=flat-square)

---

## Overview

A lightweight, single-page course browser that operates entirely on the client side. Upload a structured JSON dataset and immediately interact with it through cross-filtering (level, credits, instructor), sortable columns (title, ID, semester), and click-to-inspect detail panels. No data ever leaves the browser — the entire pipeline is local.

## Features

- **JSON ingestion** — drag-and-drop file load via `FileReader` API with schema validation
- **Multi-attribute filtering** — independent dropdown filters for level, credits, and instructor that compose additively
- **Sortable list view** — reorder by title, course ID, or semester via single-select control
- **Detail inspection** — click any course to expand full metadata (description, instructor, credits, level, semester)
- **Reactive filter population** — filter dropdowns dynamically populate from the loaded dataset using `Set` deduplication
- **Zero server dependency** — runs from the filesystem or any static host

## Quick Start

```bash
git clone https://github.com/Mihir713/course-catalog-explorer.git
cd course-catalog-explorer
open index.html
```

Or serve behind any static HTTP server:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Data Contract

Uploaded JSON must be an array of objects matching this schema:

```json
[
  {
    "id": "CS101",
    "title": "Introduction to Programming",
    "instructor": "Dr. Smith",
    "level": "Undergraduate",
    "credits": 4,
    "semester": "Fall 2025",
    "description": "Fundamentals of programming using Python."
  }
]
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Course code |
| `title` | `string` | Display name |
| `instructor` | `string` | Instructor full name |
| `level` | `string` | Academic level (Undergraduate, Graduate, etc.) |
| `credits` | `number` | Credit hours |
| `semester` | `string` | Term identifier |
| `description` | `string` | Short description |

## Architecture

```
index.html       → Layout shell, control bindings
scripts.js       → Data pipeline (parse → filter → sort → render)
styles.css       → Responsive layout, hover states, detail pane
```

The data pipeline is a pure function chain:

```
FileReader → JSON.parse → [filter] → [sort] → render()
```

Filters compose via `Array.filter()` with implicit AND logic across selected values. Sort uses `Array.sort()` with a configurable comparator selected by the dropdown value.

## Tech Specs

| Property | Value |
|----------|-------|
| Files | 3 (`.html` + `.js` + `.css`) |
| Bundle size | ~5 KB total |
| Dependencies | 0 |
| Data flow | Unidirectional (parse → filter → render) |
| State | Stateless (re-renders from filtered array on each interaction) |
| Compat | All modern browsers (Chrome, Firefox, Safari, Edge) |

## License

MIT