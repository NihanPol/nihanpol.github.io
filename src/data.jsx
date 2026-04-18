// Real content for Nihan Pol's site.
// Publications split into:
//   (1) PUBS_LED  — Pol led the work or made a significant contribution
//   (2) PUBS_COLL — other papers with smaller contributions / collaboration papers
// Data from user-supplied BibTeX (ADS export).

window.SITE = {
  name: { first: 'Nihan', last: 'Pol' },
  role: 'Assistant Professor of Astrophysics',
  institution: 'Texas Tech University',
  office: 'Room 017, Science Building',
  city: 'Lubbock, TX 79409',
  email: 'npol@ttu.edu',
  phone: null,
  affiliations: [
    { k: 'Department', v: 'Physics & Astronomy' },
    { k: 'Collaborations', v: 'NANOGrav · IPTA' },
    { k: 'PhD', v: 'West Virginia University, 2020' },
  ],
  socials: [
    { label: 'Google Scholar', cls: 'ai ai-google-scholar', href: 'https://scholar.google.com/citations?user=VbE2_SsAAAAJ&hl=en' },
    { label: 'ORCID', cls: 'ai ai-orcid', href: 'https://orcid.org/0000-0002-8826-1285' },
    { label: 'ADS', cls: 'ai ai-ads', href: 'https://ui.adsabs.harvard.edu/public-libraries/hy1ifnLSS0Sg1m6J9s2QHw' },
    { label: 'ADS (collaboration)', cls: 'ai ai-ads', href: 'https://ui.adsabs.harvard.edu/public-libraries/bB_J7IscSLC3S-at-PqIJw' },
    { label: 'Email', cls: 'fa-solid fa-envelope', href: 'mailto:npol@ttu.edu' },
  ],
};

window.NEWS = [
  { date: 'Jan 23, 2026', html: 'Postdoctoral scholar in the group gives an overview of his <a href="https://arxiv.org/pdf/2511.01919" target="_blank" rel="noopener noreferrer">paper</a> in <a href="https://www.youtube.com/watch?v=iUEsIXLvs04" target="_blank" rel="noopener noreferrer">this video</a>.' },
  { date: 'Nov 2025', html: 'Group members all give <a href="https://nanograv.org/sites/default/files/2025-11/NANOGrav_2025FallMeeting_Schedule_v3.pdf" target="_blank" rel="noopener noreferrer">talk and poster presentations</a> at the <a href="https://nanograv.org/event/fall-2025-meeting" target="_blank" rel="noopener noreferrer">NANOGrav Fall 2025 meeting</a>.' },
  { date: 'Sep 1, 2024', html: 'Started a position as Assistant Professor at Texas Tech University in Lubbock, TX.' },
  { date: 'Dec 31, 2023', html: '<em>Our NANOGrav 15 yr results highlighted as among the top scientific breakthroughs of the year by many outlets:</em> <a href="https://youtu.be/cbtco7raxu4?feature=shared&t=263" target="_blank" rel="noopener noreferrer">NSF</a>, <a href="https://physics.aps.org/articles/v16/213" target="_blank" rel="noopener noreferrer">APS</a>, <a href="https://www.science.org/content/article/breakthrough-of-the-year-2023" target="_blank" rel="noopener noreferrer">Science</a>, <a href="https://www.nationalgeographic.com/premium/article/11-astonishing-scientific-discoveries-2023" target="_blank" rel="noopener noreferrer">National Geographic</a>, <a href="https://www.quantamagazine.org/the-biggest-discoveries-in-physics-in-2023-20231221/" target="_blank" rel="noopener noreferrer">Quanta Magazine</a> (and its <a href="https://www.youtube.com/watch?v=580V0wRl1Lo&t=2s&ab_channel=QuantaMagazine" target="_blank" rel="noopener noreferrer">companion video</a>), <a href="https://www.bloomberg.com/opinion/articles/2023-12-30/the-10-most-intriguing-science-breakthroughs-of-2023" target="_blank" rel="noopener noreferrer">Bloomberg</a>, <a href="https://www.sciencefocus.com/news/this-year-in-science-2023" target="_blank" rel="noopener noreferrer">BBC Science Focus</a>, and <a href="https://youtu.be/tJ3ZJjqu3NQ?si=g4AlzR4PMbRUaV7X" target="_blank" rel="noopener noreferrer">Dr. Becky (at #1)</a>.' },
  { date: 'Oct 15, 2023', html: 'Started a NANOGrav postdoctoral fellowship at Oregon State University.' },
  { date: 'Sep 1, 2023', html: 'Started a position as visiting scientist at University of Wisconsin, Milwaukee.' },
  { date: 'Aug 4, 2023', html: '<em><a href="https://www.scientificamerican.com/article/a-background-hum-pervades-the-universe-scientists-are-racing-to-find-its-source/" target="_blank" rel="noopener noreferrer">Interview with Scientific American</a></em> talking about the latest NANOGrav results and the search for anisotropy is now published.' },
];

// Helper: builds arXiv and ADS links consistently.
const arxiv = (id) => `https://arxiv.org/abs/${id}`;
const ads   = (bibcode) => `https://ui.adsabs.harvard.edu/abs/${bibcode}`;
const doi   = (d) => `https://doi.org/${d}`;

