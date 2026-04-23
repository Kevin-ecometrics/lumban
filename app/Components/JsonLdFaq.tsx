"use client";

import { useTranslation } from "react-i18next";

interface JsonLdProps {
  questions: Array<{
    questionKey: string;
    answerKey: string;
  }>;
}

export default function JsonLdFaq({ questions }: JsonLdProps) {
  const { t } = useTranslation();

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: t(q.questionKey),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(q.answerKey).replace(/\n/g, " "),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}