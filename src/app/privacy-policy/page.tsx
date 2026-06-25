import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy — Pakistan AI Online Academy",
  description:
    "Read the Privacy Policy of Pakistan AI Online Academy. Learn how we handle, collect, and protect your personal information when you enroll in our live online AI classes.",
  path: "/privacy-policy",
  keywords: ["Privacy Policy", "Pakistan AI Academy Privacy", "Data Protection Policy"],
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-16 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ]}
          />
          <h1 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Privacy Policy
          </h1>
          <p className="text-blue-100">Last updated: June 25, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              At <strong>Pakistan AI Online Academy</strong>, accessible from{" "}
              <a href="https://pakistanaionlineacademy.com" className="text-primary underline font-medium">
                https://pakistanaionlineacademy.com
              </a>
              , one of our main priorities is the privacy of our visitors and students. This Privacy Policy document
              contains types of information that is collected and recorded by Pakistan AI Online Academy and how we
              use it.
            </p>

            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate
              to contact us through our primary contact method on WhatsApp at{" "}
              <a href="https://wa.me/923406187831" className="text-secondary font-semibold hover:underline">
                03406187831
              </a>
              .
            </p>

            <hr className="border-gray-200" />

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide
              it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Direct Communications:</strong> If you contact us directly via WhatsApp or email, we may
                receive additional information about you such as your name, phone number, email address, the contents
                of the message, and any attachments you may send us.
              </li>
              <li>
                <strong>Enrollment Information:</strong> When you register for an AI course or book a free demo
                class, we request student details (name, age, grade, city) and parent contact details to coordinate
                live classes.
              </li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website and educational programs</li>
              <li>Improve, personalize, and expand our educational services</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new courses, services, features, and functionality</li>
              <li>
                Communicate with you via WhatsApp to send course schedules, homework updates, demo class links, and
                academy announcements
              </li>
              <li>Send you emails when necessary for enrollment receipts or support</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">Log Files</h2>
            <p>
              Pakistan AI Online Academy follows a standard procedure of using log files. These files log visitors
              when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The
              information collected by log files include internet protocol (IP) addresses, browser type, Internet
              Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally identifiable. The purpose of the information
              is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering
              demographic information.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">Cookies and Web Beacons</h2>
            <p>
              Like any other website, Pakistan AI Online Academy uses &quot;cookies&quot;. These cookies are used to
              store information including visitors&apos; preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the users&apos; experience by customizing our web
              page content based on visitors&apos; browser type and/or other information.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">GDPR &amp; Pakistan Data Protection Rights</h2>
            <p>
              We want to make sure you are fully aware of all of your data protection rights. Every user is entitled
              to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>The right to access:</strong> You have the right to request copies of your personal data.
              </li>
              <li>
                <strong>The right to rectification:</strong> You have the right to request that we correct any
                information you believe is inaccurate.
              </li>
              <li>
                <strong>The right to erasure:</strong> You have the right to request that we erase your personal data,
                under certain conditions.
              </li>
              <li>
                <strong>The right to restrict processing:</strong> You have the right to request that we restrict the
                processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to object to processing:</strong> You have the right to object to our processing of
                your personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to data portability:</strong> You have the right to request that we transfer the data
                that we have collected to another organization, or directly to you, under certain conditions.
              </li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">Children&apos;s Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage
              parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              Pakistan AI Online Academy provides courses for school students (Ages 10+). We do not knowingly collect
              any Personal Identifiable Information from children under the age of 13 without consent and coordination
              of their parent or legal guardian. If you think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately on WhatsApp, and we will do our best
              efforts to promptly remove such information from our records.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
