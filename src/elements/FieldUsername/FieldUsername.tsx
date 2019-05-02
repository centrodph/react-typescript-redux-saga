import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

function FieldUsername({ autoFocus = false, required = true,  ...rest  }) {

  return (
    <FormControl margin="normal" required={required} fullWidth>
      <InputLabel htmlFor="username">Username</InputLabel>
      <Input id="username" name="username" autoComplete="username" autoFocus={autoFocus} {...rest} />
    </FormControl>
  );
}


export default FieldUsername;