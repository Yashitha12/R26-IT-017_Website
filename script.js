/* SmartGrama research website
   Update the configuration objects below when official details or files change.
   A file is available only when `available: true` AND its path is configured.
*/
const CONFIG = {
  project: {
    name: "SmartGrama",
    id: "R26-IT-017",
    title: "Blockchain-Integrated Microfinance & Welfare Management Platform",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    department: "Department of Information Technology",
  },
  members: [
    {
      id: "tharushika",
      name: "Tharushika A J M H",
      studentId: "IT22194626",
      role: "Research Team Leader",
      leader: true,
      photo: "assets/images/tharushika.jpg",
    },
    {
      id: "muthukumarana",
      name: "Muthukumarana H T D E",
      studentId: "IT22111074",
      role: "Research Team Member",
      leader: false,
      photo: "assets/images/muthukumarana.jpg",
    },
    {
      id: "dissanayaka",
      name: "Dissanayaka D M Y R",
      studentId: "IT22145048",
      role: "Research Team Member",
      leader: false,
      photo: "assets/images/dissanayaka.jpg",
    },
    {
      id: "jayasinghe",
      name: "A.I.Jayasinghe",
      studentId: "IT22552310",
      role: "Research Team Member",
      leader: false,
      photo: "assets/images/jayasinghe.jpg",
    },
  ],
  supervisors: [
    {
      role: "SUPERVISOR",
      name: "Dr. Dharshana Kasthurirathna",
      designation: "Research Supervisor",
      institution: "Department of Information Technology · SLIIT",
      photo: "assets/images/supervisor.jpg",
      bio: "",
    },
    {
      role: "CO-SUPERVISOR",
      name: "Ms. Chathurya Kumarapperuma",
      designation: "Co-Supervisor",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      photo: "assets/images/co-supervisor.jpg",
      bio: "",
    },
  ],
  milestones: [
    {
      title: "Research Proposal",
      date: "10th February 2025",
      status: "Completed",
    },
    {
      title: "Literature Review",
      date: "10th February 2025",
      status: "Completed",
    },
    {
      title: "System Design",
      date: "10th February 2025",
      status: "Completed",
    },
    { title: "Implementation", date: "15th August 2025", status: "Completed" },
    {
      title: "Progress Presentation 1 (PP1)",
      date: "15th March 2025",
      status: "Completed",
    },
    {
      title: "Progress Presentation 2 (PP2)",
      date: "31st August 2025",
      status: "Completed",
    },
    {
      title: "Testing and Evaluation",
      date: "3rd September 2025",
      status: "Completed",
    },
    {
      title: "Final Thesis Submission",
      date: "Date not configured",
      status: "Planned",
    },
    {
      title: "Final Demonstration",
      date: "Date not configured",
      status: "Planned",
    },
  ],
};

