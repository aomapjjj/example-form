import Checkbox from "@mui/material/Checkbox"

import FormControlLabel from "@mui/material/FormControlLabel"

type CheckboxBtnProps = {
  label: string
  name: string
  onChange: any
  checked: boolean
  value?: string
}

const CheckboxBtn = (props: CheckboxBtnProps) => {
  const { label, name, onChange, checked, value } = props
  return (
    <FormControlLabel
      value={label}
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={label}
      name={name}
    />
  )
}
export default CheckboxBtn
