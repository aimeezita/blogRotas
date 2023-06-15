import { Box, Button, Grid, Link, TextField, Typography } from "@material-ui/core";
import Imagem from '../../assets/msntjxhu3lf71.jpg'
import './Login.css'

export function Login() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className="tamanhoPagina">
            <Grid xs={6} alignItems="center">
                <Box padding={20}>
                    <form action="" align="center">
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align="center" style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>

                        <TextField id='senha' label='senha' variant='outlined' name='senha' type="password" margin='normal' fullWidth></TextField>

                        <Box > 
                            <Button type="submit" variant="contained" color="primary">Logar</Button>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" margin-top={2} >
                        <Typography variant="subtitle2"> Não tem uma conta?</Typography>
                        <Typography variant="subtitle2"> Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6}>
                <Box>
                    <img src={Imagem} alt="A imagem sumiu" />
                </Box>

            </Grid>
        </Grid>

    )
}