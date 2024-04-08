import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

interface NearestCitiesProps {
    nearestCities: string[];
}

const NearestCities: React.FC<NearestCitiesProps> = ({ nearestCities }) => {
    return nearestCities.length > 0 ? (
        <div>
            <Typography gutterBottom variant="h5">
                Nearest Cities
            </Typography>
            <List>
                {nearestCities.map((city, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={city} />
                    </ListItem>
                ))}
            </List>
        </div>
    ) : null;
};

export default NearestCities;
