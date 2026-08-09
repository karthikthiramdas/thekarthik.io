import creator from "@/data/creator.json";
import hero from "@/data/hero.json";
import stats from "@/data/stats.json";
import portfolio from "@/data/portfolio.json";
import mediaKit from "@/data/media-kit.json";
import contact from "@/data/contact.json";
import faq from "@/data/faq.json";
import socials from "@/data/socials.json";
import nav from "@/data/nav.json";
import industries from "@/data/industries.json";
import studio from "@/data/studio.json";
import work from "@/data/work.json";
import journal from "@/data/journal.json";
import tripstayGoa from "@/data/case-studies/tripstay-goa.json";
import giriManeHomestay from "@/data/case-studies/giri-mane-homestay.json";

export type JournalArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: string;
  body: string[];
};

export const getCreator = () => creator;
export const getHero = () => hero;
export const getStats = () => stats;
export const getPortfolio = () => portfolio;
export const getMediaKit = () => mediaKit;
export const getContact = () => contact;
export const getFaq = () => faq;
export const getActiveSocials = () => socials.platforms.filter((p) => p.url);
export const getNav = () => nav;
export const getIndustries = () => industries;
export const getStudio = () => studio;
export const getWork = () => work;
export const getJournal = () => journal;
export const getJournalArticles = (): JournalArticle[] => journal.articles as JournalArticle[];
export const getJournalArticle = (slug: string) =>
  (journal.articles as JournalArticle[]).find((a) => a.slug === slug);
export const getCaseStudies = () => [tripstayGoa, giriManeHomestay];
export const getCaseStudy = (slug: string) =>
  [tripstayGoa, giriManeHomestay].find((cs) => cs.slug === slug);