const documents = [
  {
    id: "proposal-tharushika",
    title: "Individual Research Proposal",
    category: "proposals",
    member: "tharushika",
    filePath:
      "assets/documents/individual-proposals/tharushika-individual-proposal.pdf",
    fileType: "PDF",
    description:
      "Individual proposal — Smart Contract & dApp Eligibility Automation System.",
    available: true,
  },
  {
    id: "proposal-muthukumarana",
    title: "Individual Research Proposal",
    category: "proposals",
    member: "muthukumarana",
    filePath:
      "assets/documents/individual-proposals/muthukumarana-individual-proposal.pdf",
    fileType: "PDF",
    description:
      "Individual proposal — AI-Based Microfinance Prediction Engine.",
    available: true,
  },
  {
    id: "proposal-dissanayaka",
    title: "Individual Research Proposal",
    category: "proposals",
    member: "dissanayaka",
    filePath:
      "assets/documents/individual-proposals/dissanayaka-individual-proposal.pdf",
    fileType: "PDF",
    description: "Individual proposal — Blockchain Distributed Data Layer.",
    available: true,
  },
  {
    id: "proposal-jayasinghe",
    title: "Individual Research Proposal",
    category: "proposals",
    member: "jayasinghe",
    filePath:
      "assets/documents/individual-proposals/jayasinghe-individual-proposal.pdf",
    fileType: "PDF",
    description: "Individual proposal — NLP Multilingual Communication System.",
    available: true,
  },

  {
    id: "main-thesis",
    title: "Main Group Research Thesis",
    category: "theses",
    member: "",
    filePath: "assets/documents/main-thesis.pdf",
    fileType: "PDF",
    description:
      "Final consolidated group thesis. Upload the approved final document when available.",
    available: true,
  },
  {
    id: "thesis-tharushika",
    title: "Individual Research Thesis",
    category: "theses",
    member: "tharushika",
    filePath: "assets/documents/tharushika-individual-thesis.pdf",
    fileType: "PDF",
    description:
      "Individual thesis — Smart Contract & dApp Eligibility Automation System.",
    available: true,
  },
  {
    id: "thesis-muthukumarana",
    title: "Individual Research Thesis",
    category: "theses",
    member: "muthukumarana",
    filePath: "assets/documents/muthukumarana-individual-thesis.pdf",
    fileType: "PDF",
    description: "Individual thesis — AI-Based Microfinance Prediction Engine.",
    available: true,
  },
  {
    id: "thesis-dissanayaka",
    title: "Individual Research Thesis",
    category: "theses",
    member: "dissanayaka",
    filePath: "assets/documents/dissanayaka-individual-thesis.pdf",
    fileType: "PDF",
    description: "Individual thesis — Blockchain Distributed Data Layer.",
    available: true,
  },
  {
    id: "thesis-jayasinghe",
    title: "Individual Research Thesis",
    category: "theses",
    member: "jayasinghe",
    filePath: "assets/documents/jayasinghe-individual-thesis.pdf",
    fileType: "PDF",
    description: "Individual thesis — NLP Multilingual Communication System.",
    available: true,
  },

  {
    id: "pp",
    title: "Progress Presentation (PP)",
    category: "presentations",
    member: "",
    filePath: "assets/documents/pp.pptx",
    fileType: "PPTX",
    description: "Research progress presentation 1.",
    available: true,
  },
  {
    id: "pp1",
    title: "Progress Presentation 1 (PP1)",
    category: "presentations",
    member: "",
    filePath: "assets/documents/pp1.pptx",
    fileType: "PPTX",
    description: "Research progress presentation 1.",
    available: true,
  },
  {
    id: "pp2",
    title: "Progress Presentation 2 (PP2)",
    category: "presentations",
    member: "",
    filePath: "assets/documents/pp2.pptx",
    fileType: "PPTX",
    description: "Research progress presentation 2.",
    available: true,
  },

  {
    id: "topic-assessment",
    title: "Project Topic Assessment Form",
    category: "other",
    member: "",
    filePath: "assets/documents/project-topic-assessment-form.pdf",
    fileType: "PDF",
    description:
      "Supplied project topic assessment form for project R26-IT-017.",
    available: true,
  },
];

const categoryLabels = {
  proposals: "Proposal",
  theses: "Thesis",
  presentations: "Presentation",
  other: "Project reference",
};
let activeCategory = "all";
let searchTerm = "";
let activeMember = "all";

const escapeHTML = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const memberById = (id) => CONFIG.members.find((member) => member.id === id);
const displayMember = (id) =>
  id ? memberById(id)?.name || "Research team member" : "Group research";
