// ─────────────────────────────────────────────────────────────────────────────
// PAPERS DATA
// Add new papers by copying an entry. Use **Name** to bold an author.
// Set  selected: true  to include the paper in "Selected Publications" on the
// home page. Set  selected: false  (or omit) to show it only on /publications.
// awards: array of { type: 'oral' | 'highlight', label: 'string' }, or null.
// ─────────────────────────────────────────────────────────────────────────────

const PAPERS = [
  {
    selected: true,
    title: 'Imaging Hidden Objects with Consumer LiDAR using Motion-Induced Aperture Sampling',
    url: 'https://sidsoma.github.io/consumer-nlos/',
    authors: '**Siddharth Somasundaram**, Aaron Young, Akshat Dave, Adithya Pediredla, Ramesh Raskar',
    venue: 'Nature 2026 (to appear)',
    awards: null,
    description: 'Practical non-line-of-sight imaging using off-the-shelf consumer LiDAR hardware.',
    imgBase:  'assets/projects/consumer-nlos/nlos_track.gif',
    imgHover: 'assets/projects/consumer-nlos/nlos_track.gif',
    links: [
      { label: 'project page', url: 'https://sidsoma.github.io/consumer-nlos/' },
      { label: 'code',         url: 'https://github.com/sidsoma/consumer-nlos' },
    ],
  },
  {
    selected: false,
    title: 'Shoot-Bounce-3D: Single-Shot Occlusion-Aware 3D from Lidar by Decomposing Two-Bounce Light',
    url: 'https://shoot-bounce-3d.github.io/',
    authors: 'Tzofi Klinghoffer, **Siddharth Somasundaram***, Xiaoyu Xiang*, Yuchen Fan, Christian Richardt, Akshat Dave, Ramesh Raskar, Rakesh Ranjan',
    venue: 'SIGGRAPH Asia 2025',
    awards: null,
    description: 'Data-driven shape and material recovery under complex time-resolved light transport.',
    imgBase:  'assets/projects/shoot-bounce-3d/multiplexed_transient.gif',
    imgHover: 'assets/projects/shoot-bounce-3d/multiplexed_transient.gif',
    links: [
      { label: 'project page', url: 'https://shoot-bounce-3d.github.io/' },
      { label: 'paper',        url: 'https://shoot-bounce-3d.github.io/assets/Shoot-Bounce-3D.pdf' },
    ],
  },
  {
    selected: false,
    title: 'Event Cameras Meet SPADs for High-Speed, Low-Bandwidth Imaging',
    url: 'https://ieeexplore.ieee.org/abstract/document/11045277',
    authors: 'Manasi Muglikar, **Siddharth Somasundaram**, Akshat Dave, Edoardo Charbon, Ramesh Raskar, Davide Scaramuzza',
    venue: 'IEEE TPAMI 2025',
    awards: null,
    description: 'Sensor fusion approach for high-speed, low-light imaging.',
    imgBase:  'assets/projects/event-spad-fusion/eventspad_before.png',
    imgHover: 'assets/projects/event-spad-fusion/eventspad_after.png',
    links: [
      { label: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/11045277' },
    ],
  },
  {
    selected: true,
    title: 'Blurred LiDAR for Sharper 3D: Robust Handheld 3D Scanning with Diffuse LiDAR and RGB',
    url: 'https://nikhilbehari.github.io/bls3d-web/',
    authors: 'Nikhil Behari, Aaron Young, **Siddharth Somasundaram**, Tzofi Klinghoffer, Akshat Dave, Ramesh Raskar',
    venue: 'CVPR 2025',
    awards: [{ type: 'highlight', label: 'Highlight' }],
    description: 'Sensor fusion approach for 3D reconstruction of textureless surfaces in low-light.',
    imgBase:  'assets/projects/blurred-lidar/bls3d.gif',
    imgHover: 'assets/projects/blurred-lidar/bls3d.gif',
    links: [
      { label: 'project page', url: 'https://nikhilbehari.github.io/bls3d-web/' },
      { label: 'video',        url: 'https://drive.google.com/file/d/130w0TyBZqT8X_viOH13GAMsmpNCYcRDu/view' },
      { label: 'code',         url: 'https://github.com/NikhilBehari/bls3d' },
      { label: 'data',         url: 'https://drive.google.com/drive/folders/1SovYX8B8pm9hjGmgmNIze04-bpMrajZs' },
      { label: 'paper',        url: 'https://arxiv.org/abs/2411.19474' },
    ],
  },
  {
    selected: false,
    title: 'Handheld Mapping of Specular Surfaces using Consumer-Grade Flash LiDAR',
    url: 'https://lidarmirror.github.io/',
    authors: 'Tsung-Han Lin, Connor Henley, **Siddharth Somasundaram**, Akshat Dave, Moshe Laifenfeld, Ramesh Raskar',
    venue: 'ICCP 2024',
    awards: null,
    description: 'Mapping specular surfaces using natural handheld motion of consumer-grade LiDAR.',
    imgBase:  'assets/projects/handheld-mirror-mapping/mirror_mapping_before.png',
    imgHover: 'assets/projects/handheld-mirror-mapping/mirror_mapping_after.png',
    links: [
      { label: 'project page', url: 'https://lidarmirror.github.io/' },
      { label: 'paper',        url: 'https://lidarmirror.github.io/static/pdfs/ICCP2024_MirrorMapping.pdf' },
    ],
  },
  {
    selected: true,
    title: "PlatoNeRF: 3D Reconstruction in Plato's Cave via Single-View Two-Bounce Lidar",
    url: 'https://platonerf.github.io/',
    authors: 'Tzofi Klinghoffer, Xiaoyu Xiang*, **Siddharth Somasundaram***, Yuchen Fan, Christian Richardt, Ramesh Raskar, Rakesh Ranjan',
    venue: 'CVPR 2024',
    awards: [ { type: 'highlight', label: 'Best Paper Finalist', icon: 'trophy' }, { type: 'oral', label: 'Oral' }],
    description: 'Single-view occlusion-aware 3D reconstruction using two-bounce LiDAR.',
    imgBase:  'assets/projects/plato-nerf/plato_results.gif',
    imgHover: 'assets/projects/plato-nerf/plato_results.gif',
    links: [
      { label: 'project page', url: 'https://platonerf.github.io/' },
      { label: 'video',        url: 'https://www.youtube.com/watch?v=tNdPlGUsCPw&ab_channel=TzofiKlinghoffer' },
      { label: 'code',         url: 'https://github.com/facebookresearch/PlatoNeRF' },
      { label: 'data',         url: 'https://github.com/facebookresearch/PlatoNeRF/releases/tag/v0' },
      { label: 'paper',        url: 'https://arxiv.org/pdf/2312.14239.pdf' },
    ],
  },
  {
    selected: false,
    title: 'Role of Transients in Two-Bounce Non-Line-of-Sight Imaging',
    url: 'https://sidsoma.github.io/transient-2b-nlos/',
    authors: '**Siddharth Somasundaram**, Akshat Dave, Connor Henley, Ashok Veeraraghavan, Ramesh Raskar',
    venue: 'CVPR 2023',
    awards: null,
    description: 'LiDAR transients can reduce the number of measurements needed for two-bounce non-line-of-sight imaging.',
    imgBase:  'assets/projects/transient-2b-nlos/twonlos_before.PNG',
    imgHover: 'assets/projects/transient-2b-nlos/twonlos_before.PNG',
    links: [
      { label: 'project page', url: 'https://sidsoma.github.io/transient-2b-nlos/' },
      { label: 'video',        url: 'https://youtu.be/9K_oV_QY-z0' },
      { label: 'code',         url: 'https://github.com/sidsoma/Transient-2B-NLOS' },
      { label: 'paper',        url: 'https://openaccess.thecvf.com/content/CVPR2023/html/Somasundaram_Role_of_Transients_in_Two-Bounce_Non-Line-of-Sight_Imaging_CVPR_2023_paper.html' },
    ],
  },
  {
    selected: false,
    title: 'Detection and Mapping of Specular Surfaces using Multibounce LiDAR Returns',
    url: 'https://www.media.mit.edu/projects/detecting-and-mapping-transparent-or-mirror-like-surfaces-with-lidar/overview/',
    authors: 'Connor Henley, **Siddharth Somasundaram**, Joseph Hollmann, Ramesh Raskar',
    venue: 'Optics Express 2023',
    awards: null,
    description: 'Detect and map specular surfaces using angle-of-arrival and time-of-flight of light.',
    imgBase:  'images/specular_geometry.png',
    imgHover: 'images/specular_results.gif',
    links: [
      { label: 'project page', url: 'https://www.media.mit.edu/projects/detecting-and-mapping-transparent-or-mirror-like-surfaces-with-lidar/overview/' },
      { label: 'code',         url: 'https://github.com/co24401/Imaging-Glass-and-Mirrors' },
      { label: 'paper',        url: 'https://opg.optica.org/oe/fulltext.cfm?uri=oe-31-4-6370&id=525900' },
    ],
  },
  {
    selected: false,
    title: 'Physics vs. Learned Priors: Rethinking Camera Design for Task-Specific Camera and Algorithm Design',
    url: 'https://ieeexplore.ieee.org/abstract/document/9887681',
    authors: 'Tzofi Klinghoffer*, **Siddharth Somasundaram***, Kushagra Tiwary*, Ramesh Raskar',
    venue: 'ICCP 2022',
    awards: null,
    description: 'Review perspective on convergence of computational imaging, end-to-end optimization, and physics-based machine learning for imaging system design.',
    imgBase:  'assets/projects/physics-ml-survey/e2e_perspective.png',
    imgHover: 'assets/projects/physics-ml-survey/axes_perspective.png',
    links: [
      { label: 'video', url: 'https://www.youtube.com/watch?v=FDQFiAUrPHo&t=4751s&ab_channel=ICCP' },
      { label: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/9887681' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// RENDER HELPERS — no need to edit below this line
// ─────────────────────────────────────────────────────────────────────────────

function _formatAuthors(str) {
  return str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function _awardBadges(awards) {
  if (!awards || !awards.length) return '';
  return awards.map(a => {
    const icon = a.icon === 'trophy'
      ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M19 5h-2V3H7v2H5C3.9 5 3 5.9 3 7v2c0 2.8 2.1 5.1 4.8 5.5.6 1.3 1.7 2.4 3.2 2.8V20H8v2h8v-2h-3v-2.7c1.5-.4 2.6-1.5 3.2-2.8C18.9 14.1 21 11.8 21 9V7c0-1.1-.9-2-2-2zM5 9V7h2v4.3C5.8 10.8 5 9.8 5 9zm14 0c0 .8-.8 1.8-2 2.3V7h2v2z"/></svg>`
      : '';
    return `<span class="award-badge">${icon}${a.label}</span>`;
  }).join('');
}

function _paperCardHTML(paper) {
  const links = paper.links
    .map(l => `<a class="paper-link" href="${l.url}">${l.label}</a>`)
    .join('');
  return `
<article class="paper-card">
  <div class="paper-img-wrap">
    <img data-src="${paper.imgBase}" alt="${paper.title}" class="img-base">
    <img data-src="${paper.imgHover}" alt="" class="img-hover">
  </div>
  <div>
    <a class="paper-title" href="${paper.url}">${paper.title}</a>
    <p class="paper-authors">${_formatAuthors(paper.authors)}</p>
    <div class="paper-meta">
      <span class="venue-badge">${paper.venue}</span>
      ${_awardBadges(paper.awards)}
    </div>
    <p class="paper-desc">${paper.description}</p>
    <div class="paper-links">${links}</div>
  </div>
</article>`;
}

// Draw img into canvas with object-fit: cover behaviour
function _drawCover(ctx, img, cw, ch) {
  const iw = img.naturalWidth || cw;
  const ih = img.naturalHeight || ch;
  const scale = Math.max(cw / iw, ch / ih);
  const x = (cw - iw * scale) / 2;
  const y = (ch - ih * scale) / 2;
  ctx.drawImage(img, x, y, iw * scale, ih * scale);
}

// Wire up hover-only GIF playback for all cards in a container
function _setupImageHover(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll('.paper-card').forEach(card => {
    const wrap     = card.querySelector('.paper-img-wrap');
    const baseImg  = wrap.querySelector('.img-base');
    const hoverImg = wrap.querySelector('.img-hover');
    if (!baseImg || !hoverImg) return;

    const baseSrc  = baseImg.dataset.src;
    const hoverSrc = hoverImg.dataset.src;

    // Base image: snapshot first frame of GIFs to a canvas so they don't autoplay
    if (baseSrc && /\.gif$/i.test(baseSrc)) {
      const loader = new Image();
      loader.onload = function () {
        try {
          const cw = wrap.clientWidth  || 168;
          const ch = wrap.clientHeight || 140;
          const canvas = document.createElement('canvas');
          canvas.width  = cw;
          canvas.height = ch;
          _drawCover(canvas.getContext('2d'), loader, cw, ch);
          canvas.style.cssText = 'width:100%;height:100%;display:block;';
          baseImg.replaceWith(canvas);
        } catch (_) {
          baseImg.src = baseSrc; // canvas tainted — fall back to live GIF
        }
      };
      loader.onerror = () => { baseImg.src = baseSrc; };
      loader.src = baseSrc;
    } else if (baseSrc) {
      baseImg.src = baseSrc;
    }

    // Hover image: load GIF on mouseenter, stop it on mouseleave
    let leaveTimer;
    card.addEventListener('mouseenter', () => {
      clearTimeout(leaveTimer);
      if (hoverSrc) hoverImg.src = hoverSrc;
    });
    card.addEventListener('mouseleave', () => {
      // Wait for the CSS opacity fade-out (250 ms) then clear
      leaveTimer = setTimeout(() => { hoverImg.src = ''; }, 280);
    });
  });
}

function renderPapers(containerId, subset) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = (subset || PAPERS).map(_paperCardHTML).join('');
  _setupImageHover(containerId);
}
