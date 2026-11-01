import React from "react";
import { ActivityItem } from "./ActivityItem";
import {
  ActivityPanel,
  ActivityHeader,
  ActivityTitle,
  ActivityEmpty,
  ActivityList,
} from "./styled";

export const ActivitySection = ({ activities }) => (
  <ActivityPanel aria-labelledby="activity-title">
    <ActivityHeader>
      <ActivityTitle id="activity-title">Ostatnia aktywność</ActivityTitle>
      {activities.length > 0 && <span>Ostatnie wpisy</span>}
    </ActivityHeader>
    {activities.length ? (
      <ActivityList>
        {activities.slice(0, 5).map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </ActivityList>
    ) : (
      <ActivityEmpty>
        Twoje ukończone działania pojawią się tutaj po pierwszej akcji.
      </ActivityEmpty>
    )}
  </ActivityPanel>
);
