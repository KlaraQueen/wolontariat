import React from "react";
import { CheckCircle2 } from "lucide-react";
import { ActivityRow, ActivityIcon, ActivityCopy, ActivityName, ActivityDate } from "./styled";

export const ActivityItem = ({ activity }) => (
  <ActivityRow>
    <ActivityIcon><CheckCircle2 aria-hidden="true" /></ActivityIcon>
    <ActivityCopy>
      <ActivityName>{activity.title}</ActivityName>
      <ActivityDate>{activity.date}</ActivityDate>
    </ActivityCopy>
  </ActivityRow>
);
