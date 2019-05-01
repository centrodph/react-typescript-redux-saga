import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

function FieldEmail({ autoFocus = false, required = true,  ...rest  }) {
  const classes = useStyles();
  
  return (
    <FormControl margin="normal" required={required} fullWidth>
      <InputLabel htmlFor="email">Email Address</InputLabel>
      <Input id="email" name="email" autoComplete="email" autoFocus={autoFocus} {...rest} />
    </FormControl>
  );
}
const useStyles = makeStyles((theme: Theme) => ({
}));

export default FieldEmail;