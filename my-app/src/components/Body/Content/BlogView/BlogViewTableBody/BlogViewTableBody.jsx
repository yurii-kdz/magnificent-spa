import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {Typography, Grid, Box} from "@material-ui/core";
import ArrowUp from "../../../../../icons/ArrowUp";
import Dots from "../Dots";
import TableBody from "@material-ui/core/TableBody";
import useStyles from "./style";
import rows from "./mockup"

const BlogViewTableBody = (props) => {

    const classes = useStyles(props);

    return (
        <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name} className={classes.row}>
                    <TableCell component="th" scope="row" className={classes.cell}>
                        <Typography variant="h3" className={classes.name}>
                            {row.name}
                        </Typography>
                        <Typography variant="h5" className={classes.subtext}>
                            {row.posted}
                        </Typography>
                    </TableCell>
                    <TableCell align="center" className={classes.cell} size="small" classes={{sizeSmall: classes.sizeSmall}}>
                        <Box border={2} borderRadius="50px" className={classes[row.status]} >
                            <Grid container justify="center" alignItems="center" classes={{root: classes.root}}>
                                {row.status}
                            </Grid>
                        </Box>
                    </TableCell>
                    <TableCell align="center" className={classes.cell}>
                        <Grid container alignItems="center"className={classes.container}>
                            <span className={classes.stats}>{row.stats}</span>
                            <span className={classes.views}>{row.views}</span>
                            {row.stats > 0
                                ? <ArrowUp/>
                                : null
                            }
                        </Grid>
                    </TableCell>
                    <TableCell align="right" className={classes.cell}>
                        <Dots/>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default BlogViewTableBody;