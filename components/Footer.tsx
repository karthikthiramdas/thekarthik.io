import { getContact, getActiveSocials } from "@/lib/data";

export default function Footer() {
  const contact = getContact();
  const socials = getActiveSocials();

  return (
    <footer className="bg-ink text-paper/70">
      <div className="container-page py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <p className="font-display text-3xl text-paper text-balance">
            {contact.hero.title.join(" ")}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block mt-4 text-brass-bright hover:text-brass transition-colors"
          >
            {contact.email}
          </a>
        </div>
        <div className="flex flex-col gap-2 field-label !text-paper/50">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:!text-paper/80 transition-colors"
            >
              {s.handle || s.name}
            </a>
          ))}
          <span>{contact.location}</span>
          <span>&copy; {new Date().getFullYear()} thekarthik.io</span>
        </div>
      </div>
    </footer>
  );
}
