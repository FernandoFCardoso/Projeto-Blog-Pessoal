import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram'; 
import GitHubIcon from '@mui/icons-material/GitHub'; import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import { Grid, Box, Typography } from "@material-ui/core";

function Footer (){

    return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Me siga nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/eidisato" target="_blank">
                                <GitHubIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/eidisato/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/vinicius-eidi-sato/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#000000", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2021 Copyright:</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">contato.viniciuseidisato@gmail.com</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    </>
    )
}

export default Footer;