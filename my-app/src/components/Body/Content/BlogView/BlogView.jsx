import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import useStyles from "./style";
import { Typography } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import arrow from "../../../../assets/img/arrow-up-circle.svg";


const createData = (name, posted, status,  stats, views, dots) => {
    return {name, posted, status, stats, views, dots};
};

const rows = [
    createData('Design: A Survival Guide for Beginners', 'Posted 3 days ago', "Scheduled", 120, "views", ""),
    createData('Design: A Survival Guide for Beginners', 'Posted 3 days ago', 'Draft', 120, "views", ""),
    createData('Design: A Survival Guide for Beginners', 'Posted 3 days ago', 'Scheduled', 120, "views", ""),
    createData('Design: A Survival Guide for Beginners', 'Posted 3 days ago', 'Published', 0, "views", ""),
    createData('Design: A Survival Guide for Beginners', 'Posted 3 days ago', 'Published', 120, "views", ""),
];

const BlogView = () => {
    const classes = useStyles();

    return (
        <div className="blogView">
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableCell} align="left">Title</TableCell>
                            <TableCell className={classes.tableCell} align="left">Status</TableCell>
                            <TableCell className={classes.tableCell} align="left">Stats</TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                <Button className={classes.button}>Add new</Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
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
                                <TableCell align="center" className={classes.cell}>
                                <span className={classes.status + " " + row.status}>
                                    {row.status}
                                </span>
                                </TableCell>
                                <TableCell align="center" className={classes.cell}>
                                    <div className={classes.container}>
                                        <span className={classes.stats}>{row.stats}</span>
                                        <span className={classes.views}>{row.views}</span>
                                        {row.stats > 0
                                            ? <span> <img src={arrow} alt="arrow"/></span>
                                            : <span> </span>
                                        }
                                    </div>
                                </TableCell>
                                <TableCell align="right" className={classes.cell}>
                                    <div className={classes.dots}>
                                        <span className={classes.dot} />
                                        <span className={classes.dot} />
                                        <span className={classes.dot} />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={3} hidePrevButton hideNextButton color="primary" classes={{ul: classes.ul}} className={classes.pagination}/>
        </div>

    );
}

export default BlogView
