import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { faqData } from "../../data/faqData";
import { QuestionTile } from "./QuestionTile";
import {
  FAQSectionWrapper,
  SectionHeading,
  SectionDescription,
  QuestionGrid,
  AllQuestionsLink,
} from "./styled";

const featuredQuestions = faqData.questions.slice(0, 3);

export const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 993px)").matches
      ? "all"
      : null,
  );

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 993px)");
    const handleBreakpointChange = (event) => {
      setOpenQuestion(event.matches ? "all" : null);
    };

    desktopQuery.addEventListener("change", handleBreakpointChange);
    return () =>
      desktopQuery.removeEventListener("change", handleBreakpointChange);
  }, []);

  return (
    <FAQSectionWrapper aria-labelledby="home-faq-heading">
      <SectionHeading id="home-faq-heading">
        Zanim zaczniesz, sprawdź odpowiedzi
      </SectionHeading>
      <SectionDescription>
        Zebraliśmy kilka informacji, które pomogą Ci zrobić pierwszy krok.
      </SectionDescription>

      <QuestionGrid>
        {featuredQuestions.map((item) => (
          <QuestionTile
            key={item.id}
            question={item}
            isOpen={openQuestion === "all" || openQuestion === item.id}
            onToggle={() =>
              setOpenQuestion((current) =>
                current === "all"
                  ? item.id
                  : current === item.id
                    ? null
                    : item.id,
              )
            }
          />
        ))}
      </QuestionGrid>

      <AllQuestionsLink to="/najczesciej-zadawane-pytania">
        Zobacz wszystkie pytania
        <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
      </AllQuestionsLink>
    </FAQSectionWrapper>
  );
};
