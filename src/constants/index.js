const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const certifications = [
  {
    id: 1,
    date: "Oct 31, 2025",
    title:
      "Associate Cloud Engineer Certification",
    image: "/images/GCP-ACE.png",
    link: "https://www.credly.com/badges/c936930d-8cda-49a3-9684-8fdc6dd6f39d/public_url",
  },
  {
    id: 2,
    date: "Oct, 2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
    image: "/images/OCID.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=27C77E364DD8CD8D3A30DBE97385B6E07D2D8589BB066B9769793C0220B3344A",
  },
  {
    id: 3,
    date: "Oct 2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    image: "/images/OCIDS.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B408DEC5E3711AEF28738D148F87F9A06B2EF92D6CFF4E4026FC2538F9FE90B1",
  },
  {
    id: 4,
    date: "Oct 2025",
    title: "Enterprise Design Thinking Practitioner By IBM",
    image: "/images/EDTIBM.png",
    link: "https://www.credly.com/badges/e4507a02-b2b4-474d-abaf-7e43b85aa548/public_url",
  },
];

const techStack = [
  {
    category: "Development",
    items: ["React.js", "Next.js", "TypeScript", "Node.js"],
  },
  {
    category: "Security",
    items: ["Burpsuite", "Penetration Testing", "VAPT"],
  },
  {
    category: "DevOps",
    items: ["AWS", "GCP", "Oracle Cloud Infrastructure"],
  },
  {
    category: "Scripting",
    items: ["Rust", "Java", "Shell", "Python"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Prisma","SQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Kubernetes"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#2b3137",
    link: "https://github.com/lakshyarawat1",
  },
  {
    id: 2,
    text: "Credly",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.credly.com/users/lakshya-rawat",
  },
  {
    id: 3,
    text: "Leetcode",
    icon: "/icons/leetcode.png",
    bg: "#581FA2",
    link: "https://leetcode.com/u/user3877M/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077b5",
    link: "https://www.linkedin.com/in/lakshya-3906a0212",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  certifications,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Webcraft-Pro",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Webcraft-Pro.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-0",
          description: [
            "Webcraft-pro is a workflow management application that showcases the ability to create complex applications",
            "Workflow management application with built-in no-code website builder. Build your own custom components and drag & drop them to create your website. Deploy your website at the same platform with one click. Create tickets and pipelines, assign them to different people to better manage your workflow.",
          ],
        },
        {
          id: 2,
          name: "webcraft-pro.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://webcraft-pro.vercel.app/",
          position: "top-10 left-40",
        },
        {
          id: 4,
          name: "webcraft-pro.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 left-80",
          imageUrl: "/images/webcraft-pro.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "CyberFortress Solutions",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-5",
      windowPosition: "top-[20vh] left-0",
      children: [
        {
          id: 1,
          name: "CyberFortress Solutions.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-0",
          description: [
            "Welcome to the Cyber Fortress IT and Security Solutions website repository. This project is built using Next.js and aims to provide top-notch web development and security testing services.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "cyber-fortress-solutions.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cyber-fortress-solutions.vercel.app/",
          position: "top-10 left-40",
        },
        {
          id: 4,
          name: "cyberfortress-solutions.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-50 left-0",
          imageUrl: "/images/cyberfortress-solutions.png",
        },
        {
          id: 5,
          name: "Source Code",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/lakshyarawat1/Cyber-Fortress-Solutions",
          position: "top-10 left-80",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Guardshield",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Guardshield.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-0",
          description: [
            "# GuardShield **GuardShield** is a cutting-edge Intrusion Detection and Prevention System (IDPS) designed to protect your network from malicious threats. Leveraging advanced algorithms and real-time monitoring.",
          ],
        },
        {
          id: 2,
          name: "Github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/lakshyarawat1/Guard-Shield",
          position: "top-10 left-40",
        },
      ],
    },
  ],
};


const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };