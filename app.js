/**
 * CV RENDERER
 * -----------
 * Usually you do not need to edit this file.
 * Add and update content in cv-data.js instead.
 */
(() => {
  const data = window.cvData;

  // Escape text before inserting it into generated HTML.
  const escapeHtml = (value = "") =>
    String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]);

  // Use **text** in cv-data.js when a part of a label should be bold.
  const renderBoldText = (value = "") =>
    escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  const renderLinks = (links = []) => {
    links = links.filter((link) => link.tab || link.url);
    if (!links.length) return "";

    return `<div class="item-links">${links.map((link) => {
      if (link.tab) {
        return `<button type="button" data-go="${escapeHtml(link.tab)}">${escapeHtml(link.label)} →</button>`;
      }

      return `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ↗</a>`;
    }).join("")}</div>`;
  };

  const renderTags = (tags = []) =>
    tags.length
      ? `<div class="tags">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`
      : "";

  const sectionHeading = (section) => `
    <p class="kicker">${escapeHtml(section.kicker)}</p>
    <h2>${escapeHtml(section.title)}</h2>
    ${section.intro ? `<p class="section-intro">${escapeHtml(section.intro)}</p>` : ""}
    ${renderLinks(section.introLinks)}
  `;

  const renderStandardItem = (item) => `
    <article>
      ${item.period ? `<b class="period">${escapeHtml(item.period)}</b>` : ""}
      <h3>${escapeHtml(item.title)}</h3>
      ${item.organization ? `<p class="organization">${escapeHtml(item.organization)}</p>` : ""}
      ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}
      ${renderTags(item.tags)}
      ${renderLinks(item.links)}
    </article>
  `;

  const renderPublication = (item) => `
    <article class="publication">
      ${item.image
        ? `<img src="${escapeHtml(item.image)}" alt="Preview for ${escapeHtml(item.title)}">`
        : `<div class="publication-image-placeholder" role="img" aria-label="No preview image">No Image</div>`}
      <div>
        ${item.period ? `<b class="period">${escapeHtml(item.period)}</b>` : ""}
        <h3>${escapeHtml(item.title)}</h3>
        ${item.authors ? `<p>${renderBoldText(item.authors)}</p>` : ""}
        ${renderLinks(item.links)}
      </div>
    </article>
  `;

  const renderHighlights = () => {
    const section = data.highlights;
    const video = section.featuredVideo;

    const youtubeMatch = (video.url || "").match(
      /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/
    );
    const youtubeId = youtubeMatch ? youtubeMatch[1] : "";

    const videoContent = youtubeId
      ? `<div class="youtube-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${escapeHtml(youtubeId)}"
            title="${escapeHtml(video.title)}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>`
      : video.url
        ? `<a class="play-button" href="${escapeHtml(video.url)}" target="_blank" rel="noopener noreferrer">▶ <span>${escapeHtml(video.buttonLabel)}</span></a>`
        : `<div class="play-placeholder"><i>▶</i><em>Video coming soon</em></div>`;

    document.querySelector("#highlights .content-list").innerHTML = `
      ${sectionHeading(section)}
      <div class="feature">
        <article class="video">
          <span>${escapeHtml(video.label)}</span>
          ${videoContent}
          <div><h2>${escapeHtml(video.title)}</h2><p>${escapeHtml(video.description)}</p></div>
        </article>
        <div class="focus-cards">
          ${section.focusCards.map(renderStandardItem).join("")}
        </div>
      </div>
      <h2 class="subheading">Latest news</h2>
      <ul class="news">
        ${section.news.map((item) => `<li><b>${escapeHtml(item.date)}</b><span>${escapeHtml(item.title)}</span></li>`).join("")}
      </ul>
    `;
  };

  const renderSection = (name) => {
    const section = data[name];
    const container = document.querySelector(`#${name} .content-list`);
    if (!section || !container) return;

    const renderer = name === "publications" ? renderPublication : renderStandardItem;
    container.innerHTML = sectionHeading(section) + section.items.map(renderer).join("");
  };

  const renderAnnouncement = () => {
    const announcement = data.announcement;
    document.querySelector("#announcement").innerHTML = `
      <b>${escapeHtml(announcement.label)}</b>
      <span>${escapeHtml(announcement.text)}</span>
      <button type="button" data-go="${escapeHtml(announcement.tab)}">View →</button>
    `;
  };

  const openTab = (name, updateHash = true) => {
    const panel = document.getElementById(name);
    if (!panel) return;

    document.querySelectorAll("[data-tab]").forEach((button) => {
      const active = button.dataset.tab === name;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", active);
    });

    document.querySelectorAll(".panels > section").forEach((section) => {
      section.hidden = section.id !== name;
    });

    if (updateHash) history.replaceState(null, "", `#${name}`);
    document.querySelector(".tabs").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Render all content once when the page loads.
  renderAnnouncement();
  renderHighlights();
  ["education", "experience", "research", "publications", "skills", "awards"].forEach(renderSection);

  // One delegated handler supports both tabs and links that open another tab.
  document.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-tab]");
    const goButton = event.target.closest("[data-go]");

    if (tabButton) openTab(tabButton.dataset.tab);
    if (goButton) openTab(goButton.dataset.go);
  });

  const initialTab = location.hash.slice(1);
  if (initialTab) openTab(initialTab, false);
})();
