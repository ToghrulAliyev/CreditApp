import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    aligntItems: "center",
  },
  notFound: {
    fontSize: "4rem",
    color: "#00008B",
  },
});
type Props = {};

const Notfound = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.notFound}>404 Not Found</div>
    </div>
  );
};

export default Notfound;