const fileExists = async (path) => {
  try {
    const response = await fetch(path, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
};
const personIcon = `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="16" r="8" stroke="currentColor" stroke-width="2.2"/><path d="M9 40c0-8.2 6.7-14 15-14s15 5.8 15 14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;

function portraitMarkup(path, alt, className = "") {
  return `<div class="portrait-placeholder ${className}">${personIcon}</div><img src="${escapeHTML(path)}" alt="${escapeHTML(alt)}" loading="lazy" hidden onerror="this.hidden=true">`;
}

function renderTeam() {
  const grid = document.getElementById("teamGrid");
  grid.innerHTML = CONFIG.members
    .map(
      (member) => `
    <article class="team-card">
      <div class="portrait">${portraitMarkup(member.photo, `${member.name} profile photograph`)}${member.leader ? '<span class="leader-chip">PROJECT LEADER</span>' : ""}</div>
      <div class="team-card-body">
        <h3>${escapeHTML(member.name)}</h3><p class="student-id">${escapeHTML(member.studentId)}</p>
        <p class="role-label">${escapeHTML(member.role)}</p>
        <button class="member-action" type="button" data-member-docs="${escapeHTML(member.id)}">View research materials <span aria-hidden="true">↗</span></button>
      </div>
    </article>`,
    )
    .join("");
  grid.querySelectorAll("img").forEach((img) => {
    const placeholder = img.previousElementSibling;
    img.addEventListener("load", () => {
      img.hidden = false;
      placeholder.hidden = true;
    });
  });
  grid.querySelectorAll("[data-member-docs]").forEach((button) =>
    button.addEventListener("click", () => {
      activeMember = button.dataset.memberDocs;
      document.getElementById("memberFilter").value = activeMember;
      activeCategory = "all";
      searchTerm = "";
      document.getElementById("documentSearch").value = "";
      updateFilterButtons();
      renderDocuments();
      document
        .getElementById("downloads")
        .scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" });
    }),
  );
}

function renderSupervisors() {
  const grid = document.getElementById("supervisorGrid");
  grid.innerHTML = CONFIG.supervisors
    .map(
      (person) => `
    <article class="supervisor-card">
      <div class="supervisor-photo">${portraitMarkup(person.photo, `${person.role.toLowerCase()} profile photograph`)}</div>
      <div class="supervisor-info"><p class="section-kicker">${escapeHTML(person.role)}</p><h3>${escapeHTML(person.name || "Name to be confirmed")}</h3><p>${escapeHTML(person.designation || "Designation to be confirmed")}</p><p class="supervisor-inst">${escapeHTML(person.institution || "Department / institution to be confirmed")}</p>${person.bio ? `<p>${escapeHTML(person.bio)}</p>` : ""}</div>
    </article>`,
    )
    .join("");
  grid.querySelectorAll("img").forEach((img) => {
    const placeholder = img.previousElementSibling;
    img.addEventListener("load", () => {
      img.hidden = false;
      placeholder.hidden = true;
    });
  });
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = CONFIG.milestones
    .map((item, index) => {
      const statusClass = item.status.toLowerCase().replace(/\s+/g, "-");
      return `<article class="milestone"><span class="milestone-mark">${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.date || "Date not configured")}</p><span class="status-pill ${escapeHTML(statusClass)}">${escapeHTML(item.status)}</span></div></article>`;
    })
    .join("");
}

function memberFilterOptions() {
  const select = document.getElementById("memberFilter");
  select.insertAdjacentHTML(
    "beforeend",
    CONFIG.members
      .map(
        (member) =>
          `<option value="${escapeHTML(member.id)}">${escapeHTML(member.name)}</option>`,
      )
      .join(""),
  );
}

function visibleDocuments() {
  return documents.filter((doc) => {
    const categoryMatch =
      activeCategory === "all" || doc.category === activeCategory;
    const memberMatch = activeMember === "all" || doc.member === activeMember;
    const memberName = doc.member
      ? displayMember(doc.member)
      : "Group research";
    const queryMatch =
      !searchTerm ||
      `${doc.title} ${memberName} ${doc.description} ${doc.fileType}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    return categoryMatch && memberMatch && queryMatch;
  });
}

function fileIcon(type) {
  return (
    { PDF: "PDF", PPTX: "PPT", MP4: "▶", DOCX: "DOC" }[type] || escapeHTML(type)
  );
}

