import Grid from '@mui/material/Grid';
import Character from '../character-card';

export const Characters = () => {
    return (
        <Grid container spacing={5} justifyContent="center">
            <Character
                name="Angyal Daniella"
                title="A Mráz Kálmán Internátus diákja"
                img="angyaldaniella.jpg"
                pic="Kiss Daniella"
                color="#CEA2FD"
                
            />

            <Character
                name="Brankovich Alexandra"
                title="ELTE-EMK, mágikus lények szak, modell"
                img="brankovichalexandra.png"
                pic="Samantha Guerrero"
                color="#2D548E"
            />

            <Character
                name="Fenyvesi Liliána Nóra"
                title="Énekesnő, dalszerző, zenész"
                img="fenyvesililiananora.jpg"
                pic="Chrissy Costanza"
                color="#BA55D3"
            />

            <Character
                name="Kirtz Imre"
                title="Üzletember"
                img="kirtzimre.png"
                pic="Chez Rust"
                color="#4A4DAE"
            />

            <Character
                name="Orsay Rafael"
                title="Rubin gemmárius"
                img="orsayrafael.jpg"
                pic="Mehmet Ozun Dolunay"
                color="#880808"
            />

            <Character
                name="Póra Tódor Péter"
                title="Ezermester"
                img="poratodorpeter.png"
                pic="Arthur Gosse"
                color="#CC9966"
            />

            <Character
                name="Varsányi Diána Liza"
                title="A Karpena ösvény diákja, Ötödik évfolyam"
                img="varsanyidianaliza.png"
                pic="Lizge Cömert"
                color="#236F21"
            />
        </Grid>
    );
}