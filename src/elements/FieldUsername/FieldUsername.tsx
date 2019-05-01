import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

function FieldUsername({ autoFocus = false, required = true,  ...rest  }) {
  const classes = useStyles();
  
  return (
    <FormControl margin="normal" required={required} fullWidth>
      <InputLabel htmlFor="username">Username</InputLabel>
      <Input id="username" name="username" autoComplete="username" autoFocus={autoFocus} {...rest} />
    </FormControl>
  );
}
const useStyles = makeStyles((theme: Theme) => ({
}));

export default FieldUsername;