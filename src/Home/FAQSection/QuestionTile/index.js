import React from "react";
import { CircleHelp, ChevronDown } from "lucide-react";
import {
  Tile,
  TileIcon,
  TileQuestion,
  TileAnswer,
} from "./styled";

export const QuestionTile = ({ question, isOpen, onToggle }) => (
  <Tile $isOpen={isOpen}>
    <TileQuestion
      type="button"
      aria-expanded={isOpen}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
    >
      <TileIcon aria-hidden="true">
        <CircleHelp size={20} strokeWidth={1.8} />
      </TileIcon>
      <span>{question.question}</span>
      <ChevronDown className="expand-icon" size={20} aria-hidden="true" />
    </TileQuestion>
    {isOpen && (
      <TileAnswer>
        {typeof question.answer === "string"
          ? question.answer
          : question.answer.before}
      </TileAnswer>
    )}
  </Tile>
);
