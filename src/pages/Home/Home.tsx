import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material'
import './Home.css'
import fotoLogo from '../../components/img/logo.png'


function Home() {

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#EEF1FF" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Opa</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>A democracia sou eu.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#212121", color: "white" }}>Nova postagem</Button>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#212121", color: "white" }}>Ver postagens</Button>
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <img src={fotoLogo} alt="imagem de um notebook e um computador" width="800px" height="500px" />
                </Grid>
                
                <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
            </Grid>
        </>   
    )
}

export default Home