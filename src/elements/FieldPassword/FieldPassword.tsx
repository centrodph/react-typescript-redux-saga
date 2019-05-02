import React from "react";
// material ui
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";



function FieldPassword({ autoFocus = false, required = true, ...rest }) {
  
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

export default FieldPassword;
