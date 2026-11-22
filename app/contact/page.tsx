import type { Metadata } from "next";
import SectionHeading from "../Components/ui/SectionHeading";
import ContactInfo from "../Components/ContactPageSectoins/Info";
import ContactInputs from "../Components/ContactPageSectoins/Inputs";

export const metadata: Metadata = {
  title: "Get Custom Box Pricing | PackagingPackers Pakistan",
  description:
    "Request pricing for custom rigid, mailer, and cardboard boxes in Pakistan. Share your size, volume, and delivery area.",
};

export default function ContactPage() {
  return (
    <div className="py-20 sm:py-28 bg-brown-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Tell Us What You Need"
          title="Get Pricing for Your Box Order"
          subtitle="Share your product, size, order volume, and delivery area so we can help you choose the right box style."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start mt-10">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <div id="quote-form" className="lg:col-span-7 scroll-mt-28">
            <ContactInputs />
          </div>
        </div>
      </div>
    </div>
  );
}
