import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import MailIcon from '@mui/icons-material/Mail'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import Avatar from '@mui/material/Avatar'
import { green, blue, purple } from '@mui/material/colors'


const Contact: React.FC = () => {

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Contact
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Link href='#' color='inherit'>
            <Avatar sx={{m: 1,color: '#fff', backgroundColor: green[500]}}>
              <MailIcon />
            </Avatar>
          </Link>
          <Link href='#' color='inherit'>
            <Avatar sx={{m: 1, backgroundColor: blue[500]}}>
              <TwitterIcon />
            </Avatar>
          </Link>
          <Link href='#' color='inherit'>
            <Avatar sx={{m: 1, backgroundColor: purple[500]}}>
              <GitHubIcon />
            </Avatar>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Contact;