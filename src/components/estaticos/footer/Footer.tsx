import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram'; 
import GitHubIcon from '@mui/icons-material/GitHub'; import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import { Grid, Box, Typography } from "@material-ui/core";
import './Footer.css';


function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/FernandoFCardoso" target="_blank">
                                <GitHubIcon className='redes' />
                                </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">Fernando Cardoso</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;