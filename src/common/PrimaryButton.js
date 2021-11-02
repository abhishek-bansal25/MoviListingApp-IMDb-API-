import React from 'react'
import { Button } from "semantic-ui-react";

export default function PrimaryButton({label}) {
  return (
    <Button primary style={{ marginTop: "20px" }} type="submit">
        {label}
      </Button>
  )
}
