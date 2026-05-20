# 📚 Course Catalog Explorer

> An interactive, data-driven course browser. Upload a JSON file of courses and instantly filter, sort, and inspect them — no backend, no frameworks, no bullshit.

![Language](https://img.shields.io/badge/language-JavaScript-F7DF1E?style=flat-square)
![UI](https://img.shields.io/badge/HTML-CSS-1572B6?style=flat-square)
![Size](https://img.shields.io/badge/size-%3C5KB-00C853?style=flat-square)

---

## ✨ Features

- **Upload any JSON course dataset** — works with your data, no schema lock-in
- **Filter by Level, Credits, or Instructor** — dynamic multi-select filtering
- **Sort by Title, ID, or Semester** — reorder the list instantly
- **Click any course** — see full details (description, instructor, credits, semester)
- **Zero dependencies** — pure vanilla HTML, CSS, and JavaScript
- **No backend required** — runs entirely in the browser, files never leave your machine

## 🚀 Quick Start

```bash
# Clone it
git clone https://github.com/Mihir713/course-catalog-explorer.git
cd course-catalog-explorer

# Open directly (no server needed)
open index.html
```

Or serve with any static server:
```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## 🧪 Sample Data

Create a JSON file like `courses.json` and upload it:

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
  },
  {
    "id": "CS201",
    "title": "Data Structures",
    "instructor": "Dr. Johnson",
    "level": "Undergraduate",
    "credits": 4,
    "semester": "Winter 2026",
    "description": "Arrays, linked lists, trees, and graphs."
  }
]
```

### Expected JSON Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Course code |
| `title` | string | Course name |
| `instructor` | string | Professor name |
| `level` | string | e.g. Undergraduate, Graduate |
| `credits` | number | Credit hours |
| `semester` | string | Term offered |
| `description` | string | Short course summary |

## 📁 Project Structure

```
course-catalog-explorer/
├── index.html      # Main HTML — layout + controls
├── scripts.js      # All JS — upload, filter, sort, display
└── styles.css      # Styling — clean, responsive
```

## 🖱️ How to Use

1. Open `index.html` in your browser
2. Click **"Choose File"** and select your JSON file
3. Click **"Load Data"**
4. Browse the course list — click any course for details
5. Use the dropdowns to **filter** by level, credits, or instructor
6. Use the **sort** dropdown to reorder the list

## 🧠 Concepts Demonstrated

| Concept | Implementation |
|---------|---------------|
| File I/O (browser) | `FileReader` + `JSON.parse` |
| Dynamic filtering | `Array.filter()` with chained conditions |
| Event-driven UI | `addEventListener` on file input + filter selects |
| Set deduplication | `new Set(courses.map(c ⇒ c.level))` for filter options |
| Template literals | `innerHTML = \`…\${course.title}…\`` for details pane |
| Defensive parsing | `try/catch` around JSON parse with user feedback |

## 📄 License

MIT