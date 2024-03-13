import Grid from '@mui/material/Grid';
import Character from '../character-card';

export const Characters = () => {
    return (
        <Grid container spacing={5} justifyContent="center">
            <Character
                name="Angyal Daniella"
                title="A Mráz Kálmán Internátus diákja"
                img="angyaldaniella.jpg"
                color="#CEA2FD"
            />

            <Character
                name="Brankovich Alexandra"
                title="ELTE-EMK, mágikus lények szak, modell"
                img="brankovichalexandra.png"
                color="#2D548E"
            />

            <Character
                name="Fenyvesi Liliána Nóra"
                title="Énekesnő, dalszerző, zenész"
                img="fenyvesililiananora.jpg"
                color="#BA55D3"
            />

            <Character
                name="Kirtz Imre"
                title="Üzletember"
                img="kirtzimre.png"
                color="#4A4DAE"
            />

            <Character
                name="Orsay Rafael"
                title="Rubin gemmárius"
                img="orsayrafael.jpg"
                color="#880808"
            />

            <Character
                name="Póra Tódor Péter"
                title="Ezermester"
                img="poratodorpeter.png"
                color="#CC9966"
            />

            <Character
                name="Varsányi Diána Liza"
                title="A Karpena ösvény diákja, Ötödik évfolyam"
                img="varsanyidianaliza.png"
                color="#236F21"
            />
        </Grid>
    );
}