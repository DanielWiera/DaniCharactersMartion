import Grid from '@mui/material/Grid';
import Character from '../character-card';
import { getCharacters } from './characterList';

export const Characters = () => {
    const characters = getCharacters();
    return (
        <Grid container spacing={5} justifyContent="center">
            {characters.map((character) =>
                <Character
                    name={character.name}
                    title={character.title}
                    img={character.img}
                    pic={character.pic}
                    color={character.color}
                />
            )}
        </Grid>
    );
}