import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Typography from '@mui/material/Typography';
import { VideoPlayer, Videodiv } from '../home/style';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  height: "70vh",
  bgcolor: 'background.paper',
  border: '20px #fff',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <div>
      <Videodiv>
      <VideoPlayer>
      <PlayCircleFilledIcon onClick={handleOpen} style={{cursor:"pointer", background:"white"}}/>
      </VideoPlayer>
      <VideoPlayer>
      <PlayCircleFilledIcon onClick={handleOpen} style={{cursor:"pointer", background:"white"}}/>
      </VideoPlayer>
      <VideoPlayer>
      <PlayCircleFilledIcon onClick={handleOpen} style={{cursor:"pointer", background:"white"}}/>
      </VideoPlayer>
      <VideoPlayer>
      <PlayCircleFilledIcon onClick={handleOpen} style={{cursor:"pointer", background:"white"}}/>
      </VideoPlayer>
      </Videodiv>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" style={{fontSize:"20px", textAlign:"left"}}>
            Vocation? CAMPER is the best option
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             <iframe height="400px" width="100%" src="https://www.youtube.com/embed/qff2gy_glxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}