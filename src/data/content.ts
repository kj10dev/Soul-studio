// All copy lives here. Everything marked TODO is a proposal, not confirmed brand fact.

export type PlateVariant = "rings" | "barbs" | "stars" | "waves" | "dots" | "crowns";

export const brand = {
  name: "Soul",
  tagline: "Tattoos by KB Luff",
  line: "ink with a soul.",
  email: "", // TODO: add a booking email; the Book section shows it automatically when set
  booking: "https://www.instagram.com/soul_studio_999/", // proposal: DM-to-book until a form exists
  instagram: "https://www.instagram.com/soul_studio_999/",
  facebook: "https://www.facebook.com/profile.php?id=100090524530260",
  location: "", // TODO: studio location; shown automatically when set
  year: "2026",
};

// TODO: confirm the real styles KB Luff offers
export const styles: { id: string; name: string; blurb: string; plate: PlateVariant }[] = [
  { id: "01", name: "Custom", blurb: "Drawn from scratch, for one body only.", plate: "rings" },
  { id: "02", name: "Fine line", blurb: "Thin lines, steady hands, quiet impact.", plate: "waves" },
  { id: "03", name: "Blackwork", blurb: "Solid black, bold shapes, zero apology.", plate: "barbs" },
  { id: "04", name: "Cover-ups", blurb: "Old ink, new story.", plate: "stars" },
];

export const work: {
  id: string;
  style: string;
  year: string;
  title: string;
  image?: string;
  plate: PlateVariant;
  rotate: number;
  offset: string;
}[] = [
  { id: "01", style: "Custom", year: "2026", title: "Rings", image: `${import.meta.env.BASE_URL}work/pic1.jpg`, plate: "rings", rotate: -3, offset: "md:mt-0" },
  { id: "02", style: "Fine line", year: "2026", title: "Tide", image: `${import.meta.env.BASE_URL}work/pic2.jpg`, plate: "waves", rotate: 2, offset: "md:mt-[14vh]" },
  { id: "03", style: "Blackwork", year: "2026", title: "Thorn", image: `${import.meta.env.BASE_URL}work/pic3.jpg`, plate: "barbs", rotate: -1.5, offset: "md:-mt-[8vh]" },
  { id: "04", style: "Cover-ups", year: "2025", title: "Night sky", image: `${import.meta.env.BASE_URL}work/pic4.jpg`, plate: "stars", rotate: 4, offset: "md:mt-[20vh]" },
  { id: "05", style: "Custom", year: "2025", title: "Grain", image: `${import.meta.env.BASE_URL}work/pic5.jpg`, plate: "dots", rotate: -2.5, offset: "md:mt-[4vh]" },
  { id: "06", style: "Blackwork", year: "2025", title: "Crowned", image: `${import.meta.env.BASE_URL}work/pic6.jpg`, plate: "crowns", rotate: 3, offset: "md:-mt-[4vh]" },
];

// *word* renders as Bodoni italic
export const manifesto = ["skin is the *canvas.*", "no copies. no *regrets.*", "one of one, every time."];

export const artist = {
  name: "KB Luff",
  bio: "Soul is the studio of KB Luff. Every piece is drawn for the person wearing it, then made once and never repeated.", // TODO: real bio
  portrait: `${import.meta.env.BASE_URL}work/pic14.jpg`,
  facts: [
    { k: "Booking", v: "Send a DM on Instagram" },
    { k: "Work", v: "Custom, one of one" },
    { k: "Rule", v: "No copies, no regrets" },
  ],
};

// TODO: replace with the studio's real aftercare steps
export const aftercare = [
  { id: "A", title: "Keep it clean", body: "Gently wash with mild soap and pat dry." },
  { id: "B", title: "Hands off", body: "Don't pick, scratch or peel while it heals." },
  { id: "C", title: "No soaking", body: "Skip pools, baths and the sea until healed." },
  { id: "D", title: "Cover from sun", body: "Keep fresh ink out of direct sun." },
];

export const nav = [
  { id: "work", label: "Work", count: String(work.length).padStart(2, "0") },
  { id: "styles", label: "Styles", count: "" },
  { id: "artist", label: "Artist", count: "" },
  { id: "book", label: "Book", count: "" },
];

export const tape = ["BOOK NOW", "ONE OF ONE", "NO COPIES", "SOUL", "INK WITH A SOUL"];
