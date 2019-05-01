import React from "react";
// material ui
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";


function FieldPassword({ autoFocus = false, required = true, ...rest }) {
  const classes = useStyles();
  
  return (
    <FormControl margin="normal" required={required} fullWidth>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input
        name="password"
        type="password"
        id="password"
        autoComplete="current-password"
        autoFocus={autoFocus}
        {...rest}
      />
    </FormControl>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
}));

export default FieldPassword;
