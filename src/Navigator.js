import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import SignalWifiStatusbarNullOutlinedIcon from '@mui/icons-material/SignalWifiStatusbarNullOutlined';
import SignalWifi1BarOutlinedIcon from '@mui/icons-material/SignalWifi1BarOutlined';
import SignalWifi2BarOutlinedIcon from '@mui/icons-material/SignalWifi2BarOutlined';
import SignalWifi3BarOutlinedIcon from '@mui/icons-material/SignalWifi3BarOutlined';
import SignalWifi4BarOutlinedIcon from '@mui/icons-material/SignalWifi4BarOutlined';



const categories = [
  {
    id: '',
    children: [
      { id: 'Wordpress', icon: <SignalWifi4BarOutlinedIcon /> },
      { id: 'Joomla', icon: <SignalWifi3BarOutlinedIcon /> },
      { id: 'Drupal', icon: <SignalWifi2BarOutlinedIcon /> },
      { id: 'Bitrix', icon: <SignalWifi1BarOutlinedIcon /> },
      { id: 'OpenCart', icon: <SignalWifiStatusbarNullOutlinedIcon /> },
    ],
  },
];

const item = {
  py: '5px',
  px: 2,
  '&:hover, &:focus': {
    bgcolor: '#009be5',
  },
};

const itemCategory = {
  boxShadow: '0 0px 0 #ffffff inset',
  py: 2.2,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{...itemCategory, fontSize: 20, color: '#ffffff',bgcolor:'#009be5' }}>
          Системы управления контентом(CMS)
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#ededed' }}>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
