import React, { useState, useCallback } from "react";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import { useCopyToClipboard } from "react-use";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};

const CopyToClipboard = ({ text }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);
  const classes = useStyles();

  const getTooltipTitle = () => {
    switch (statusCopy) {
      case STATUS_COPY.COPY:
        return "Copy";
      case STATUS_COPY.COPIED:
        return "Copied";
      default:
        return "";
    }
  };

  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, text]);

  const onClickAway = useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY);
  }, [setStatusCopy]);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={getTooltipTitle()} placement="top" arrow>
        <Button className={classes.root} onClick={onClickCopy}>
          <FileCopyOutlinedIcon className={classes.icon} />
          {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default CopyToClipboard;

CopyToClipboard.propTypes = {
  text: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    textTransform: "none",
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: "small",
  },
}));
