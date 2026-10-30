import React, { useState } from "react";
import { ChevronDown, Heart } from "lucide-react";
import { contactData } from "../data/contactData";
import { donationData } from "../data/donationData";
import {
  RibbonPanel,
  CampaignImage,
  CampaignCopy,
  CampaignEyebrow,
  CampaignTitle,
  CampaignText,
  CampaignLink,
  ToggleButton,
  CollapsedButton,
  CollapsedImage,
  CollapsedHeart,
} from "./styled";

const getInitialExpandedState = () => {
  try {
    return window.localStorage.getItem("donation-ribbon-collapsed") !== "true";
  } catch {
    return true;
  }
};

export const DonationRibbon = () => {
  const [isExpanded, setIsExpanded] = useState(getInitialExpandedState);
  const inquiryLink = `mailto:${contactData.email}?subject=${encodeURIComponent("Proszę o link do zbiórki")}`;

  const toggleRibbon = () => {
    setIsExpanded((current) => {
      const nextState = !current;
      try {
        window.localStorage.setItem(
          "donation-ribbon-collapsed",
          String(!nextState),
        );
      } catch {
        // The banner remains usable when browser storage is unavailable.
      }
      return nextState;
    });
  };

  if (!isExpanded) {
    return (
      <CollapsedButton
        type="button"
        onClick={toggleRibbon}
        aria-label="Rozwiń pasek zbiórki Pomóż mi żyć"
        title="Pomóż mi żyć — rozwiń pasek"
      >
        <CollapsedImage src={donationData.imageUrl} alt="" />
        <CollapsedHeart>
          <Heart size={16} fill="currentColor" aria-hidden="true" />
        </CollapsedHeart>
      </CollapsedButton>
    );
  }

  return (
    <RibbonPanel aria-label="Informacja o zbiórce">
      <CampaignImage src={donationData.imageUrl} alt={donationData.imageAlt} />
      <CampaignCopy>
        <CampaignEyebrow>{donationData.eyebrow}</CampaignEyebrow>
        <CampaignTitle>{donationData.title}</CampaignTitle>
        <CampaignText>{donationData.description}</CampaignText>
        <CampaignLink href={inquiryLink}>
          Zapytaj, jak pomóc
          <Heart size={15} aria-hidden="true" />
        </CampaignLink>
      </CampaignCopy>
      <ToggleButton
        type="button"
        onClick={toggleRibbon}
        aria-label="Zwiń pasek zbiórki do samego zdjęcia"
        title="Zwiń pasek"
      >
        <ChevronDown size={17} aria-hidden="true" />
      </ToggleButton>
    </RibbonPanel>
  );
};
