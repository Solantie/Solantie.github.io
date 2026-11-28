/**
 * Single place to maintain the sticky-note projects.
 * Add one object to this array; cards and category counts update automatically.
 * image: '/projects/file.png' -> put file in public/projects/file.png
 * url: '/en/projects/...' OR external link; null -> no fake button.
 * visible: false -> hide a draft without deleting it.
 * Supported categories: speech, game, plugin, blog.
 * Supported statuses: coursework, prototype, planned.
 * Every title and description has en/de/cn translations.
 */
export const projects = [

  {
    visible: true,
    id: 'fleurs-lid', category: 'speech', year: '2026', status: 'coursework',
    image: null, url: 'https://github.com/Solantie/Spoken-Language-Identification-using-CNN-and-XLM-R', tags: ['Python', 'PyTorch', 'MFCC', 'CNN'],
    title: {en: 'Spoken Language ID', de: 'Spracherkennung nach Sprache', cn: '语种识别'},
    description: {en: 'Identifying six spoken languages from short audio clips; exploring segment length and speaker leakage.', de: 'Sechs gesprochene Sprachen aus kurzen Audiosequenzen erkennen; Einfluss von Segmentlänge und Sprechertrennung.', cn: '基于CNN和XLM-R的语种识别项目，使用0.5秒语音片段识别六种语言，并分析音频长度、开头沉默片段对训练效果的影响。'},
  },
  {
    visible: true,
    id: 'speech-filter', category: 'speech', year: '2026', status: 'coursework',
    image: null, url: 'https://github.com/Solantie/Pitch-based-Speech-Filtering', tags: ['MATLAB', 'F0', 'VAD'],
    title: {en: 'Pitch-based Speech Filtering', de: 'Stimmbasierte Sprachfilterung', cn: '基于基频的语音过滤'},
    description: {en: 'A training-free speech filtering pipeline comparing frame-level and segment-level masking.', de: 'Eine trainierungsfreie Pipeline zum Vergleich von frame- und segmentbasierten Maskierungsverfahren.', cn: '对比frame-based和segment-based掩码的男女声分离语音处理流程。'},
  },
  {
    visible: true,
    id: 'color-training', category: 'plugin', year: '2026', status: 'prototype',
    image: null, url: 'https://solantie.github.io/Color-Study-Lab-/en/index.html', tags: ['Color', 'UI', 'Prototype'],
    title: {en: 'Color Training Lab', de: 'Farbtraining-Labor', cn: '色感训练器'},
    description: {en: 'An interactive tool for practicing color perception and matching. A Photoshop workflow is being explored.', de: 'Ein interaktives Tool für Farbgefühl und Farbabgleich; die Photoshop-Integration wird untersucht.', cn: '调整HSB滑块，训练色感与拾色能力。'},
  },
  {
    visible: true,
    id: 'indie-game', category: 'game', year: '—', status: 'planned',
    image: null, url: 'https://monkeydays.netlify.app/', tags: ['Indie', 'Game'],
    title: {en: 'Indie Game — To Be Added', de: 'Indie-Game — Folgt', cn: '独立游戏 · 猴时候'},
    description: {en: "Don't want to be a human any more? Let's live as a monkey! A text adventure game rich of options and suprising endings.", de: 'Platz für zukünftige Spielprototypen und Experimente.', cn: '不想做人了？一起做猴吧！猴子很聪明，知道再进化就要上班了。自由选择做峨眉山的猴子，还是回归原始森林，抑或……继续做人？'},
  },
  {
    visible: false,
    id: 'technical-blog', category: 'blog', year: '—', status: 'planned',
    image: null, url: null, tags: ['Notes', 'Learning'],
    title: {en: 'Technical Notes — To Be Added', de: 'Technische Notizen — Folgen', cn: '技术日志 · 待添加'},
    description: {en: 'Short write-ups about what I learn and build.', de: 'Kurze Beiträge über meine Lern- und Entwicklungsprojekte.', cn: '记录技术学习、实验和项目开发过程。'},
  },
];

