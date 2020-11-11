import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {Typography, Grid} from "@material-ui/core";
import Dots from "../../Dots";
import TableBody from "@material-ui/core/TableBody";
import useStyles from "./style";
import rows from "./mockup"

const CreateViewTableBody = (props) => {
    const classes = useStyles(props);
    return (
        <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name} className={classes.row}>
                    <TableCell component="th" scope="row" className={classes.cell}>
                        <Typography variant="h3" className={classes.name}>
                            {row.name}
                        </Typography>
                    </TableCell>
                    <TableCell align="left" className={classes.cell}>
                        <Typography variant="span">{row.posted}</Typography>
                    </TableCell>
                    <TableCell algin="left">
                        <Grid container justify="center" alignItems="center" classes={{root: classes.root}}
                              className={classes[row.status]}>
                            {row.status}
                        </Grid>
                    </TableCell>
                    <TableCell>
                        <Typography variant="span" className={classes.author}>
                            {row.author}
                        </Typography>
                        <Typography variant="span" className={classes.role}>
                            {row.role}
                        </Typography>
                    </TableCell>
                    <TableCell align="right" className={classes.cell}>
                        <Dots/>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default CreateViewTableBody;