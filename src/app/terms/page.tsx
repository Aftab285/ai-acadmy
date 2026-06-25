import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service — Pakistan AI Online Academy",
  description:
    "Review the Terms of Service and Conditions for enrolling in live online classes at Pakistan AI Online Academy. Learn about class rules, fee terms, and academic policies.",
  path: "/terms",
  keywords: ["Terms of Service", "Terms and Conditions", "Pakistan AI Academy Terms"],
});

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms" },
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
              { label: "Terms of Service", href: "/terms" },
            ]}
          />
          <h1 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Terms of Service
          </h1>
          <p className="text-blue-100">Last updated: June 25, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Welcome to <strong>Pakistan AI Online Academy</strong>!
            </p>

            <p>
              These terms and conditions outline the rules and regulations for the use of Pakistan AI Online Academy&apos;s
              Website and Live Online Courses, located at{" "}
              <a href="https://pakistanaionlineacademy.com" className="text-primary underline font-medium">
                https://pakistanaionlineacademy.com
              </a>
              .
            </p>

            <p>
              By accessing this website and enrolling in our courses, we assume you accept these terms and conditions
              in full. Do not continue to use Pakistan AI Online Academy&apos;s services if you do not agree to take all
              of the terms and conditions stated on this page.
            </p>

            <hr className="border-gray-200" />

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">1. Interpretation and Definitions</h2>
            <p>
              The following terminology applies to these Terms of Service, Privacy Statement, and Disclaimer Notice:
              &quot;Student&quot;, &quot;Parent&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person
              logged on to this website or enrolling a student. &quot;The Academy&quot;, &quot;Ourselves&quot;,
              &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to Pakistan AI Online Academy.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">2. Course Enrollment &amp; Live Classes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>100% Live Classes:</strong> All classes are conducted online live by our instructors. Live links
                are shared with parents/students via WhatsApp groups.
              </li>
              <li>
                <strong>Attendance &amp; Schedule:</strong> Students are expected to attend classes on time. Class
                schedules (days and timings) are agreed upon during enrollment and are fixed. Any request to change the
                batch/schedule is subject to seat availability.
              </li>
              <li>
                <strong>Student Conduct:</strong> We maintain a positive, encouraging, and respectful virtual learning
                environment. Disruptive behavior, use of inappropriate language, or academic dishonesty will result in
                warning or suspension from classes without refund.
              </li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">3. Fees &amp; Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Course Fees:</strong> Fees must be paid in advance before the commencement of the course or monthly
                cycle as per the selected payment scheme (one-time or monthly plan).
              </li>
              <li>
                <strong>Payment Methods:</strong> Payments are processed online (JazzCash, EasyPaisa, or direct Bank
                Transfers) as coordinated via our official WhatsApp support at 03406187831.
              </li>
              <li>
                <strong>Refund Policy:</strong> Since we offer a <strong>Free Demo Class</strong> for you/your child to
                evaluate our teaching quality before paying, all paid course fees are non-refundable and non-transferable
                once the regular classes begin.
              </li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, Pakistan AI Online Academy and/or its licensors own the intellectual property
              rights for all material, course curriculum, presentations, and resources provided during live classes or
              via our website. All intellectual property rights are reserved. You may access this from Pakistan AI
              Online Academy for your own personal educational use subjected to restrictions set in these terms.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republish or distribute our course materials, slides, or recording links</li>
              <li>Sell, rent, or sub-license our learning resources</li>
              <li>Reproduce, duplicate, or copy our syllabus for commercial teaching academies</li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">5. Limitation of Liability</h2>
            <p>
              In no event shall Pakistan AI Online Academy, nor any of its instructors, directors, or partners, be
              liable for anything arising out of or in any way connected with your use of this website or enrollment in
              our live classes, whether such liability is under contract. Pakistan AI Online Academy shall not be held
              liable for any indirect, consequential, or special liability arising out of or in any way related to your
              learning outcomes or student grade performance.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you
              irrevocably submit to the exclusive jurisdiction of the courts in that State or Location.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-dark mt-8">7. Contact Information</h2>
            <p>
              Our sole and official contact method is WhatsApp. For any inquiries regarding enrollment, class schedules,
              fees, or terms clarification, please contact us at:
            </p>
            <p className="font-semibold text-primary">
              WhatsApp: 03406187831 (International: +923406187831)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
