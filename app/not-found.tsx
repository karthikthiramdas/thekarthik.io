import Link from "next/link";
import Folio from "@/components/Folio";
import Statement from "@/components/Statement";

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="bg-ink text-paper min-h-[70vh] flex items-center">
        <div className="container-page py-32">
          <Folio index="404" label="Not Found" dark />

          <Statement
            lines={["This frame", "doesn't exist."]}
            emphasisIndex={1}
            size="xl"
            dark
            className="mt-8"
          />

          <p className="mt-6 max-w-md text-paper/50 leading-relaxed">
            The page you're looking for has either moved or was never shot.
            Here's the way back.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href="/thekarthik.io/"
              className="border border-brass/60 text-brass-bright px-7 py-3 field-label hover:bg-brass hover:text-ink hover:border-brass transition-colors"
            >
              Back to Home
            </Link>

            <Link
              href="/thekarthik.io/work/"
              className="field-label !text-paper/50 hover:!text-paper transition-colors self-center"
            >
              View the Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}