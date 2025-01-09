import FormGroup from "@mui/material/FormGroup"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import CheckboxBtn from "./CheckboxBtn"

const CheckBoxBtnGroup = (props: any) => {
  const { setHobbies, hobbies } = props
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Hobby</FormLabel>
        <FormGroup aria-label="Hobby" row>
          <CheckboxBtn
            name="game"
            label="Game"
            onChange={() => setHobbies("game")}
            checked={hobbies.game}
          />
          <CheckboxBtn
            name="music"
            label="Music"
            onChange={() => setHobbies("music")}
            checked={hobbies.music}
          />
          <CheckboxBtn
            name="craft"
            label="Craft"
            onChange={() => setHobbies("craft")}
            checked={hobbies.craft}
          />
          <CheckboxBtn
            name="reading"
            label="Reading"
            onChange={() => setHobbies("reading")}
            checked={hobbies.reading}
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}
export default CheckBoxBtnGroup
