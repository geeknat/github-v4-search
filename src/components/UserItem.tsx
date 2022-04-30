import {Box, Button, Grid, Paper} from "@mui/material";
import {numberFormatter} from "../utils/numberFormatter";
import {UserFieldsFragment} from "../graphql/generated";
import React from "react";

interface UserItemProps {
    user: UserFieldsFragment;
}

export const UserItem: React.FC<UserItemProps> = ({user}) => {

    const goToGithub = () => window.open(user?.url, "_blank")

    return (
        <Box data-testid={'userItemID'} mt={2} mb={3}>
            <Paper style={styles.container} onClick={goToGithub}>
                <Grid container>
                    <Grid item xs={12} sm={2}>
                        <img src={user.avatarUrl} style={styles.cover} alt={user?.login}/>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Box p={1} mr={2}>
                            <p style={styles.name}>{user?.login}</p>
                            <p style={styles.description}>{numberFormatter(user?.followers?.totalCount)} followers</p>
                            <p style={styles.description}>{user?.bio}</p>
                            <Box mt={2}>
                                <Button variant="contained" onClick={goToGithub}>
                                    View on GitHub
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

const styles = {
    container: {
        cursor: 'pointer',
        borderRadius: 8,
        padding: 8
    },
    cover: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
    },
    name: {
        fontWeight: 500,
        marginBottom: 4,
    },
    description: {
        marginBottom: 2,
    }
}
