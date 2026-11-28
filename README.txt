Copy into your Astro project:

  src/components/ProjectsWall.astro  <- components/ProjectsWall.astro
  src/components/ProjectNote.astro   <- components/ProjectNote.astro
  src/data/projects.js              <- data/projects.js

Keep your current SiteShell.astro and global.css unchanged.
SiteShell should already import and use <ProjectsWall lang={lang} projectsLabel={projectsLabel} />.

To add another note, add one object to src/data/projects.js.
To hide a draft, set visible: false.
For images, put PNG/JPG/WebP in public/projects and use image: '/projects/name.png'.
For links, use url: 'https://...' or url: '/en/projects/...' (note: static local routes need to exist).
To change note visual appearance, edit ProjectNote.astro.
To change layout and filters, edit ProjectsWall.astro.

No third-party package needed.

Example for adding a note
{
  visible: true,

  id: "drawing-assistant",
  category: "plugin",
  year: "2026",
  status: "prototype",

  image: "/projects/drawing-assistant.png",
  url: null,

  tags: ["Photoshop", "JavaScript", "UX"],

  title: {
    en: "Drawing Assistant",
    de: "Zeichenassistent",
    cn: "绘画辅助工具"
  },

  description: {
    en: "A Photoshop tool that automates canvas setup for drawing practice.",
    de: "Ein Photoshop-Werkzeug zur automatischen Vorbereitung von Zeichenübungen.",
    cn: "自动配置画布和临摹区域的 Photoshop 绘画辅助工具。"
  }
},
