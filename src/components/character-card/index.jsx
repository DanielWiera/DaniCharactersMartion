import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import "@fontsource/great-vibes";

const Character = ({ img, color, name, title }) => {
    const martionURL = "http://martion.alomvilag.hu/"

    return (
        <Grid item>
            <Link
                href={martionURL + name}
                target="_blank"
                style={{
                    textDecoration: "none"
                }}
            >
                <Paper className="char-box"
                    style={{
                        width: "260px",
                        height: "330px",
                        textAlign: "center",
                        border: "2px outset black",
                        borderRadius: "20px",
                        background: "linear-gradient(195deg, #42424a, #191919)"
                    }}
                >
                    <Box
                        style={{
                            height: "200px",
                            paddingTop: "10px",
                            paddingBottom: "10px"
                        }}
                    >
                        <img
                            style={{
                                border: "4px inset black",
                                borderRadius: "20px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "180px",
                                height: "180px"
                            }}
                            src={`images/${img}`}
                            alt=""
                        />
                    </Box>
                    <Box style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "77px",
                        borderTop: "3px solid black",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",

                        marginLeft: "auto",
                        marginRight: "auto",
                        background: "linear-gradient(185deg, #42424a, #191919)"
                    }}>
                        <Box
                            style={{
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}
                        >
                            <Typography
                                style={{
                                    fontSize: "30px",
                                    fontStyle: "italic",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    fontFamily: "Great Vibes",
                                    color: color,
                                    textShadow: "2px 4px 4px black",
                                }}
                            >
                                {name}
                            </Typography>
                            <Typography style={{
                                color: "white",
                                fontStyle: "italic",
                                fontFamily: "cursive"
                            }}>
                                {title}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Link>
        </Grid>
    );
}

export default Character