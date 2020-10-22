import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Button, Grid} from "@material-ui/core"
import {useLocation} from 'react-router-dom'
import useStyles from "./style";
import PenToolWhite from "../../../../icons/PenToolWhite";
import BlogViewTableBody from "./BlogViewTableBody/BlogViewTableBody";
import AppPagination from "../Pagination/Pagination";
import items from './BlogViewTableBody/mockup';

const perPage = 5;
const itemsCount = items.length;

const getCurrentPage = (location) => {
    const urlSearchParams = new URLSearchParams(location.search);
    const page = parseInt(urlSearchParams.get('page') || 1);

    return page > 1 ? page : 1;
};

const BlogView = (props) => {
    const classes = useStyles(props);

    const location = useLocation();
    const currentPage = getCurrentPage(location);

    const paginatedItems = items.filter((elem, index) => index >= perPage * (currentPage - 1) && index < currentPage * perPage);

    return (
        <Grid container justify="center">
            <TableContainer classes={{root: classes.root}} component={Grid}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head" classes={{head: classes.head}} align="left">Title</TableCell>
                            <TableCell variant="head" className={classes.tableCell} align="left">Status</TableCell>
                            <TableCell variant="head" className={classes.tableCell} align="left">Stats</TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                <Button startIcon={<PenToolWhite/>} size="large" >Add new</Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <BlogViewTableBody items={paginatedItems} />
                </Table>
            </TableContainer>
            <AppPagination count={itemsCount} route={`/`} perPage={perPage} />
        </Grid>
    );
};

export default BlogView
