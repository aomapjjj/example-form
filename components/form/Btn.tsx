import Button from "@mui/material/Button"

type BtnProps = {
  msg: string
  type?: string
  action?: any
}

const Btn = (props: BtnProps) => {
  const { msg, type, action } = props
  return (
    <div>
      <Button variant="contained" type={type} onClick={action}>
        {msg}
      </Button>
    </div>
  )
}
export default Btn
