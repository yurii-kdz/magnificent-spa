import React from 'react';
import {NavLink} from 'react-router-dom';
import {Grid} from "@material-ui/core"
import useStyles from "./style";

const getPageUrl = (route, page) => {
    page = parseInt(page) > 1 ? '?page='+page : '';

    return route + page;
};

const AppPagination = ({count, perPage, route}) => {

    const classes = useStyles();

    const pagesCount = Math.ceil(count / perPage);
    const arrayPages = [...Array(pagesCount).keys()];

    return (
        <Grid container justify='center'>
        {arrayPages.map((page) => (
            <Grid container justify="center" alignItems="center" className={classes.tab}>
                <NavLink to={getPageUrl(route, page + 1)} className={classes.link}>
                    {page + 1}
                </NavLink>
            </Grid>
        ))}
        </Grid>
    )
};

export default AppPagination;