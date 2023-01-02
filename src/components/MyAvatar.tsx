// import { makeStyles } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

// 画像ファイルをインポート
import ImageFile from '../static/images/my_avatar.jpg'

const MyAvatar: React.FC = () => {

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Avatar
            alt='Hashitaro'
            src={ImageFile}
            sx={{ width: (theme) => theme.spacing(30), height: (theme) => theme.spacing(30)}}
          />
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Hashitaro
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='body1'>
            System Engineer
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default MyAvatar;
