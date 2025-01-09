import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { Radio } from "@mui/material"

const RadioBtnGroup = (props: any) => {
  const { value, onChange } = props

  return (
    <div>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          defaultValue="Male"
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="gender"
          value={value}
          onChange={onChange}
        >
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Etc" control={<Radio />} label="Etc" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
export default RadioBtnGroup
