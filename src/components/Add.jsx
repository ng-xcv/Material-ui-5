import {
   Avatar,
   Box,
   Button,
   ButtonGroup,
   Fab,
   Modal,
   Stack,
   styled,
   TextField,
   Tooltip,
   Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
   Add as AddIcon,
   DateRange,
   EmojiEmotions,
   Image,
   PersonAdd,
   VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   width: "100%",
   [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: "10%",
   },
   [theme.breakpoints.down("xs")]: {
      width: "70%",
      marginLeft: "15%",
   },
}));

const UserBox = styled(Box)({
   display: "flex",
   alignItems: "center",
   gap: "10px",
   marginTop: "10px",
   marginBottom: "20px",
});

const Add = () => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <Tooltip
            title="Add"
            sx={{
               position: "fixed",
               bottom: 20,
               left: { xs: "calc(50% - 25px)", md: 30 },
            }}
            onClick={(e) => setOpen(true)}
         >
            <Fab color="primary" aria-label="add">
               <AddIcon />
            </Fab>
         </Tooltip>
         <StyledModal open={open} onClose={(e) => setOpen(false)}>
            <Box
               width={400}
               height={280}
               p={3}
               bgcolor={"background.default"}
               color={"text.primary"}
               borderRadius={5}
            >
               <Typography variant="h6" color="gray" textAlign="center">
                  Create Post
               </Typography>
               <UserBox>
                  <Avatar
                     sx={{ width: 30, height: 30 }}
                     src="https://images.pexels.com/photos/11215870/pexels-photo-11215870.jpeg"
                  />
                  <Typography fontWeight={500}>NG</Typography>
               </UserBox>
               <TextField
                  sx={{ width: "100%" }}
                  multiline
                  rows={3}
                  placeholder="What's on your mind ?"
                  variant="standard"
               />
               <Stack direction="row" gap={1} mt={2} mb={3}>
                  <EmojiEmotions color="primary" />
                  <Image color="secondary" />
                  <VideoCameraBack color="success" />
                  <PersonAdd color="error" />
               </Stack>
               <ButtonGroup
                  fullWidth
                  variant="contained"
                  aria-label="outlined primary button group"
               >
                  <Button>Post</Button>
                  <Button sx={{ width: "100px" }}>
                     <DateRange />
                  </Button>
               </ButtonGroup>
            </Box>
         </StyledModal>
      </>
   );
};

export default Add;
