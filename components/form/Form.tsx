import FormInput from "@/components/form/FormInput"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CheckboxBtn from "./CheckboxBtn"
import RadioBtnGroup from "./RadioBtnGroup"
import CheckBoxBtnGroup from "./CheckBoxBtnGroup"
import SelectBox from "./SelectBox"
import Btn from "./Btn"
import { useActionState } from "react"

import FormOutput from "../formOutput/FormOutput"
import { useState } from "react"

const HOBBIES_INIT: any = {
  game: false,
  music: false,
  craft: false,
  reading: false,
}

const USER_INIT: any = {
  no: "",
  name: "",
  lastname: "",
  email: "",
  gender: "Male",
  hobby: "",
  status: "",
  note: "",
}

const Form = () => {
  const [users, setUsers] = useState<any>([])
  const [value, setValue] = useState<any>({ ...USER_INIT })
  const [hobbies, setHobbies] = useState({ ...HOBBIES_INIT })
  const [confirmCheckBox, setConfirmCheckBox] = useState(false)

  const hobbiesBuilder = (hobbiesValue: any) => {
    const result = Object.keys(hobbiesValue).filter(
      (key: string) => hobbiesValue[key]
    )
    return result
  }

  const resetForm = () => {
    setValue({ ...USER_INIT })
    setHobbies({ ...HOBBIES_INIT })
    setConfirmCheckBox(false)
  }

  const createUser = (prevState: any, formData: FormData) => {
    const rawData = Object.fromEntries(formData)
    const fomattedData = {
      ...rawData,
      confirmPDPA: confirmCheckBox,
      hobbies: hobbiesBuilder(hobbies),
    }
    const data = [...users, fomattedData]
    setUsers(data)
  }

  const handleCheck = (field: any) => {
    setHobbies((prev: any) => {
      prev[field] = !prev[field]
      return { ...prev }
    })
  }

  const handleCheckPDPA = () => {
    setConfirmCheckBox((prev) => !prev)
  }

  const handleChange = (event: any, field: string) => {
    setValue((prev: any) => {
      prev[field] = event.target.value
      return { ...prev }
    })
  }

  const [message, formActions] = useActionState(createUser, null)

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      sx={{
        p: 2,
      }}
    >
      <Grid
        xs={12}
        md={6}
        sx={{
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          display="flex"
          component="div"
          sx={{ flexGrow: 1, justifyContent: "center", marginTop: "50px" }}
        >
          <p>Profile management </p>
        </Typography>
        <Box
          sx={{
            m: 0.5,
            my: 4,
            display: "flex",
            alignItems: "center",
            gap: 6,
            p: 2,
            boxShadow: 2,
            backgroundColor: "white",
          }}
        >
          <form action={formActions}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid item xs={6}>
                <FormInput
                  label="Name"
                  name="name"
                  value={value?.name}
                  onChange={(e: any) => handleChange(e, "name")}
                />
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  label="Lastname"
                  name="lastname"
                  value={value?.lastname}
                  onChange={(e: any) => handleChange(e, "lastname")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormInput
                  label="Email"
                  name="email"
                  value={value?.email}
                  onChange={(e: any) => handleChange(e, "email")}
                />
              </Grid>
              <Grid item xs={12}>
                <CheckboxBtn
                  checked={confirmCheckBox}
                  onChange={handleCheckPDPA}
                  label="Confirm PDPA"
                  name="confirm PDPA"
                />
              </Grid>
              <Grid item xs={6}>
                <RadioBtnGroup
                  value={value?.gender}
                  onChange={(e: any) => handleChange(e, "gender")}
                />
              </Grid>
              <Grid item xs={6}>
                <CheckBoxBtnGroup hobbies={hobbies} setHobbies={handleCheck} />
              </Grid>
              <Grid item xs={12}>
                <SelectBox
                  value={value.status}
                  onChange={(e: any) => handleChange(e, "status")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormInput
                  label="Note"
                  name="note"
                  value={value?.note}
                  onChange={(e: any) => handleChange(e, "note")}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  m: 0.5,
                  my: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                }}
              >
                <Btn msg="Reset" action={resetForm} />
                <Btn msg="Submit" type="submit" />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
      <Grid xs={8} md={6}>
        <FormOutput users={users} setUsers={setUsers} />
      </Grid>
    </Grid>
  )
}
export default Form
