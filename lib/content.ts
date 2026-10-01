export const links = {
  messenger: "https://m.me/HostKeira",
  instagram: "https://www.instagram.com/host.keira",
  facebook: "https://www.facebook.com/HostKeira",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#events", label: "Events" },
  { href: "#reviews", label: "Reviews" },
] as const;

export const menuLinks = [
  ...navLinks,
  { href: "#book", label: "Contact" },
] as const;

export const services = [
  {
    num: "01",
    title: "Event Hosting / Emcee",
    body: "Weddings, debuts, birthdays and corporate programs, hosted with energy and warmth from opening to send-off.",
  },
  {
    num: "02",
    title: "Events Management",
    body: "Planning and on-the-day coordination so your program, suppliers and timeline stay on track.",
  },
  {
    num: "03",
    title: "Inspirational Speaking",
    body: "Talks for schools, organizations and companies that leave audiences motivated.",
  },
  {
    num: "04",
    title: "Training",
    body: "Certified trainer for workshops and seminars on hosting, presenting and personal development.",
  },
  {
    num: "05",
    title: "In-Person Classes",
    body: "Hands-on sessions for aspiring hosts and speakers, held face to face.",
  },
  {
    num: "06",
    title: "Online Classes",
    body: "The same coaching delivered live online, wherever you are.",
  },
] as const;

export const reviews = [
  {
    text: "Super the best host/emcee ever! You are awesome! Lahat ng guests mapapabilib talaga!",
    name: "Crystal Gard",
  },
  {
    text: "Highly recommend for all your hosting needs. Very entertaining and energetic host!",
    name: "Loida Sakay Santiago",
  },
] as const;

export const eventPhotos = [
  {
    id: "event-1",
    src: "/assets/wedding.webp",
    alt: "Host Keira hosting a wedding or celebration dinner",
    objectPosition: "70% center",
  },
  {
    id: "event-2",
    src: "/assets/corporate-program.webp",
    alt: "A large audience watching a corporate program on stage",
    objectPosition: "center",
  },
  {
    id: "event-3",
    src: "/assets/crowd-and-venue.webp",
    alt: "A microphone on a stand under warm stage lights",
    objectPosition: "center",
  },
  {
    id: "event-4",
    src: "/assets/spreaking-and-training.webp",
    alt: "Host Keira speaking into a microphone at a formal event",
    objectPosition: "center",
  },
] as const;

export const serviceOptions = services.map((s) => s.title);

export const eventTypes = [
  "Wedding",
  "Birthday / Debut",
  "Corporate event",
  "School / Seminar",
  "Other",
] as const;
