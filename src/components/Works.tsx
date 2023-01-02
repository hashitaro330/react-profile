import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import List from '@mui/material/List'
import ListItem, { ListItemProps } from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import FolderIcon from '@mui/icons-material/Folder'


function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Works
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <List sx={{width: 770, maxWidth: '100%'}}>
            <ListItem>
              <ListItemLink href='#'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Work1' secondary='Work1です。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='#'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Work2' secondary='Work2です。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='#'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Work3' secondary='Work3です。' />
              </ListItemLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Works;