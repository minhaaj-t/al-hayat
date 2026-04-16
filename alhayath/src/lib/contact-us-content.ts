/** Copy of alhayatinteriors.com/contact-us/ (Elementor page 4439). */

export const contactHero = {
  title: "We're Here to Bring Your Space to Life",
  subtitle: "Start the Conversation Today.",
};

export const contactIntro = {
  heading: "We'd Love to Hear from You.",
  body: "Have a project in mind or a question for us? Reach out — our team is ready to assist you and bring your vision to life.",
};

export const contactMapEmbedSrc =
  "https://maps.google.com/maps?q=AL%20HAYAT%20INTERIORS%20L.L.C.&t=m&z=10&output=embed&iwloc=near";

export type ReachLine =
  | { kind: "address"; text: string }
  | { kind: "phone"; text: string }
  | { kind: "email"; text: string; href: string };

export const contactReachUs = {
  title: "Reach us through",
  lines: [
    {
      kind: "address" as const,
      text: "WH 05 - BINSAIFAN RAK,  INDUSTRIAL 01, RAS AL KHOR – DUBAI  UNITED ARAB EMIRATES",
    },
    {
      kind: "phone" as const,
      text: "+971 4224 2006 || 0505189503",
    },
    {
      kind: "email" as const,
      text: "info@alhayatinteriors.com",
      href: "mailto:info@alhayatinteriors.com",
    },
  ] satisfies ReachLine[],
};

export const contactSocial = {
  title: "Social Networks",
  items: [
    { icon: "facebook" as const, label: "alhayatinteriors" },
    { icon: "twitter" as const, label: "alhayatinteriors" },
    { icon: "instagram" as const, label: "alhayat_interiors" },
    { icon: "linkedin" as const, label: "alhayatinteriors" },
  ],
};

export const contactFormSection = {
  title: "Send us a Message",
};

export const contactFaq = {
  eyebrow: "INFORMATION QUESTIONS",
  title: "FREQUENTLY ASKED QUESTIONS",
  items: [
    {
      q: "1. What services does Al Hayat Interiors offer?",
      aHtml:
        "We provide complete turnkey interior fit-out solutions, custom joinery, MEP works, aluminum and glass installations, interior design, and project approvals. Our expertise covers commercial, residential, retail, hospitality, and industrial spaces.",
    },
    {
      q: "2. Which areas in the UAE do you serve?",
      aHtml:
        "We operate across all Emirates including <strong>Dubai, Abu Dhabi, Sharjah, Al Ain, and Ajman</strong>.",
    },
    {
      q: "3. Do you handle government approvals and permits?",
      aHtml:
        "Yes, we manage all necessary approvals and permits from authorities such as Dubai Municipality, Civil Defense, DEWA, and other relevant bodies. Our in-house team ensures smooth documentation and compliance.",
    },
    {
      q: "4. Can you manage end-to-end projects?",
      aHtml:
        "Absolutely. We specialize in <strong>turnkey solutions</strong>, managing everything from design and planning to execution, handover, and post-completion support.",
    },
    {
      q: "5. How do I request a quote or consultation?",
      aHtml: `You can fill out the contact form on our website, email us at <strong><a href="mailto:info@alhayatinteriors.com" class="text-amber-800 underline hover:text-amber-900">info@alhayatinteriors.com</a></strong>, or call us directly. One of our project consultants will respond promptly.`,
    },
    {
      q: "6. What makes Al Hayat Interiors different from others?",
      aHtml:
        "Our strength lies in our <strong>attention to detail, craftsmanship, and commitment to deadlines</strong>. With an in-house skilled team and factory capabilities, we offer unmatched quality control and service reliability.",
    },
  ],
};
