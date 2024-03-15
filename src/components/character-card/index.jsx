import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import "@fontsource/great-vibes";

const Character = ({ name, title, birthday, img, pic, color }) => {
    const martionURL = "http://martion.alomvilag.hu/"

    const calculateAge = () => {
        const dob = new Date(birthday);
        const month_diff = Date.now() - dob.getTime();
        const age_dt = new Date(month_diff);
        const year = age_dt.getUTCFullYear();
        const age = Math.abs(year - 1970);

        return age;
    }

    const hasBirthday = () => {
        const today = new Date();
        const bday = new Date(birthday);

        return today.getDate() === bday.getDate() && today.getMonth() === bday.getMonth();
    }

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
                        display: "block",
                        flexDirection: "column",
                        width: "250px",
                        minHeight: "340px",
                        height: "fit-content",
                        textAlign: "center",
                        border: "2px outset black",
                        borderRadius: "20px",
                        background: "linear-gradient(195deg, #42424a, #191919)",
                        boxShadow: `1px 1px 1px 0px ${color}`,
                    }}
                >
                    <Box
                        style={{
                            height: "190px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                        }}
                    >
                        <Toolbar title={`Kép: ${pic}`}>
                            <img
                                style={{
                                    border: "4px inset black",
                                    borderRadius: "20px",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    width: "180px",
                                    height: "180px",
                                    boxShadow: `0px 2px 2px 0px black`,

                                }}
                                src={`images/${img}`}
                                alt=""
                            />
                        </Toolbar>
                    </Box>
                    <Box style={{
                        width: "100%",
                        minHeight: "127px",
                        height: "fit-content",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        background: "linear-gradient(185deg, #42424a, #191919)"
                    }}>
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                minHeight: "90px",
                                borderTop: `3px groove black`,
                                borderBottom: `3px groove black`,
                                height: "fit-content",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                            }}
                        >
                            <Box
                                style={{
                                    height: "fit-content",
                                    marginTop: "auto",
                                    marginBottom: "auto"
                                }}
                            >
                                <Typography
                                    style={{
                                        fontSize: "28px",
                                        fontStyle: "italic",
                                        fontWeight: "bold",
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
                                    fontFamily: "Comic Sans MS",
                                    fontSize: "16px",
                                }}>
                                    {title}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            style={{
                                display: "flex",
                                minHeight: "27px",
                                height: "fit-content",
                                flexDirection: "column",
                            }}
                        >
                            <Typography style={{
                                color: "white",
                                fontStyle: "italic",
                                fontFamily: "Comic Sans MS",
                                fontSize: "12px",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}>
                                {`Kor: ${calculateAge()} év ${hasBirthday() ? "Happy birthday!" : ""}`}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Link>
        </Grid>
    );
}

export default Character