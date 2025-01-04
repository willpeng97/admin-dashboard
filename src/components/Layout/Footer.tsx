import { Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {`Copyright © ${new Date().getFullYear()} `}
      <Link color="inherit" href="https://www.weyutech.com/">
        WeYu Technology Co.
      </Link>
      {", Ltd. All Rights Reserved."}
    </Typography>
  );
}