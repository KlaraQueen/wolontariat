import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { contactData } from "../../data/contactData";
import {
  ContactSectionWrapper,
  ContactHeading,
  ContactIntro,
  ContactLinks,
  ContactLink,
  ContactIcon,
} from "./styled";

export const ContactSection = () => (
  <ContactSectionWrapper aria-labelledby="about-contact-heading">
    <ContactHeading id="about-contact-heading">Porozmawiajmy</ContactHeading>
    <ContactIntro>
      Masz pytanie albo pomysł na wspólne działanie? Napisz lub odezwij się do
      nas.
    </ContactIntro>
    <ContactLinks>
      <ContactLink href={`mailto:${contactData.email}`}>
        <ContactIcon>
          <Mail size={19} aria-hidden="true" />
        </ContactIcon>
        <span>
          <small>Napisz do nas</small>
          {contactData.email}
        </span>
      </ContactLink>
      <ContactLink href={`tel:${contactData.phone.replace(/\s/g, "")}`}>
        <ContactIcon>
          <Phone size={19} aria-hidden="true" />
        </ContactIcon>
        <span>
          <small>Zadzwoń</small>
          {contactData.phone}
        </span>
      </ContactLink>
      <ContactLink
        href={contactData.socials.facebook}
        target="_blank"
        rel="noreferrer"
      >
        <ContactIcon>
          <MessageCircle size={19} aria-hidden="true" />
        </ContactIcon>
        <span>
          <small>Znajdź nas na</small>Facebook
        </span>
      </ContactLink>
      <ContactLink
        href={contactData.socials.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <ContactIcon>
          <MessageCircle size={19} aria-hidden="true" />
        </ContactIcon>
        <span>
          <small>Obserwuj nas na</small>Instagramie
        </span>
      </ContactLink>
    </ContactLinks>
  </ContactSectionWrapper>
);