function renderDocuments() {
  const grid = document.getElementById("downloadGrid");
  const filtered = visibleDocuments();
  const materialItems = filtered;
  if (!materialItems.length) {
    grid.innerHTML = `<div class="empty-state"><strong>No matching research materials</strong><p>Try another search term or clear one of the filters.</p></div>`;
    // Project reference files are displayed under "All materials" only, but still searchable.
    if (activeCategory === "all" && activeMember === "all" && !searchTerm) {
      grid.innerHTML = `<div class="empty-state"><strong>No materials configured</strong><p>Add files and update the configuration in script.js.</p></div>`;
    }
    updateCounts();
    return;
  }
  grid.innerHTML = materialItems
    .map((doc) => {
      const ready = doc.available === true && Boolean(doc.filePath);
      const memberName = doc.member
        ? displayMember(doc.member)
        : "Group research";
      const action = ready
        ? `<a class="download-action" href="${escapeHTML(doc.filePath)}" download>Download ↓</a>${doc.category === "videos" && doc.previewPath ? `<a class="download-action preview" href="${escapeHTML(doc.previewPath)}" target="_blank" rel="noopener">Watch</a>` : ""}`
        : `<button class="download-action disabled" type="button" disabled aria-disabled="true">${doc.category === "videos" ? "File not uploaded" : "Coming soon"}</button>`;
      return `<article class="download-card">
      <div class="download-card-top"><span class="file-icon">${fileIcon(doc.fileType)}</span><span class="file-state ${ready ? "" : "unavailable"}">${ready ? "AVAILABLE" : "AWAITING UPLOAD"}</span></div>
      <h3>${escapeHTML(doc.title)}</h3><p class="file-member">${escapeHTML(memberName)}${doc.member ? ` · ${escapeHTML(memberById(doc.member)?.studentId || "")}` : ""}</p>
      <p class="file-description">${escapeHTML(doc.description)}</p>
      <div class="download-card-bottom"><span class="file-meta">${escapeHTML(doc.fileType)} · ${escapeHTML(categoryLabels[doc.category] || "Material")}</span><div>${action}</div></div>
    </article>`;
    })
    .join("");
  updateCounts();
}

function updateCounts() {
  const countable = documents.filter((doc) => doc.category !== "other");
  const available = countable.filter(
    (doc) => doc.available === true && doc.filePath,
  );
  document.getElementById("availableCount").textContent = available.length;
  document.getElementById("unavailableCount").textContent =
    countable.length - available.length;
}
function updateFilterButtons() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    const active = button.dataset.filter === activeCategory;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}
function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function setupControls() {
  document.getElementById("filterList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeCategory = button.dataset.filter;
    updateFilterButtons();
    renderDocuments();
  });
  document
    .getElementById("documentSearch")
    .addEventListener("input", (event) => {
      searchTerm = event.target.value.trim();
      renderDocuments();
    });
  document
    .getElementById("memberFilter")
    .addEventListener("change", (event) => {
      activeMember = event.target.value;
      renderDocuments();
    });
  document.getElementById("clearFilters").addEventListener("click", () => {
    activeCategory = "all";
    activeMember = "all";
    searchTerm = "";
    document.getElementById("documentSearch").value = "";
    document.getElementById("memberFilter").value = "all";
    updateFilterButtons();
    renderDocuments();
  });
  document.querySelectorAll("[data-footer-filter]").forEach((link) =>
    link.addEventListener("click", () => {
      activeCategory = link.dataset.footerFilter;
      updateFilterButtons();
      renderDocuments();
    }),
  );
}

function setupNavigation() {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });
  links.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
    }),
  );

  const navAnchors = [...links.querySelectorAll('a[href^="#"]')].filter((a) =>
    document.querySelector(a.getAttribute("href")),
  );
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navAnchors.forEach((anchor) => {
            if (anchor.getAttribute("href") === `#${entry.target.id}`)
              anchor.setAttribute("aria-current", "location");
            else anchor.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
  }
  const backToTop = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => backToTop.classList.toggle("visible", window.scrollY > 500),
    { passive: true },
  );
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" }),
  );
}

function init() {
  renderTeam();
  renderSupervisors();
  renderTimeline();
  memberFilterOptions();
  setupControls();
  setupNavigation();
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  renderDocuments();
}
document.addEventListener("DOMContentLoaded", init);
