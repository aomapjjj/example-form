import Button from "@mui/material/Button"

type BtnProps = {
  msg: string
  type?: string
  action?: any
  href?: any
}

const Btn = (props: BtnProps) => {
  const { msg, type, action , href} = props
  return (
    <div>
      <Button variant="contained" type={type} onClick={action} href={href}>
        {msg}
      </Button>
    </div>
  )
}
export default Btn
