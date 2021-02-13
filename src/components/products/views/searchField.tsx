import React, {useState} from "react";
import clsx from "clsx";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

type UsesearchFieldProps = {};
type ReturnTypeUsesearchField = ReturnType<typeof useSearchField>;
function useSearchField(props: UsesearchFieldProps) {
  const {} = props;

  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {value, handleChange};
}

type searchFieldViewProps = ReturnTypeUsesearchField & {};
let SearchFieldView: React.FC<searchFieldViewProps> = ({
  value,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-search">{"Search"}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-search"
          value={value}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={50}
          className={classes.outlinedInput}
        />
      </FormControl>
    </>
  );
};

type searchFieldProps = UsesearchFieldProps &
  Omit<searchFieldViewProps, keyof ReturnTypeUsesearchField>;
let SearchField: React.FC<searchFieldProps> = ({...others}) => {
  const searchField = useSearchField({});
  return <SearchFieldView {...searchField} {...others} />;
};

export default SearchField;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "50ch",
    },
    outlinedInput: {},
  })
);
