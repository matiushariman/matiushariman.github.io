import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Theme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { EXPERIENCE } from './constants';

export type ListOfExperienceNavProps = {
  currentView: number;
  setCurrentView: (value: number) => void;
};

const ListOfExperienceNav = ({ currentView, setCurrentView }: ListOfExperienceNavProps) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  // if device is a desktop/tablet, return a list.
  if (isDesktop) {
    return (
      <nav aria-label="list of experience navigation">
        <List>
          {EXPERIENCE.map((experience, i) => (
            <React.Fragment key={experience.companyName}>
              <ListItem disablePadding>
                <ListItemButton
                  selected={i === currentView}
                  onClick={() => {
                    setCurrentView(i);
                  }}
                >
                  <ListItemText primary={experience.companyName} />
                </ListItemButton>
              </ListItem>
              {i !== EXPERIENCE.length - 1 ? <Divider /> : null}
            </React.Fragment>
          ))}
        </List>
      </nav>
    );
  }

  // else return tab
  return (
    <Tabs
      value={currentView}
      onChange={(e: React.SyntheticEvent, newValue: string) => {
        setCurrentView(Number(newValue));
      }}
      aria-label="basic tabs example"
    >
      {EXPERIENCE.map((experience, i) => (
        <Tab label={experience.companyName} value={i} key={experience.companyName} />
      ))}
    </Tabs>
  );
};

export default ListOfExperienceNav;
