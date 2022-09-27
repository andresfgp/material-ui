import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
  const { userState } = props
  const {
    location,
    twitter_username,
    blog,
    company
  } = userState;
  return(
    <Grid
      container
      spacing={2}
      sx={{marginTop:'15px'}} 
    >
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon/>
          {location === null || location === ""
            ? <Typography>Not Available</Typography>
            : <Typography>{location}</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon/>
          {twitter_username === null || twitter_username === ""
            ? <Typography>Not Available</Typography>
            : <Typography>{twitter_username}</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon/>
          {blog === null || blog === ""
            ? <Typography>Not Available</Typography>
            : <a target="_blank" href={`https://${blog}`}><Typography>{blog}</Typography></a>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          {company === null || company === ""
            ? <Typography>Not Available</Typography>
            : <Typography>{company}</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LocationInformation;