import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Button, Grid} from "@material-ui/core";
import useStyles from "./style";
import Pagination from '@material-ui/lab/Pagination';
import PenToolWhite from "../../../../icons/PenToolWhite";
import BlogViewTableBody from "./BlogViewTableBody/BlogViewTableBody";

const BlogView = (props) => {
    const classes = useStyles(props);

    return (
        <Grid container justify="center">
            <TableContainer classes={{root: classes.root}} component={Grid}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head" classes={{head: classes.head}} align="left">Title</TableCell>
                            <TableCell className={classes.tableCell} align="left">Status</TableCell>
                            <TableCell className={classes.tableCell} align="left">Stats</TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                <Button startIcon={<PenToolWhite/>} size="large" >Add new</Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <BlogViewTableBody />
                </Table>
            </TableContainer>
            <Pagination count={3} hidePrevButton hideNextButton color="primary" classes={{ul: classes.ul}} className={classes.pagination}/>
        </Grid>
    );
};

export default BlogView