// ─── (1) Papers led by Pol or with significant contribution ─────────────────
// Ordered newest-first. `authors` uses short form; full list collapsed for NANOGrav.
window.PUBS_LED = [
    {
      year: 2025,
      items: [
        {
          venue: "arXiv",
          title: "Expectations for the first supermassive black-hole binary resolved by PTAs I: Model efficacy",
          authors: ["L. Schult", "P. Petrov", "S. R. Taylor", "N. Pol", "N. Laal", "M. Charisi", "C. Ma"],
          venueName: "arXiv e-prints",
          arxiv: "2510.01317", ads: "2025arXiv251001317S",
        },
        {
          venue: "arXiv",
          title: "Expectations for the first supermassive black-hole binary resolved by PTAs II: Milestones for binary characterization",
          authors: ["P. Petrov", "L. Schult", "S. R. Taylor", "N. Pol", "N. Laal", "M. Charisi", "C. Ma"],
          venueName: "arXiv e-prints",
          arxiv: "2510.01316", ads: "2025arXiv251001316P",
        },
        {
          venue: "arXiv",
          title: "Mapping the Gravitational-wave Background Across the Spectrum with a Next-Generation Anisotropic Per-frequency Optimal Statistic",
          authors: ["K. A. Gersbach", "S. R. Taylor", "B. Bécsy", "A. Lemke", "A. Mitridate", "N. Pol"],
          venueName: "arXiv e-prints",
          arxiv: "2509.07090", ads: "2025arXiv250907090G",
        },
      ],
    },
    {
      year: 2024,
      items: [
        {
          venue: "PASA",
          title: "First detection of X-ray pulsations and spectrum of the high Galactic latitude pulsar PSR J0837─2454 and direct Urca cooling implications",
          authors: ["W. C. G. Ho", "N. Pol", "A. T. Deller", "W. Becker", "S. Burke-Spolaor"],
          venueName: "Publications of the Astronomical Society of Australia, 41, e066",
          arxiv: "2405.14952", doi: "10.1017/pasa.2024.64", ads: "2024PASA...41...66H",
        },
        {
          venue: "ApJ",
          title: "Comparing Recent Pulsar Timing Array Results on the Nanohertz Stochastic Gravitational-wave Background",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 966, 105",
          arxiv: "2309.00693", doi: "10.3847/1538-4357/ad36be", ads: "2024ApJ...966..105A",
        },
      ],
    },
    {
      year: 2023,
      items: [
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Data Set: Search for Anisotropy in the Gravitational-wave Background",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 956, L3",
          arxiv: "2306.16221", doi: "10.3847/2041-8213/acf4fd", ads: "2023ApJ...956L...3A",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Data Set: Evidence for a Gravitational-wave Background",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 951, L8",
          arxiv: "2306.16213", doi: "10.3847/2041-8213/acdac6", ads: "2023ApJ...951L...8A",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Data Set: Observations and Timing of 68 Millisecond Pulsars",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 951, L9",
          arxiv: "2306.16217", doi: "10.3847/2041-8213/acda9a", ads: "2023ApJ...951L...9A",
        },
        {
          venue: "Article",
          title: "Extending the reach of pulsar timing arrays to micro-hertz GW frequencies",
          authors: ["N. Pol", "S. Taylor", "D. Blas", "A. Jenkins", "A. Parthasarthy", "M. Kramer"],
          venueName: "2023, P01.043",
          ads: "2023APS..APRP01043P",
        },
      ],
    },
    {
      year: 2022,
      items: [
        {
          venue: "ApJ",
          title: "Forecasting Pulsar Timing Array Sensitivity to Anisotropy in the Stochastic Gravitational Wave Background",
          authors: ["N. Pol", "S. R. Taylor", "J. D. Romano"],
          venueName: "The Astrophysical Journal, 940, 173",
          arxiv: "2206.09936", doi: "10.3847/1538-4357/ac9836", ads: "2022ApJ...940..173P",
        },
        {
          venue: "ApJ",
          title: "Disentangling Multiple Stochastic Gravitational Wave Background Sources in PTA Data Sets",
          authors: ["A. R. Kaiser", "N. S. Pol", "M. A. McLaughlin", "S. Chen", "J. S. Hazboun", "L. Z. Kelley", "J. Simon", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 938, 115",
          arxiv: "2208.02307", doi: "10.3847/1538-4357/ac86cc", ads: "2022ApJ...938..115K",
        },
        {
          venue: "PRD",
          title: "A parallelized Bayesian approach to accelerated gravitational-wave background characterization",
          authors: ["S. R. Taylor", "J. Simon", "L. Schult", "N. Pol", "W. G. Lamb"],
          venueName: "Physical Review D, 105, 084049",
          arxiv: "2202.08293", doi: "10.1103/PhysRevD.105.084049", ads: "2022PhRvD.105h4049T",
        },
        {
          venue: "MNRAS",
          title: "The International Pulsar Timing Array second data release: Search for an isotropic gravitational wave background",
          authors: ["J. Antoniadis", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "Monthly Notices of the Royal Astronomical Society, 510, 4873-4887",
          arxiv: "2201.03980", doi: "10.1093/mnras/stab3418", ads: "2022MNRAS.510.4873A",
        },
      ],
    },
    {
      year: 2021,
      items: [
        {
          venue: "Physical Rev",
          title: "Strong-Field Gravity Tests with the Double Pulsar",
          authors: ["M. Kramer", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "Physical Review X, 11, 041050",
          arxiv: "2112.06795", doi: "10.1103/PhysRevX.11.041050", ads: "2021PhRvX..11d1050K",
        },
        {
          venue: "arXiv",
          title: "Insights into the Milky Way pulsar--black hole population using radio and gravitational wave observations",
          authors: ["N. Pol", "M. McLaughlin", "D. Lorimer"],
          venueName: "arXiv e-prints",
          arxiv: "2109.04512", ads: "2021arXiv210904512P",
        },
        {
          venue: "ApJ",
          title: "On the Detectability of Ultracompact Binary Pulsar Systems",
          authors: ["N. Pol", "M. McLaughlin", "D. R. Lorimer", "N. Garver-Daniels"],
          venueName: "The Astrophysical Journal, 912, 22",
          arxiv: "2010.04151", doi: "10.3847/1538-4357/abe9b7", ads: "2021ApJ...912...22P",
        },
        {
          venue: "ApJ",
          title: "The Location of Young Pulsar PSR J0837-2454: Galactic Halo or Local Supernova Remnant?",
          authors: ["N. Pol", "S. Burke-Spolaor", "N. Hurley-Walker", "H. Blumer", "S. Johnston", "M. Keith", "E. F. Keane", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "The Astrophysical Journal, 911, 121",
          arxiv: "2104.11680", doi: "10.3847/1538-4357/abe70d", ads: "2021ApJ...911..121P",
        },
        {
          venue: "ApJL",
          title: "Astrophysics Milestones for Pulsar Timing Array Gravitational-wave Detection",
          authors: ["N. S. Pol", "S. R. Taylor", "L. Z. Kelley", "S. J. Vigeland", "J. Simon", "S. Chen", "Z. Arzoumanian", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 911, L34",
          arxiv: "2010.11950", doi: "10.3847/2041-8213/abf2c9", ads: "2021ApJ...911L..34P",
        },
        {
          venue: "ApJS",
          title: "The NANOGrav 12.5 yr Data Set: Observations and Narrowband Timing of 47 Millisecond Pulsars",
          authors: ["M. F. Alam", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Supplement Series, 252, 4",
          arxiv: "2005.06490", doi: "10.3847/1538-4365/abc6a0", ads: "2021ApJS..252....4A",
        },
      ],
    },
    {
      year: 2020,
      items: [
        {
          venue: "ApJL",
          title: "The NANOGrav 12.5 yr Data Set: Search for an Isotropic Stochastic Gravitational-wave Background",
          authors: ["Z. Arzoumanian", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 905, L34",
          arxiv: "2009.04496", doi: "10.3847/2041-8213/abd401", ads: "2020ApJ...905L..34A",
        },
        {
          venue: "arXiv",
          title: "Modeling the Galactic Compact Binary Neutron Star Population and Studying the Double Pulsar System",
          authors: ["N. Pol"],
          venueName: "arXiv e-prints",
          arxiv: "2008.03842", ads: "2020arXiv200803842P",
        },
        {
          venue: "Nature",
          title: "Asymmetric mass ratios for bright double neutron-star mergers",
          authors: ["R. D. Ferdman", "P. C. C. Freire", "B. B. P. Perera", "N. Pol", "F. Camilo", "S. Chatterjee", "J. M. Cordes", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "Nature, 583, 211-214",
          arxiv: "2007.04175", doi: "10.1038/s41586-020-2439-x", ads: "2020Natur.583..211F",
        },
        {
          venue: "RNAAS",
          title: "An Updated Galactic Double Neutron Star Merger Rate Based on Radio Pulsar Populations",
          authors: ["N. Pol", "M. McLaughlin", "D. R. Lorimer"],
          venueName: "American Astronomical Society Meeting Abstracts",
          arxiv: "2002.10225", doi: "10.3847/2515-5172/ab7307", ads: "2020RNAAS...4...22P",
        },
        {
          venue: "PhD",
          title: "Modeling the galactic compact binary neutron star population and studying the double pulsar system",
          authors: ["N. Pol"],
          venueName: "Ph.D. thesis, West Virginia University",
          ads: "2020PhDT........32P",
        },
      ],
    },
    {
      year: 2019,
      items: [
        {
          venue: "ApJ",
          title: "Estimates of Fast Radio Burst Dispersion Measures from Cosmological Simulations",
          authors: ["N. Pol", "M. T. Lam", "M. A. McLaughlin", "T. J. W. Lazio", "J. M. Cordes"],
          venueName: "The Astrophysical Journal, 886, 135",
          arxiv: "1903.07630", doi: "10.3847/1538-4357/ab4c2f", ads: "2019ApJ...886..135P",
        },
        {
          venue: "\\baas",
          title: "Radio Pulsar Populations",
          authors: ["D. Lorimer", "N. Pol", "K. Rajwade", "K. Aggarwal", "D. Agarwal", "J. Strader", "N. Lewandowska", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "\\baas, 51, 261",
          arxiv: "1903.06526", ads: "2019BAAS...51c.261L",
        },
        {
          venue: "ApJ",
          title: "Erratum: \"Future Prospects for Ground-based Gravitational-wave Detectors: The Galactic Double Neutron Star Merger Rate Revisited\" (<A href=``http://doi.org/10.3847/1538-4357/aaf006''>2019, ApJ, 870, 71</A>)",
          authors: ["N. Pol", "M. McLaughlin", "D. R. Lorimer"],
          venueName: "The Astrophysical Journal, 874, 186",
          doi: "10.3847/1538-4357/ab0c22", ads: "2019ApJ...874..186P",
        },
        {
          venue: "ApJL",
          title: "Constraints on the H I Mass for NGC 1052-DF2",
          authors: ["A. Sardone", "D. J. Pisano", "S. Burke-Spolaor", "J. L. Mascoop", "N. Pol"],
          venueName: "The Astrophysical Journal Letters, 871, L31",
          arxiv: "1901.07586", doi: "10.3847/2041-8213/ab0084", ads: "2019ApJ...871L..31S",
        },
        {
          venue: "ApJ",
          title: "Future Prospects for Ground-based Gravitational-wave Detectors: The Galactic Double Neutron Star Merger Rate Revisited",
          authors: ["N. Pol", "M. McLaughlin", "D. R. Lorimer"],
          venueName: "The Astrophysical Journal, 870, 71",
          arxiv: "1811.04086", doi: "10.3847/1538-4357/aaf006", ads: "2019ApJ...870...71P",
        },
      ],
    },
    {
      year: 2018,
      items: [
        {
          venue: "arXiv",
          title: "Binary neutron star formation and the origin of GW170817",
          authors: ["K. Belczynski", "T. Bulik", "A. Olejak", "M. Chruslinska", "N. Singh", "N. Pol", "L. Zdunik", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "arXiv e-prints",
          arxiv: "1812.10065", ads: "2018arXiv181210065B",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 11 Year Data Set: Pulsar-timing Constraints on the Stochastic Gravitational-wave Background",
          authors: ["Z. Arzoumanian", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 859, 47",
          arxiv: "1801.02617", doi: "10.3847/1538-4357/aabd3b", ads: "2018ApJ...859...47A",
        },
        {
          venue: "ApJL",
          title: "PALFA Discovery of a Highly Relativistic Double Neutron Star Binary",
          authors: ["K. Stovall", "P. C. C. Freire", "S. Chatterjee", "P. B. Demorest", "D. R. Lorimer", "M. A. McLaughlin", "N. Pol", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "The Astrophysical Journal Letters, 854, L22",
          arxiv: "1802.01707", doi: "10.3847/2041-8213/aaad06", ads: "2018ApJ...854L..22S",
        },
        {
          venue: "ApJ",
          title: "A Direct Measurement of Sense of Rotation of PSR J0737-3039A",
          authors: ["N. Pol", "M. McLaughlin", "M. Kramer", "I. Stairs", "B. B. P. Perera", "A. Possenti"],
          venueName: "The Astrophysical Journal, 853, 73",
          arxiv: "1712.04360", doi: "10.3847/1538-4357/aaa1a0", ads: "2018ApJ...853...73P",
        },
      ],
    },
    {
      year: 2017,
      items: [
        {
          venue: "MNRAS",
          title: "Seyfert 1 composite spectrum using SDSS Legacy survey data",
          authors: ["N. Pol", "Y. Wadadekar"],
          venueName: "Monthly Notices of the Royal Astronomical Society, 465, 95-104",
          arxiv: "1610.07523", doi: "10.1093/mnras/stw2763", ads: "2017MNRAS.465...95P",
        },
      ],
    },
  ];

// ─── (2) Collaboration papers / smaller contributions ─────────────────
window.PUBS_COLL = [
    {
      year: 2026,
      items: [
        {
          venue: "ApJ",
          title: "The NANOGrav 15 yr Dataset: Improved Timing Precision with Very Long Baseline Interferometry Astrometric Priors",
          authors: ["S. V. Sosa Fiscella", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 999, 156",
          arxiv: "2509.21203", doi: "10.3847/1538-4357/ae39c9", ads: "2026ApJ...999..156S",
        },
        {
          venue: "ApJ",
          title: "Searching for Exotrojans in Pulsar Systems",
          authors: ["J. D. Taylor", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 1000, 82",
          arxiv: "2510.16164", doi: "10.3847/1538-4357/ae4317", ads: "2026ApJ..1000...82T",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Dataset: Targeted Searches for Supermassive Black Hole Binaries",
          authors: ["N. Agarwal", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 998, L11",
          arxiv: "2508.16534", doi: "10.3847/2041-8213/ae3719", ads: "2026ApJ...998L..11A",
        },
        {
          venue: "NatAs",
          title: "Inference on inner galaxy structure via gravitational waves from supermassive binaries",
          authors: ["Y. Chen", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "Nature Astronomy",
          arxiv: "2411.05906", doi: "10.1038/s41550-026-02782-0", ads: "2026NatAs.tmp...38C",
        },
        {
          venue: "ApJ",
          title: "Inferring M$_BH$─M$_bulge$ Evolution from the Gravitational-wave Background",
          authors: ["C. Matt", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 997, 188",
          arxiv: "2508.18126", doi: "10.3847/1538-4357/ae2480", ads: "2026ApJ...997..188M",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 15 yr Dataset: Search for Gravitational Scattering of Pulsars by Free-floating Objects in Interstellar Space",
          authors: ["L. Dey", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 997, 116",
          arxiv: "2507.19475", doi: "10.3847/1538-4357/ae279d", ads: "2026ApJ...997..116D",
        },
        {
          venue: "arXiv",
          title: "The NANOGrav 15 yr Data Set: Piecewise Power-Law Reconstruction of the Gravitational-Wave Background",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "arXiv e-prints",
          arxiv: "2601.09481", ads: "2026arXiv260109481A",
        },
      ],
    },
    {
      year: 2025,
      items: [
        {
          venue: "arXiv",
          title: "The NANOGrav 12.5-year Data Set: Chromatic Noise Characterization \\& Mitigation with Time-Domain Kernels",
          authors: ["J. S. Hazboun", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "arXiv e-prints",
          arxiv: "2511.22597", ads: "2025arXiv251122597H",
        },
        {
          venue: "arXiv",
          title: "CHIME-o-Grav: Wideband Timing of Four Millisecond Pulsars from the NANOGrav 15-yr dataset",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "arXiv e-prints",
          arxiv: "2510.16668", ads: "2025arXiv251016668A",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 15 yr Data Set: Search for Gravitational-wave Memory",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 987, 5",
          doi: "10.3847/1538-4357/add874", ads: "2025ApJ...987....5A",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 12.5 yr Data Set: Probing Interstellar Turbulence and Precision Pulsar Timing with PSR J1903+0327",
          authors: ["A. Geiger", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 986, 191",
          arxiv: "2411.08191", doi: "10.3847/1538-4357/add0b6", ads: "2025ApJ...986..191G",
        },
        {
          venue: "arXiv",
          title: "The NANOGrav 15-Year Data Set: A Case Study for Simplified Dispersion Measure Modeling for PSR J1455-3330 and the Impact on Gravitational Wave Sensitivity",
          authors: ["M. T. Lam", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "arXiv e-prints",
          arxiv: "2506.03597", ads: "2025arXiv250603597L",
        },
        {
          venue: "ApJ",
          title: "Pulse Profile Variability of PSR J1022+1001 in NANOGrav Data",
          authors: ["W. Fiore", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 984, 139",
          arxiv: "2412.05452", doi: "10.3847/1538-4357/adc255", ads: "2025ApJ...984..139F",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 15 yr Data Set: Harmonic Analysis of the Pulsar Angular Correlations",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 985, 99",
          arxiv: "2411.13472", doi: "10.3847/1538-4357/adc997", ads: "2025ApJ...985...99A",
        },
        {
          venue: "ApJ",
          title: "The Anomalous Acceleration of PSR J2043+1711: Long-period Orbital Companion or Stellar Flyby?",
          authors: ["T. Donlon", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 983, 62",
          arxiv: "2407.06482", doi: "10.3847/1538-4357/adbf90", ads: "2025ApJ...983...62D",
        },
        {
          venue: "PRD",
          title: "The NANOGrav 15 yr dataset: Posterior predictive checks for gravitational-wave detection with pulsar timing arrays",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "Physical Review D, 111, 042011",
          arxiv: "2407.20510", doi: "10.1103/PhysRevD.111.042011", ads: "2025PhRvD.111d2011A",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Data Set: Running of the Spectral Index",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 978, L29",
          arxiv: "2408.10166", doi: "10.3847/2041-8213/ad99d3", ads: "2025ApJ...978L..29A",
        },
        {
          venue: "Article",
          title: "How to detect an individual SMBHB system in the presence of a gravitational wave background",
          authors: ["C. Witt", "N. Pol"],
          venueName: "245, 325.03",
          ads: "2025AAS...24532503W",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 15 yr Data Set: Looking for Signs of Discreteness in the Gravitational-wave Background",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 978, 31",
          arxiv: "2404.07020", doi: "10.3847/1538-4357/ad93d5", ads: "2025ApJ...978...31A",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 15 Yr Data Set: Removing Pulsars One by One from the Pulsar Timing Array",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 978, 168",
          arxiv: "2411.14846", doi: "10.3847/1538-4357/ad93aa", ads: "2025ApJ...978..168A",
        },
      ],
    },
    {
      year: 2024,
      items: [
        {
          venue: "ApJ",
          title: "Exploring Pulsar Timing Precision: A Comparative Study of Polarization Calibration Methods for NANOGrav Data from the Green Bank Telescope",
          authors: ["L. Dey", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 977, 114",
          arxiv: "2406.13463", doi: "10.3847/1538-4357/ad8c24", ads: "2024ApJ...977..114D",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 15 yr Data Set: Chromatic Gaussian Process Noise Models for Six Pulsars",
          authors: ["B. Larsen", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 972, 49",
          arxiv: "2405.14941", doi: "10.3847/1538-4357/ad5291", ads: "2024ApJ...972...49L",
        },
        {
          venue: "Article",
          title: "mattpitkin/enterprise\\_extensions: Keep float128 precision",
          authors: ["J. Hazboun", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "10.5281/zenodo.13274450",
          doi: "10.5281/zenodo.13274450", ads: "2024zndo..13274450H",
        },
        {
          venue: "ApJL",
          title: "Erratum: ``The NANOGrav 15 yr Data Set: Search for Signals from New Physics'' (2023, ApJL 951 L11)",
          authors: ["A. Afzal", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 971, L27",
          doi: "10.3847/2041-8213/ad68fc", ads: "2024ApJ...971L..27A",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 12.5-Year Data Set: Dispersion Measure Misestimations with Varying Bandwidths",
          authors: ["S. V. Sosa Fiscella", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 966, 95",
          arxiv: "2307.13248", doi: "10.3847/1538-4357/ad2858", ads: "2024ApJ...966...95S",
        },
        {
          venue: "PRD",
          title: "NANOGrav 15-year gravitational-wave background methods",
          authors: ["A. D. Johnson", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "Physical Review D, 109, 103012",
          arxiv: "2306.16223", doi: "10.1103/PhysRevD.109.103012", ads: "2024PhRvD.109j3012J",
        },
        {
          venue: "ApJ",
          title: "An Unusual Pulse Shape Change Event in PSR J1713+0747 Observed with the Green Bank Telescope and CHIME",
          authors: ["R. J. Jennings", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 964, 179",
          arxiv: "2210.12266", doi: "10.3847/1538-4357/ad2930", ads: "2024ApJ...964..179J",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 12.5 yr Data Set: Search for Gravitational Wave Memory",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 963, 61",
          arxiv: "2502.18599", doi: "10.3847/1538-4357/ad0726", ads: "2024ApJ...963...61A",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Data Set: Search for Transverse Polarization Modes in the Gravitational-wave Background",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 964, L14",
          arxiv: "2310.12138", doi: "10.3847/2041-8213/ad2a51", ads: "2024ApJ...964L..14A",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 12.5 yr Data Set: A Computationally Efficient Eccentric Binary Search Pipeline and Constraints on an Eccentric Supermassive Binary Candidate in 3C 66B",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 963, 144",
          arxiv: "2309.17438", doi: "10.3847/1538-4357/ad1f61", ads: "2024ApJ...963..144A",
        },
        {
          venue: "Article",
          title: "Beyond the Isotropic Gravitational Wave Background: Search for Other Signals in the NANOGrav 15 yr Dataset",
          authors: ["N. Pol", "Nanograv"],
          venueName: "243, 220.04",
          ads: "2024AAS...24322004P",
        },
      ],
    },
    {
      year: 2023,
      items: [
        {
          venue: "ApJ",
          title: "How to Detect an Astrophysical Nanohertz Gravitational Wave Background",
          authors: ["B. Bécsy", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 959, 9",
          arxiv: "2309.04443", doi: "10.3847/1538-4357/ad09e4", ads: "2023ApJ...959....9B",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Data Set: Constraints on Supermassive Black Hole Binaries from the Gravitational-wave Background",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 952, L37",
          arxiv: "2306.16220", doi: "10.3847/2041-8213/ace18b", ads: "2023ApJ...952L..37A",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 12.5 yr Data Set: Bayesian Limits on Gravitational Waves from Individual Supermassive Black Hole Binaries",
          authors: ["Z. Arzoumanian", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 951, L28",
          arxiv: "2301.03608", doi: "10.3847/2041-8213/acdbc7", ads: "2023ApJ...951L..28A",
        },
        {
          venue: "MGM",
          title: "News and views regarding PSR J1757-1854, a highly-relativistic binary pulsar",
          authors: ["A. D. Cameron", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "The Sixteenth Marcel Grossmann Meeting. On Recent Developments in Theoretical and Experimental General Relativity, Astrophysics, and Relativistic Field Theories, 3774-3784",
          arxiv: "2203.15995", doi: "10.1142/9789811269776_0312", ads: "2023mgm..conf.3774C",
        },
        {
          venue: "arXiv",
          title: "The NANOGrav 12.5-year Data Set: Search for Gravitational Wave Memory",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "arXiv e-prints",
          arxiv: "2307.13797", ads: "2023arXiv230713797A",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Data Set: Search for Signals from New Physics",
          authors: ["A. Afzal", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 951, L11",
          arxiv: "2306.16219", doi: "10.3847/2041-8213/acdc91", ads: "2023ApJ...951L..11A",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Data Set: Detector Characterization and Noise Budget",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 951, L10",
          arxiv: "2306.16218", doi: "10.3847/2041-8213/acda88", ads: "2023ApJ...951L..10A",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 15 yr Data Set: Bayesian Limits on Gravitational Waves from Individual Supermassive Black Hole Binaries",
          authors: ["G. Agazie", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 951, L50",
          arxiv: "2306.16222", doi: "10.3847/2041-8213/ace18a", ads: "2023ApJ...951L..50A",
        },
        {
          venue: "Article",
          title: "nanograv/pint\\_pal: Release on PyPi",
          authors: ["J. K. Swiggum", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "10.5281/zenodo.8092498",
          doi: "10.5281/zenodo.8092498", ads: "2023zndo...8092498S",
        },
        {
          venue: "MNRAS",
          title: "Searching for continuous Gravitational Waves in the second data release of the International Pulsar Timing Array",
          authors: ["M. Falxa", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "Monthly Notices of the Royal Astronomical Society, 521, 5077-5086",
          arxiv: "2303.10767", doi: "10.1093/mnras/stad812", ads: "2023MNRAS.521.5077F",
        },
      ],
    },
    {
      year: 2022,
      items: [
        {
          venue: "Article",
          title: "VizieR Online Data Catalog: Limits on SMBH binaries from NANOGrav (Arzoumanian+, 2021)",
          authors: ["Z. Arzoumanian", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "J/ApJ/914/121",
          doi: "10.26093/cds/vizier.19140121", ads: "2022yCat..19140121A",
        },
        {
          venue: "Article",
          title: "Forecasting constraints on anisotropy in the nanohertz gravitational wave background",
          authors: ["N. Pol", "S. Taylor", "J. Romano"],
          venueName: "2022, T14.006",
          ads: "2022APS..APRT14006P",
        },
        {
          venue: "Article",
          title: "A Parallelized Gravitational Wave Detection Pipeline For Pulsar Timing Arrays",
          authors: ["S. Taylor", "J. Simon", "L. Schult", "N. Pol", "W. Lamb"],
          venueName: "2022, W16.005",
          ads: "2022APS..APRW16005T",
        },
        {
          venue: "Article",
          title: "Disentangling Multiple Astrophysical Background Sources in PTA Datasets",
          authors: ["A. Kaiser", "M. McLaughlin", "N. Pol", "S. Taylor", "S. Vigeland", "L. Kelley", "J. Hazboun", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "2022, T14.007",
          ads: "2022APS..APRT14007K",
        },
      ],
    },
    {
      year: 2021,
      items: [
        {
          venue: "PRL",
          title: "Searching for Gravitational Waves from Cosmological Phase Transitions with the NANOGrav 12.5-Year Dataset",
          authors: ["Z. Arzoumanian", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "Physical Review Letters, 127, 251302",
          arxiv: "2104.13930", doi: "10.1103/PhysRevLett.127.251302", ads: "2021PhRvL.127y1302A",
        },
        {
          venue: "ApJL",
          title: "The NANOGrav 12.5-year Data Set: Search for Non-Einsteinian Polarization Modes in the Gravitational-wave Background",
          authors: ["Z. Arzoumanian", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Letters, 923, L22",
          arxiv: "2109.14706", doi: "10.3847/2041-8213/ac401c", ads: "2021ApJ...923L..22A",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 12.5 Year Data Set: Monitoring Interstellar Scattering Delays",
          authors: ["J. E. Turner", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 917, 10",
          arxiv: "2012.09884", doi: "10.3847/1538-4357/abfafe", ads: "2021ApJ...917...10T",
        },
        {
          venue: "ApJL",
          title: "Refined Mass and Geometric Measurements of the High-mass PSR J0740+6620",
          authors: ["E. Fonseca", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "The Astrophysical Journal Letters, 915, L12",
          arxiv: "2104.00880", doi: "10.3847/2041-8213/ac03b8", ads: "2021ApJ...915L..12F",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 11 yr Data Set: Limits on Supermassive Black Hole Binaries in Galaxies within 500 Mpc",
          authors: ["Z. Arzoumanian", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 914, 121",
          arxiv: "2101.02716", doi: "10.3847/1538-4357/abfcd3", ads: "2021ApJ...914..121A",
        },
        {
          venue: "Article",
          title: "Astrophysics Milestones for PTAs",
          authors: ["N. Pol", "S. Taylor", "L. Kelley", "S. Vigeland", "J. Simon", "S. Chen", "Nanograv Collaboration"],
          venueName: "2021, X09.003",
          ads: "2021APS..APRX09003P",
        },
        {
          venue: "Article",
          title: "Constraining the SMBHB population with the nanohertz GWB",
          authors: ["J. Simon", "L. Kelley", "S. Chen", "N. Pol", "S. Taylor", "S. Vigeland", "Nanograv Physics Frontiers Center Collaboration"],
          venueName: "2021, X09.004",
          ads: "2021APS..APRX09004S",
        },
        {
          venue: "ApJS",
          title: "The NANOGrav 12.5 yr Data Set: Wideband Timing of 47 Millisecond Pulsars",
          authors: ["M. F. Alam", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal Supplement Series, 252, 5",
          arxiv: "2005.06495", doi: "10.3847/1538-4365/abc6a1", ads: "2021ApJS..252....5A",
        },
      ],
    },
    {
      year: 2020,
      items: [
        {
          venue: "ApJ",
          title: "Multimessenger Gravitational-wave Searches with Pulsar Timing Arrays: Application to 3C 66B Using the NANOGrav 11-year Data Set",
          authors: ["Z. Arzoumanian", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 900, 102",
          arxiv: "2005.07123", doi: "10.3847/1538-4357/ababa1", ads: "2020ApJ...900..102A",
        },
        {
          venue: "ApJ",
          title: "Modeling the Uncertainties of Solar System Ephemerides for Robust Gravitational-wave Searches with Pulsar-timing Arrays",
          authors: ["M. Vallisneri", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 893, 112",
          arxiv: "2001.00595", doi: "10.3847/1538-4357/ab7b67", ads: "2020ApJ...893..112V",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 11 yr Data Set: Evolution of Gravitational-wave Background Statistics",
          authors: ["J. S. Hazboun", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 890, 108",
          arxiv: "1909.08644", doi: "10.3847/1538-4357/ab68db", ads: "2020ApJ...890..108H",
        },
        {
          venue: "Article",
          title: "Double Neutron Stars Formed in Globular Clusters: Simulating an Evolutionary Route",
          authors: ["E. Chwalik", "E. Rigby", "M. Bagchi", "S. Bates", "D. Lorimer", "M. McLaughlin", "N. Pol", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "235, 102.11",
          ads: "2020AAS...23510211C",
        },
        {
          venue: "Article",
          title: "Injection analysis with the NANOGrav 11-year dataset",
          authors: ["N. Pol"],
          venueName: "235, 381.01",
          ads: "2020AAS...23538101P",
        },
        {
          venue: "Article",
          title: "Double Neutron Stars Formed in Globular Clusters: Detecting the Population",
          authors: ["E. Rigby", "E. Chwalik", "M. Bagchi", "D. Lorimer", "M. McLaughlin", "N. Pol", "S. Bates", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "235, 102.12",
          ads: "2020AAS...23510212R",
        },
        {
          venue: "Article",
          title: "Improving The Gravitational Wave Limits And Detection Prospects Of The International Pulsar Timing Array",
          authors: ["S. R. Taylor", "P. Baker", "S. Chen", "J. Hazboun", "K. Islo", "C. Mingarelli", "N. Pol", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "235, 433.02",
          ads: "2020AAS...23543302T",
        },
        {
          venue: "Article",
          title: "New Limits on the Gravitational Wave Background from the International Pulsar Timing Array",
          authors: ["C. Mingarelli", "P. Baker", "S. Chen", "J. Hazboun", "K. Islo", "N. Pol", "J. Simon", "+ NANOGrav Collaboration incl. N. Pol"],
          venueName: "235, 433.04",
          ads: "2020AAS...23543304M",
        },
        {
          venue: "ApJ",
          title: "The NANOGrav 11 yr Data Set: Limits on Gravitational Wave Memory",
          authors: ["K. Aggarwal", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 889, 38",
          arxiv: "1911.08488", doi: "10.3847/1538-4357/ab6083", ads: "2020ApJ...889...38A",
        },
      ],
    },
    {
      year: 2019,
      items: [
        {
          venue: "ApJ",
          title: "The NANOGrav 11 yr Data Set: Limits on Gravitational Waves from Individual Supermassive Black Hole Binaries",
          authors: ["K. Aggarwal", "+ NANOGrav Collaboration incl. N. S. Pol"],
          venueName: "The Astrophysical Journal, 880, 116",
          arxiv: "1812.11585", doi: "10.3847/1538-4357/ab2236", ads: "2019ApJ...880..116A",
        },
        {
          venue: "Article",
          title: "NihanPol/DM\\_IGM v1.0.0",
          authors: ["N. Pol", "Nspol", "M. Lam"],
          venueName: "10.5281/zenodo.3341528",
          doi: "10.5281/zenodo.3341528", ads: "2019zndo...3341528P",
        },
        {
          venue: "Article",
          title: "Future prospects for LIGO: The DNS merger rate revisited",
          authors: ["N. Pol", "M. McLaughlin", "D. Lorimer"],
          venueName: "233, 234.01",
          ads: "2019AAS...23323401P",
        },
      ],
    },
    {
      year: 2018,
      items: [
        {
          venue: "Article",
          title: "NihanPol/SNR\\_degradation\\_factor\\_for\\_BNS\\_systems: Code to calculate orbital degradation factor from the Bagchi et al. paper",
          authors: ["N. Pol"],
          venueName: "10.5281/zenodo.1463099",
          doi: "10.5281/zenodo.1463099", ads: "2018zndo...1463099P",
        },
        {
          venue: "Article",
          title: "NihanPol/2018-DNS-merger-rate: Release of code associated with the calculation of DNS merger rate calculations",
          authors: ["N. Pol"],
          venueName: "10.5281/zenodo.1463095",
          doi: "10.5281/zenodo.1463095", ads: "2018zndo...1463095P",
        },
      ],
    },
  ];

// Helper used by Publications.jsx to inject real links.
window.pubLinks = (p) => {
  const out = [];
  if (p.arxiv) out.push({ label: 'arxiv', href: arxiv(p.arxiv) });
  if (p.doi)   out.push({ label: 'doi',   href: doi(p.doi) });
  if (p.ads)   out.push({ label: 'ads',   href: ads(p.ads) });
  return out;
};

window.COURSES = [
  { code: 'PHYS 4350 / PHYS 5300-003', title: 'General relativity', term: 'Spring 2026 · Undergraduate + Graduate', blurb: 'From the equivalence principle through Einstein\u2019s field equations to modern applications including gravitational-wave detection.', href: null },
  { code: 'ASTR 4305', title: 'Radiative processes in astrophysics', term: 'Fall 2025 · Undergraduate', blurb: 'Emission and absorption mechanisms across the electromagnetic spectrum \u2014 synchrotron, bremsstrahlung, Compton, line radiation \u2014 with applications to pulsars, AGN, and the interstellar medium.', href: null },
  { code: 'ASTR 3300 / PHYS 5300', title: 'Astrostatistics', term: 'Spring 2025 · Undergraduate + Graduate', blurb: 'Frequentist and Bayesian methods applied to real astronomical data. Problem sets in Python; materials open-sourced on GitHub.', href: 'https://github.com/NihanPol/ASTR_3300_S2025' },
];

window.CV = {
  appointments: [
    { when: '2024 — present', role: 'Assistant Professor, Department of Physics & Astronomy', place: 'Texas Tech University' },
    { when: '2022 — 2024', role: 'NANOGrav Postdoctoral Fellow', place: 'Oregon State University · University of Wisconsin, Milwaukee (visiting)' },
    { when: '2020 — 2022', role: 'VIDA Postdoctoral Fellow', place: 'Vanderbilt University — advisor: Dr. Stephen Taylor' },
  ],
  education: [
    { when: '2015 — 2020', role: 'Ph.D., Physics & Astronomy', place: 'West Virginia University — advisors: Dr. Maura McLaughlin, Dr. Duncan Lorimer' },
    { when: '2013 — 2015', role: 'M.Sc., Physics', place: 'Indian Institute of Technology' },
    { when: '2010 — 2013', role: 'B.Sc., Physics', place: 'University of Pune' },
  ],
  awards: [
    { when: '2026', role: 'NSF CAREER Award', place: 'National Science Foundation' },
    { when: '2023', role: 'NANOGrav Outstanding Science Contribution', place: 'NANOGrav Collaboration' },
    { when: '2020', role: 'VIDA Postdoctoral Fellowship', place: 'Vanderbilt University' },
    { when: '2020', role: 'WVU Outstanding Doctoral Student in Physics', place: 'West Virginia University' },
  ],
  service: [
    { when: '2025 — present', role: 'IPTA Science Committee member', place: 'International Pulsar Timing Array' },
    { when: '2024 — present', role: 'Referee', place: 'ApJ, MNRAS, PRD' },
    { when: '2023 — present', role: 'NANOGrav Detection Working Group', place: 'Co-chair' },
  ],
};

window.GROUP = [
  { name: 'Taha Moursy',       role: 'Graduate student · Fall 2024 →',     avatar: 'TM' },
  { name: 'Kushagra N. Nag',   role: 'Graduate student · Fall 2024 →',     avatar: 'KN' },
  { name: 'Zachary Zelensky',  role: 'Graduate student · Fall 2024 →',     avatar: 'ZZ' },
  { name: 'Shashwat Sardesai', role: 'Postdoctoral scholar · Fall 2025 →', avatar: 'SS' },
];

window.ACCENTS = {
  ttured:  { light: '#CC0000', dark: '#FF4D4D', label: 'TTU red' },
  ttubrand:{ light: '#E90802', dark: '#FF5A53', label: 'TTU brand red' },
  mono:    { light: '#0a0a0a', dark: '#ededed', label: 'mono' },
  purple:  { light: '#6B21A8', dark: '#A78BFA', label: 'purple' },
  indigo:  { light: '#4338CA', dark: '#A5B4FC', label: 'indigo' },
  teal:    { light: '#0F766E', dark: '#5EEAD4', label: 'teal' },
  amber:   { light: '#B45309', dark: '#FCD34D', label: 'amber' },
};