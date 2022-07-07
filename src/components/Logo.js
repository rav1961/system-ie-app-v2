import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  // const theme = useTheme();

  // const PRIMARY_LIGHT = theme.palette.primary.light;

  // const PRIMARY_MAIN = theme.palette.primary.main;

  // const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 'auto', height: 147, margin: '0 auto', ...sx }} />

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
