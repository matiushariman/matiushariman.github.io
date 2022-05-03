import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import type { RoleProps } from './constants';

export type RolesTimelineProps = {
  roles: RoleProps[];
};

const RolesTimeline = ({ roles }: RolesTimelineProps) => (
  <Timeline position="alternate">
    {roles.map((role, roleIndex) => (
      <TimelineItem key={role.title}>
        {roleIndex !== roles.length - 1 ? (
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
        ) : (
          <TimelineDot />
        )}
        <TimelineContent>
          <Grid spacing={1} container>
            <Grid item xs={12}>
              <Typography fontWeight="bold">{role.title}</Typography>
              <Typography
                variant="caption"
                fontStyle="italic"
              >{`${role.startDate} - ${role.endDate}`}</Typography>
            </Grid>
            <Grid item xs={12}>
              {role.achievements.map((achievement, j) => (
                <Typography variant="body2" key={`${role.title}-${j}`} sx={{ fontSize: 10 }}>
                  {achievement}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={1}>
                {role.techIcons.map((icon, techIconIndex) => (
                  <Avatar
                    key={`${role.title}-tech-${techIconIndex}`}
                    alt={`${role.title}-tech-${techIconIndex}`}
                    src={icon}
                    sx={{ width: 16, height: 16 }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline>
);

export default RolesTimeline;
