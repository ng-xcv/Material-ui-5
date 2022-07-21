import {
   AppBar,
   Toolbar,
   styled,
   Typography,
   InputBase,
   Badge,
   Avatar,
   Box,
   Menu,
   MenuItem,
} from "@mui/material";
import { Mail, Mood, Notifications } from "@mui/icons-material";
import React, { useState } from "react";
import { theme } from "../theme";

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between",
});

const Search = styled("div")({
   backgroundColor: "white",
   padding: "0 10px",
   borderRadius: theme.shape.borderRadius,
   width: "40%",
});

const Icons = styled("div")(({ theme }) => ({
   display: "none",
   gap: "15px",
   alignItems: "center",
   [theme.breakpoints.up("sm")]: {
      display: "flex",
   },
}));

export const UserBox = styled(Box)(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   gap: "10px",
   [theme.breakpoints.up("sm")]: {
      display: "none",
   },
}));

const Navbar = () => {
   const [open, setOpen] = useState(false);
   return (
      <AppBar position="sticky">
         <StyledToolbar>
            <Typography
               variant="h6"
               sx={{ display: { xs: "none", sm: "block" } }}
            >
               MATERIAL
            </Typography>
            <Mood sx={{ display: { xs: "block", sm: "none" } }} />
            <Search>
               <InputBase placeholder="search ..." />
            </Search>
            <Icons>
               <Badge badgeContent={4} color="error">
                  <Mail />
               </Badge>
               <Badge badgeContent={2} color="error">
                  <Notifications />
               </Badge>
               <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://images.pexels.com/photos/11215870/pexels-photo-11215870.jpeg"
                  onClick={(e) => setOpen(true)}
               />
            </Icons>
            <UserBox>
               <Typography>NG</Typography>
               <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://images.pexels.com/photos/11215870/pexels-photo-11215870.jpeg"
                  onClick={(e) => setOpen(true)}
               />
            </UserBox>
         </StyledToolbar>
         <Menu
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
            transformOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
         >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
         </Menu>
      </AppBar>
   );
};

export default Navbar;
