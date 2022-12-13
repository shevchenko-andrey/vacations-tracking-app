import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, Popover, IconButton, Avatar, Fab } from '@mui/material';
import { Container } from '@mui/system';

interface IHeaderProps {
  auth: boolean;
  title: string;
  email: string;
  backLinkPath?: string;
  handleLogOut: () => void;
}

export const Header: FC<IHeaderProps> = ({
  title,
  auth,
  email,
  handleLogOut,
  backLinkPath,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box>
            {backLinkPath && (
              <Fab
                component={Link}
                to={backLinkPath}
                color="secondary"
                variant="circular"
              >
                <ArrowBackIcon />
              </Fab>
            )}
          </Box>
          <Typography
            textAlign="center"
            variant="h6"
            component="p"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar sx={{ bgcolor: '#74gfhg' }}>
                  {email[0].toUpperCase()}
                </Avatar>
              </IconButton>
              <Popover
                open={isOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Box p="20px">
                  <Typography>{email}</Typography>
                  <Box
                    color="primary"
                    display="flex"
                    justifyContent="center"
                    width={'100%'}
                  >
                    <Button title="Logout" onClick={handleLogOut}>
                      Logout
                    </Button>
                  </Box>
                </Box>
              </Popover>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
