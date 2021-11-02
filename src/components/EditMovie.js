import React from "react";
import { Button ,Header} from "semantic-ui-react";
import MovieForm from "../common/MoviForm";
import PrimaryButton from "../common/PrimaryButton";
export default function EditMovie({ setIsAdding }) {
  const handleClick = () => {
    setIsAdding(false);
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <Header as="h2">Edit Movie</Header>
      <MovieForm />
      
      <PrimaryButton label={"Edit Movie"} />
    </div>
  );
}
