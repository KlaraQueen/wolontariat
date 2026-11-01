import React from "react";
import { BellRing } from "lucide-react";
import { NoticePanel, NoticeHeader, NoticeIcon, NoticeTitle, NoticeMessage } from "./styled";

export const CoordinatorNotice = ({ notice }) => (
  <NoticePanel aria-labelledby="coordinator-notice-title">
    <NoticeHeader>
      <NoticeIcon><BellRing aria-hidden="true" /></NoticeIcon>
      <NoticeTitle id="coordinator-notice-title">{notice.title}</NoticeTitle>
    </NoticeHeader>
    <NoticeMessage>{notice.message}</NoticeMessage>
  </NoticePanel>
);
