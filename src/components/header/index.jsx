import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export const Header = () => {
    const martionURL = "http://martion.alomvilag.hu/"
    const facebookURL = "https://www.facebook.com/daniel.k.kiss.7/"

    return (
        <Paper
            style={{
                color: "white",
                fontFamily: "cursive",
                height: "65px",
                marginBottom: "20px",
                background: "linear-gradient(185deg, #42424a, #191919)",
                borderBottom: "8px outset black",
                borderTop: "8px outsite black",
                paddingLeft: "5px"
            }}
        >
            <Box
                style={{
                    height: "100%",
                    display: "flex",
                    marginLeft: "6px"
                }}
            >
                <Box
                    style={{ width: "50%", display: "flex" }}
                >
                    <Link
                        href={facebookURL}
                        target="_blank"
                        style={{
                            width: "fit-content",
                            textDecoration: "none",
                            marginTop: "auto",
                            marginBottom: "auto",
                            textAlign: "right",
                            color: "white",
                            display: "flex",
                            minWidth: "400px"
                        }}
                    >
                        <img src="images/facebooklogo.png"
                            style={{
                                height: "50px",
                            }}
                            alt=""
                        />
                        <Typography
                            style={{
                                fontFamily: "cursive",
                                display: "flex",
                                marginTop: "auto",
                                marginBottom: "auto",
                                fontSize: "28px",
                                fontStyle: "italic",
                                fontWeight: "bold",
                                marginLeft: "10px",
                            }}
                        >
                            Dani karakterei
                        </Typography>
                    </Link>
                </Box>
                <Box
                    style={{
                        width: "50%",
                        justifyContent: "right",
                        display: "flex",
                        marginRight: "6px"
                    }}
                >
                    <Link
                        href={martionURL}
                        target="_blank"
                        style={{
                            width: "fit-content",
                            textDecoration: "none",
                            marginTop: "auto",
                            marginBottom: "auto",
                            display: "flex",
                            fontStyle: "italic",
                        }}
                    >
                        <Typography
                            className="hide-small"
                            style={{
                                width: "100%",
                                fontFamily: "cursive",
                                fontSize: "22px",
                                fontStyle: "italic",
                                fontWeight: "bold",
                                color: "white",
                                marginRight: "10px",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            Martion
                        </Typography>
                        <img src="images/martionlogo.png"
                            style={{
                                height: "50px",
                            }}
                            alt=""
                        />
                    </Link>
                </Box>
            </Box>
        </Paper>
    );
}