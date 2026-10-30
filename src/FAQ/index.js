import React, { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { faqData } from "../data/faqData";
import { contactData } from "../data/contactData";
import {
  FAQWrapper,
  FAQHeading,
  FAQIntro,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQContactLink,
} from "./styled";

const FAQAnswerContent = ({ answer }) => {
  if (typeof answer === "string") {
    return answer;
  }

  return (
    <>
      {answer.before} {" "}
      <FAQContactLink href={`mailto:${contactData.email}`}>
        <Mail size={16} strokeWidth={2} aria-hidden="true" />
        {answer.emailLabel}
      </FAQContactLink>
      {" lub przez "}
      <FAQContactLink
        href={contactData.socials.facebook}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
        {answer.facebookLabel}
      </FAQContactLink>
      .
    </>
  );
};

export const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <FAQWrapper>
      <FAQHeading>{faqData.title}</FAQHeading>
      <FAQIntro>{faqData.intro}</FAQIntro>
      <FAQList>
        {faqData.questions.map(({ id, question, answer }) => {
          const isOpen = openQuestion === id;

          return (
            <FAQItem id={id} key={id} open={isOpen}>
              <FAQQuestion
                onClick={(event) => {
                  event.preventDefault();
                  setOpenQuestion(isOpen ? null : id);
                }}
              >
                {question}
              </FAQQuestion>
              <FAQAnswer>
                <FAQAnswerContent answer={answer} />
              </FAQAnswer>
            </FAQItem>
          );
        })}
      </FAQList>
    </FAQWrapper>
  );
};
