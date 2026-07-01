/**
 * CV CONTENT
 * ----------
 * Edit this file when adding an education entry, project, publication, link,
 * skill, award, or news item. app.js converts this data into HTML.
 *
 * Common link format:
 * links: [
 *   { label: "Paper", url: "https://..." },
 *   { label: "Video", url: "https://..." },
 *   { label: "Code",  url: "https://..." }
 * ]
 */
window.cvData = {
  announcement: {
    label: "NEW",
    text: "2026 publications on adaptive admittance control, robot teaching, bin-picking, and F/T sensing.",
    tab: "publications"
  },

  highlights: {
    kicker: "START HERE",
    title: "Research at a glance",
    intro: "I build robots that maintain stable contact even when the environment is uncertain.",

    // Add a YouTube or other video URL here when it is ready.
    featuredVideo: {
      label: "FEATURED RESEARCH VIDEO",
      title: "Adaptive Robot Force Control",
      description: "RL-based adaptation for physical interaction",
      url: "https://www.youtube.com/watch?v=AzlCFdNGAcQ",
      buttonLabel: "Watch video"
    },

    focusCards: [
      {
        label: "CURRENT FOCUS",
        title: "G-Force",
        description: "Environment-encoder-driven RL and variable admittance control.",
        links: [{ label: "Explore", tab: "research" }]
      },
      {
        label: "RESEARCH VISIT",
        title: "NIST · USA",
        description: "Visiting Researcher, Jun.–Oct. 2025.",
        links: []
      }
    ],

    // Copy one object below to add a new notification.
    news: [
      { date: "2026", title: "Excellent Paper Award" },
      { date: "2026", title: "Adaptive admittance-control paper published in Electronics" },
      { date: "2025", title: "Visiting force-control researcher at NIST" }
    ]
  },

  education: {
    kicker: "ACADEMIC BACKGROUND",
    title: "Education",
    items: [
      {
        period: "2021–2027 (Expected)",
        title: "Ph.D. in Mechanical Engineering",
        organization: "Sungkyunkwan University",
        description: "Robot force control, reinforcement learning, and variable admittance.",
        links: [{ label: "Lab", url: "https://mecha.skku.ac.kr/roboticsinnovatory/" }]
      },
      {
        period: "2019–2020",
        title: "M.S. in Mechanical Engineering",
        organization: "Gwangju Institute of Science and Technology",
        description: "Thesis: Tool-path generation for compliant lapping wheels.",
        links: []
      },
      {
        period: "Graduated 2019",
        title: "B.S. in Mechanical Engineering",
        organization: "Chungnam National University",
        description: "",
        links: []
      }
    ]
  },

  experience: {
    kicker: "RESEARCH JOURNEY",
    title: "Experience",
    items: [
      {
        period: "Dec. 2020–Present",
        title: "Graduate Research Assistant",
        organization: "Robotics Innovatory · Sungkyunkwan University",
        description: "RL force control, fuzzy adaptive admittance, vibration filtering, and sensor calibration.",
        links: []
      },
      {
        period: "Jun.–Oct. 2025",
        title: "Visiting Researcher",
        organization: "Manipulation and Mobility Systems Group · NIST",
        description: "Force-control adaptation and evaluation standards across environment stiffness.",
        links: [{ label: "NIST", url: "https://www.nist.gov/" }]
      },
      {
        period: "Mar. 2019–Oct. 2020",
        title: "Graduate Research Assistant",
        organization: "Gwangju Institute of Science and Technology",
        description: "Compliant tool paths and five-axis robotic lapping.",
        links: []
      }
    ]
  },

  research: {
    kicker: "SELECTED PROJECTS",
    title: "Research",
    intro: "Force-control theory translated into real-time physical robot systems.",

    // Copy one project object to add a project. tags and links are optional.
    items: [
      {
        title: "G-Force",
        description: "Environment-encoder-driven RL variable admittance control.",
        tags: ["Reinforcement Learning", "Variable Admittance", "UR10e"],
        links: []
      },
      {
        title: "Fuzzy Adaptive Force Control",
        description: "Dynamical-system force control for uncertain contact.",
        tags: ["Fuzzy Control", "Energy Tank", "ROS"],
        links: []
      },
      {
        title: "Vibration Suppression",
        description: "Multi-channel filtering with online frequency analysis.",
        tags: ["FFT", "Filtering", "Indy7"],
        links: []
      },
      {
        title: "F/T Sensor Calibration",
        description: "Robotized calibration using direct control and neural networks.",
        tags: ["ANN", "F/T Sensor", "Xenomai"],
        links: []
      },
      {
        title: "Robotic Lapping",
        description: "Compliant tool paths for automated finishing.",
        tags: ["Tool Path", "Compliance", "Machining"],
        links: []
      }
    ]
  },

  publications: {
    kicker: "RESEARCH OUTPUT",
    title: "Publications",
    intro: "Journal articles listed in my CV. See Google Scholar for the complete citation record.",
    introLinks: [
      { label: "Google Scholar", url: "https://scholar.google.co.kr/citations?user=zD0o-50AAAAJ&hl=ko" }
    ],

    /**
     * Folder rule: journal_year_first-author
     * Add your preview image to the matching folder, then fill the image field.
     * Example: assets/publications/electronics_2026_sim/images/paper-preview.png
     */
    items: [
      {
        period: "Electronics · 2026",
        title: "Dynamical System-Based Fuzzy Adaptive Admittance Control for Uncertain Environments",
        authors: "**Sim, J.**, Kim, Y., Kim, E. C., Song, E., Lee, S., Sim, J., & Choi, H. R.",
        image: "assets/publications/electronics_2026_sim/images/paper-preview.png",
        links: [{ label: "Paper", url: "https://www.mdpi.com/2079-9292/15/10/2045" }]
      },
      {
        period: "IEEE RA-L · 2026",
        title: "Hand-Gesture Based Robot Tracking and Teaching Framework: Demonstration in Surface Polishing Task",
        authors: "Kim, E. C., **Sim, J.**, Song, E., Lee, S. Y., Sim, J. Y., & Choi, H. R.",
        image: "assets/publications/ieee-ral_2026_kim/images/paper-preview.png",
        links: [{ label: "Paper", url: "https://doi.org/10.1109/LRA.2026.3666366" }]
      },
      {
        period: "IEEE RA-P · 2026",
        title: "Toward Reliable Bin-Picking: Collision-Aware Robotic Design and Control Strategy for Heavily Cluttered Environment",
        authors: "Um, S., Son, Y. G., **Shim, J.**, & Choi, H. R.",
        image: "assets/publications/ieee-rap_2026_um/images/paper-preview.png",
        links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/document/11358698" }]
      },
      {
        period: "Sensors · 2026",
        title: "A Redundant-Sensing-Based Six-Axis Force/Torque Sensor Enabling Compactness and High Sensitivity",
        authors: "Lee, S. Y., Sim, J. Y., Seok, D. Y., Kim, Y. B., **Shim, J.**, Kim, U., & Choi, H. R.",
        image: "assets/publications/sensors_2026_lee/images/paper-preview.png",
        links: [{ label: "Paper", url: "https://www.mdpi.com/1424-8220/26/3/871" }]
      },
      {
        period: "IEEE RA-L · 2025",
        title: "Safety-Critical Reactive Motion Using Constrained Variable Admittance Control With Dual-Type Proximity Sensors",
        authors: "Moon, S. J., Yim, H., Kang, H., **Shim, J. Y.**, Jung, D., & Choi, H. R.",
        image: "assets/publications/ieee-ral_2025_moon/images/paper-preview.png",
        links: [{ label: "Paper", url: "https://ieeexplore.ieee.org/document/11081889" }]
      },
      {
        period: "Sensors · 2025",
        title: "Design Analysis and Isotropic Optimization for Miniature Capacitive Force/Torque Sensor",
        authors: "Lee, S. Y., Sim, J. Y., Kim, Y. B., Seok, D., **Shim, J.**, & Choi, H. R.",
        image: "assets/publications/sensors_2025_lee/images/paper-preview.png",
        links: [{ label: "Paper", url: "https://www.mdpi.com/1424-8220/25/3/940" }]
      },
      {
        period: "IJPEM-GT · 2021",
        title: "Gantry Type Lapping Manipulator Toward Unmanned Lapping Process for a Large Work Surface",
        authors: "Park, S., Koh, D., **Shim, J.**, Kim, J. J., & Lee, S. K.",
        image: "assets/publications/ijpem-gt_2021_park/images/paper-preview.png",
        links: [{ label: "Paper", url: "https://link.springer.com/article/10.1007/s40684-020-00274-8" },{ label: "Video", url: "https://www.youtube.com/watch?v=Wt-D9-4ZkpU" }]
      },
      {
        period: "JMST · 2019",
        title: "Friction Compensation Control of a Feed Drive System Operated in a Vacuum",
        authors: "Song, W., **Shim, J.**, Kim, N., Chae, G. B., & Lee, W.",
        image: "assets/publications/jmst_2019_song/images/paper-preview.jpg",
        links: [{ label: "Paper", url: "https://link.springer.com/article/10.1007/s12206-019-1028-0" }]
      },
      {
        period: "KSME-A · 2019",
        title: "Design of a Robot Machining System and Tool Path Generation for Post-Process Machining of 3D Printed Product",
        authors: "**Shim, J.**, Kim, N., Oh, D., Hong, S., & Lee, W.",
        image: "assets/publications/ksme-a_2019_shim/images/paper-preview.png",
        links: [{ label: "Paper", url: "https://doi.org/10.3795/KSME-A.2019.43.5.359" },{ label: "Video", url: "https://youtu.be/ZR9_Fk1AiQU" }]
      }
    ]
  },

  skills: {
    kicker: "TECHNICAL TOOLKIT",
    title: "Skills",
    items: [
      { title: "Programming", tags: ["C++", "Python", "MATLAB", "ROS 2"] },
      { title: "Control", tags: ["Admittance", "Impedance", "Passivity", "Fuzzy", "MPC"] },
      { title: "Learning", tags: ["Reinforcement Learning", "Imitation Learning", "ANN"] },
      { title: "Simulation", tags: ["Simulink", "Gazebo", "Isaac Sim"] },
      { title: "Hardware", tags: ["F/T Sensor", "IMU", "UR10/e", "Indy7"] }
    ]
  },

  awards: {
    kicker: "RECOGNITION",
    title: "Awards & Honors",
    items: [
      { period: "2026", title: "Excellent Paper Award", organization: "Society for Standards, Certification and Safety", links: [] },
      { period: "2020", title: "Best Paper Award", organization: "Korean Society for Precision Engineering", links: [] },
      { period: "2018", title: "Excellent Paper Award", organization: "Korean Society of Manufacturing Technology Engineering", links: [] },
      { period: "2018", title: "Excellent Award", organization: "Industry-Linked X-Corps Contest", links: [] },
      { period: "2018", title: "Excellent Prize", organization: "CNU Engineering Fair Capstone Design", links: [] }
    ]
  }
};
