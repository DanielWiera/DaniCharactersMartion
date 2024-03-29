import Grid from '@mui/material/Grid';
import Character from '../character-card';

export const Characters = ({characters}) => {

    return (
        <Grid container spacing={5} justifyContent="center">
            {characters.map((character, idx) =>
                <Character
                    key={idx}
                    name={character.name}
                    title={character.title}
                    birthday={character.birthday}
                    img={character.img}
                    pic={character.pic}
                    color={character.color}
                />
            )}
        </Grid>
    );
}