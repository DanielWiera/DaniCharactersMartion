import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const Footer = () => {
    return (
        <Paper
            style={{
                height: "30px",
                background: "linear-gradient(195deg, #42424a, #191919)",
                borderTop: "4px outset black",
                borderBottom: "4px outset black",
                color: "white",
                display: "flex",
                marginTop: "20px"
            }}
        >
            <Typography
             style={{
                width: "100%",
                textAlign: "center",
                fontFamily: "Comic Sans MS",
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: "14px",
                fontStyle: "italic"
             }}
            >
                Design: Kiss Dániel - {new Date().getFullYear()}
            </Typography>
        </Paper>
    )
}